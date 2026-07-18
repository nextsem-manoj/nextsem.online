/**
 * Call Gemini 1.5 Flash to get dynamic responses for chatbot questions
 */
export async function askGemini(prompt: string, apiKey: string): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: prompt }]
      }],
      systemInstruction: "You are 'Semmy', an encouraging AI tutor mascot for Nextsem Academy. You help students learn web development (HTML, CSS, JS, React, Node.js), computer fundamentals (Von Neumann, CPU registers, digital logic gates), and school curriculum (Class 11 Accountancy, Class 12 Current Electricity). Keep your answers concise, structured, and easy to read. Use bullet points and simple headers. Suggest code blocks, command prompt outputs, or concepts where applicable."
    })
  });
  
  if (!response.ok) {
    throw new Error(`Gemini API call failed with status: ${response.status}`);
  }
  
  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that.";
}
