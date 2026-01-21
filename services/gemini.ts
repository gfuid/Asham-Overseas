
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getAiAssistantResponse = async (userMessage: string) => {
  if (!API_KEY) return "I'm sorry, my assistant features are currently disabled. Please contact us via phone.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `You are an AI assistant for "Asham Overseas", a premium textile manufacturer in Panipat. 
        We specialize in:
        1. Sofa Fabrics (Jute, Quilted, various textures like Sprinkle/Voltaz).
        2. Designer Curtains (Melody, Marble Texture).
        3. Bed Linens (Hotel & Hospital specializations, King/Double sheets, Comforters).
        
        Business Details:
        - CEO: Jatin Chugh
        - Location: Panipat, Haryana
        - Established: 2012
        - Contact: 08046070204
        
        Answer professionally, focusing on product quality and wholesale capabilities. Keep responses concise.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting. Please feel free to call our CEO Jatin Chugh at 08046070204.";
  }
};
