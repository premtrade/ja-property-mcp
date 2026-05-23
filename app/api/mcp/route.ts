import { NextResponse } from "next/server";

const tools = [
  {
    name: "search_properties",
    description: "Search Jamaican properties",
    input_schema: {
      type: "object",
      properties: {
        parish: {
          type: "string"
        },
        budget: {
          type: "number"
        }
      }
    }
  }
];

export async function GET() {
  return NextResponse.json({
    schema_version: "v1",

    name_for_human: "JA Property MCP",

    name_for_model: "ja_property_mcp",

    description_for_human:
      "Search Jamaican real estate listings",

    description_for_model:
      "Tool for searching Jamaican properties by parish and budget",

    auth: {
      type: "none"
    },

    api: {
      type: "openapi",
      url: "https://ja-property-mcp.vercel.app/api/openapi.json"
    },

    tools
  });
}