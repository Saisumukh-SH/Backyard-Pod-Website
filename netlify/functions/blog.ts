import { Handler } from "@netlify/functions";
import { notion, databaseId } from "./notion";

const richTextToString = (richText: any[] = []) =>
  richText.map((text) => text.plain_text).join("");

const parseBlocks = (blocks: any[]) => {
  return blocks
    .map((block) => {
      switch (block.type) {
        case "heading_1":
          return {
            type: "h1",
            text: richTextToString(block.heading_1.rich_text),
          };

        case "heading_2":
          return {
            type: "h2",
            text: richTextToString(block.heading_2.rich_text),
          };

        case "heading_3":
          return {
            type: "h3",
            text: richTextToString(block.heading_3.rich_text),
          };

        case "paragraph":
          return {
            type: "paragraph",
            text: richTextToString(block.paragraph.rich_text),
          };

        case "bulleted_list_item":
          return {
            type: "bullet",
            text: richTextToString(block.bulleted_list_item.rich_text),
          };

        case "numbered_list_item":
          return {
            type: "number",
            text: richTextToString(block.numbered_list_item.rich_text),
          };

        case "quote":
          return {
            type: "quote",
            text: richTextToString(block.quote.rich_text),
          };

        case "callout":
          return {
            type: "callout",
            text: richTextToString(block.callout.rich_text),
            icon:
              block.callout.icon?.emoji ??
              block.callout.icon?.external?.url ??
              null,
          };

        case "divider":
          return {
            type: "divider",
          };

        case "to_do":
          return {
            type: "todo",
            checked: block.to_do.checked,
            text: richTextToString(block.to_do.rich_text),
          };

        case "code":
          return {
            type: "code",
            language: block.code.language,
            text: richTextToString(block.code.rich_text),
          };

        case "image":
          return {
            type: "image",
            url:
              block.image.type === "external"
                ? block.image.external.url
                : block.image.file.url,
            caption: richTextToString(block.image.caption),
          };

        default:
          return null;
      }
    })
    .filter(Boolean);
};

export const handler: Handler = async (event) => {
  try {
    const slug = event.queryStringParameters?.slug;

    if (!slug) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Missing slug parameter",
        }),
      };
    }

    const response = await notion.dataSources.query({
      data_source_id: databaseId,
      filter: {
        and: [
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
          {
            property: "Slug",
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
    });

    if (response.results.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: "Blog not found",
        }),
      };
    }

    const page: any = response.results[0];
    const props = page.properties;

    const blocks = await notion.blocks.children.list({
      block_id: page.id,
    });

    const content = parseBlocks(blocks.results);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: page.id,

        title: props.Title?.title?.[0]?.plain_text ?? "",

        slug: props.Slug?.rich_text?.[0]?.plain_text ?? "",

        excerpt: props.Excerpt?.rich_text?.[0]?.plain_text ?? "",

        category: props.Category?.select?.name ?? "",

        author: props.Author?.rich_text?.[0]?.plain_text ?? "",

        publishDate: props["Publish Date"]?.date?.start ?? "",

        featured: props.Featured?.checkbox ?? false,

        seoTitle:
          props["SEO Title"]?.rich_text?.[0]?.plain_text ?? "",

        metaDescription:
          props["Meta Description"]?.rich_text?.[0]?.plain_text ?? "",

        readingTime:
          props["Reading Time"]?.number ?? 0,

        heroImage:
          props["Hero Image"]?.files?.[0]?.file?.url ??
          props["Hero Image"]?.files?.[0]?.external?.url ??
          null,

        ogImage:
          props["OG Image"]?.files?.[0]?.file?.url ??
          props["OG Image"]?.files?.[0]?.external?.url ??
          null,

        content,
      }),
    };
  } catch (error: any) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message,
        code: error.code,
        status: error.status,
      }),
    };
  }
};