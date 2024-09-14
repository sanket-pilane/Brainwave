import { Data } from "./../../../node_modules/unified/index.d";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API,
});
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API key not configured", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("Messages are required", { status: 400 });
    }
    if (!amount) {
      return new NextResponse("Amount are required", { status: 400 });
    }
    if (!resolution) {
      return new NextResponse("Resolution are required", { status: 400 });
    }

    const response = await openai.images.generate({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Conversation error:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
