export async function calculateQuote(car_value, risk_rating) {
   try {
      const response = await fetch("http://localhost:3000/api/quote", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ car_value, risk_rating }),
      });
      return await response.json();
   } catch (error) {
      return { error: "Connection failed" };
   }
}
