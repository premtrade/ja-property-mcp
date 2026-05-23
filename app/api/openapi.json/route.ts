import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    openapi: "3.0.1",
    info: {
      title: "JA Property MCP API",
      version: "1.0.0"
    },
    paths: {
      "/api/tool/search_properties": {
        post: {
          operationId: "search_properties",
          summary: "Search Jamaican properties",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
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
            }
          },
          responses: {
            "200": {
              description: "Successful response"
            }
          }
        }
      }
    }
  });
}