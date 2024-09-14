import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// Function to create a chat session
async function createChatSession(apiKey: string, externalUserId: string) {
  const url = "https://api.on-demand.io/chat/v1/sessions";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: "Sy9LgKyj5m1BEe52cVXvyJmjNCiNzZMh",
    },
    body: JSON.stringify({
      pluginIds: [],
      externalUserId: externalUserId,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create chat session");
  }

  const data = await response.json();
  return data.data.id; // Extract session ID
}

// Function to submit a query
async function submitQuery(apiKey: string, sessionId: string, query: string) {
  const url = `https://api.on-demand.io/chat/v1/sessions/${sessionId}/query`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: apiKey,
    },
    body: JSON.stringify({
      endpointId: "predefined-openai-gpt4o",
      query: query,
      pluginIds: ["plugin-1712327325", "plugin-1713962163"],
      responseMode: "sync",
    }),
  });

  if (!response.ok) {
    console.log(response.json());
  }

  const data = await response.json();
  return data;
}

export async function POST(req: Request) {
  try {
    // Authenticate user with Clerk
    const { userId } = auth();

    // Ensure that the request body contains the necessary data
    const body = await req.json();
    const { query } = body;

    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    const apiKey = "Sy9LgKyj5m1BEe52cVXvyJmjNCiNzZMh"; // Ensure the API key is set
    const externalUserId = userId; // Assuming the external user ID is the Clerk user ID

    if (!apiKey) {
      return new NextResponse("API key not configured", { status: 500 });
    }

    // Create chat session
    const sessionId = await createChatSession(apiKey, "rits");

    // Submit the query
    const response = await submitQuery(apiKey, sessionId, query);

    // Return the response from the API
    return NextResponse.json(response);
  } catch (error: any) {
    console.error("Error:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
