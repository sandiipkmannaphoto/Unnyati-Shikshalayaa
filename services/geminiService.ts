import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is not set. AI features will not work.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateContent = async (prompt: string, type: 'course' | 'blog'): Promise<string> => {
  const ai = getAIClient();
  if (!ai) return "API Key missing. Cannot generate content.";

  try {
    const modelId = 'gemini-3-flash-preview';
    
    let systemInstruction = "";
    if (type === 'course') {
      systemInstruction = "You are an academic curriculum expert. Write professional, enticing descriptions for computer courses.";
    } else {
      systemInstruction = "You are a tech blogger for an educational institute. Write educational and engaging content.";
    }

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "No content generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating content. Please try again.";
  }
};