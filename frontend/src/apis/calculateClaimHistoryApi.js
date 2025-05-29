export async function analyzeClaimHistory(numberOfClaims, yearsInsured) {
   try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/claim-history`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            numberOfClaims: Number(numberOfClaims),
            yearsInsured: Number(yearsInsured),
         }),
      });
      return await response.json();
   } catch (error) {
      return { error: "Connection to claim history API failed." };
   }
}