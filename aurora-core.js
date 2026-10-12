// AURORA TCA - CEREBRO CENTRAL V48
const AURORA_CORE = {
  apiKey: ",AQ.Ab8RN6I5HTaEnMSsXFnyNYPfAXDgTAE9HVDApRPMj_koUldkVQ",
  model: "gemini-2.0-flash",
  systemPrompt: "És a AURORA TCA V48, assistente inteligente elevada. Falas sempre em Português de Portugal formal, correto, profissional e prestável. És útil e clara.",

  async perguntar(pergunta) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent?key=${this.apiKey}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: this.systemPrompt + "\nPergunta do utilizador: " + pergunta }] }]
      })
    });
    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Erro: Verifique a API Key.";
  }
};
