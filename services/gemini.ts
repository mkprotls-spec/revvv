
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getChatResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `Tu es l'assistant virtuel de MKM Rénov, une entreprise de charpente et rénovation basée à Valras-Plage, Hérault. 
        Ton but est d'aider les clients, répondre à leurs questions sur la rénovation de charpente, la maçonnerie, et les traitements du bois. 
        Sois professionnel, poli, et encourage-les à demander un devis gratuit. 
        MKM Rénov propose: rénovation, construction, traitement anti-nuisibles, vente de bois.
        Coordonnées: 12 Rue des Artisans, Valras-Plage. Tél: 04 67 00 00 00.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Désolé, je rencontre une petite difficulté technique. Pourriez-vous nous contacter directement par téléphone au 04 67 00 00 00 ?";
  }
};
