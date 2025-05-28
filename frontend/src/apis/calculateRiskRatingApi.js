export async function calculateRiskRating(claimHistory) {
   try {
      const response = await fetch("http://localhost:3000/api/risk-rating", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ claim_history: claimHistory }),
      });
      return await response.json();
   } catch (error) {
      return { error: "Connection failed" };
   }
}
