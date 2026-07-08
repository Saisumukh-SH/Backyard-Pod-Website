import { Handler } from "@netlify/functions";
import { notion, databaseId } from "./notion";

export const handler: Handler = async () => {
  try {
    const response = await notion.dataSources.query({
      data_source_id: databaseId,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Publish Date",
          direction: "descending",
        },
      ],
    });

    const blogs = response.results.map((page: any) => {
      const props = page.properties;

      return {
        id: page.id,

        title: props.Title?.title?.[0]?.plain_text ?? "",

        slug: props.Slug?.rich_text?.[0]?.plain_text ?? "",

        excerpt: props.Excerpt?.rich_text?.[0]?.plain_text ?? "",

        category: props.Category?.select?.name ?? "",

        author: props.Author?.rich_text?.[0]?.plain_text ?? "",

        publishDate: props["Publish Date"]?.date?.start ?? "",

        featured: props.Featured?.checkbox ?? false,

        seoTitle: props["SEO Title"]?.rich_text?.[0]?.plain_text ?? "",

        metaDescription:
          props["Meta Description"]?.rich_text?.[0]?.plain_text ?? "",

        readingTime: props["Reading Time"]?.number ?? 0,

        heroImage:
          props["Hero Image"]?.files?.[0]?.file?.url ??
          props["Hero Image"]?.files?.[0]?.external?.url ??
          null,

        ogImage:
          props["OG Image"]?.files?.[0]?.file?.url ??
          props["OG Image"]?.files?.[0]?.external?.url ??
          null,
      };
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogs),
    };
  } catch (error: any) {
    console.error("Notion Error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message,
        code: error.code,
        status: error.status,
        body: error.body,
      }),
    };
  }
};