// pages/api/generateStory.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { prompt } = req.body;

    try {
      const apiKey = process.env.GEMINI_API;

      if (!apiKey) {
        console.log("Api key needed");
        return;
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const result = await model.generateContent(prompt);

      return res.json({ text: result.response.text() });
    } catch (error) {
      console.error("Error generating content:", error);
      return res.status(500).json({ error: "Failed to generate content" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
