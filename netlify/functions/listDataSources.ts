import { Client } from "@notionhq/client";
import { Handler } from "@netlify/functions";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const handler: Handler = async () => {
  try {
    const result = await notion.search({
      filter: {
        property: "object",
        value: "data_source",
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(result.results, null, 2),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify(error, null, 2),
    };
  }
};
