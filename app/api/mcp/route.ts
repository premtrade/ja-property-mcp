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
    name: "JA Property MCP",
    version: "1.0.0",
    tools
  });
}