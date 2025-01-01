import OpenAI from "openai";
import customData from "../../customData.json";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this key is set in your .env file
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const messages = req.body.messages; // Adjust based on how the body is structured

    if (!messages || messages.length === 0) {
      return res.status(400).json({ error: "Messages are required" });
    }

    const context = `
      You are a chatbot knowledgeable about the Save Gaza Campaign.
      Here is some information:
      ${JSON.stringify(customData, null, 2)}
    `;

    try {
      const userMessage = messages[messages.length - 1].content;

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: context },
          ...messages.slice(0, -1), // All messages except the last one
          { role: "user", content: userMessage },
        ],
      });

      const botReply = response.choices[0].message.content;
      return res.status(200).json({ reply: botReply });
    } catch (error) {
      console.error("Error with OpenAI API:", error);
      return res.status(500).json({ error: "Failed to fetch AI response" });
    }
  } else if (req.method === "GET") {
    // Provide a simple GET response
    res.status(200).json({ message: "Welcome to the Save Gaza Campaign chatbot. Please send a message!" });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}