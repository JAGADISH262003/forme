
import { GoogleGenAI } from "@google/genai";

// Assume process.env.API_KEY is configured in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY is not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function getTopicSummary(topicName: string): Promise<string> {
  if (!API_KEY) {
    return Promise.resolve("API Key not configured. Please set the API_KEY environment variable.");
  }
  
  try {
    const prompt = `Provide a detailed yet concise summary for a student on the C programming topic of: "${topicName}". Explain its core concepts, why it's important, and provide a simple, practical example if applicable. Format the response for readability in a web UI.`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error fetching summary from Gemini API:", error);
    throw new Error("Could not generate summary. The API returned an error.");
  }
}
