import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "JA Property MCP",
    description: "Search Jamaican real estate listings",
    version: "1.0.0",

    authentication: {
      type: "none"
    },

    tools: [
      {
        name: "search_properties",
        description: "Search Jamaican properties",

        input_schema: {
          type: "object",
          properties: {
            parish: {
              type: "string",
              description: "Jamaican parish"
            },

            budget: {
              type: "number",
              description: "Maximum budget in JMD"
            }
          }
        },

        endpoint: {
          type: "http",
          url: "https://ja-property-mcp.vercel.app/api/tool/search_properties",
          method: "POST"
        }
      }
    ]
  });
}