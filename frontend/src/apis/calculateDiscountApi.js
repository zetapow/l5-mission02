export async function calculateDiscount(age, experience) {
   try {
      const response = await fetch("http://localhost:3000/api/discount", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ age, experience }),
      });
      return await response.json();
   } catch (error) {
      return { error: "Connection failed" };
   }
}
