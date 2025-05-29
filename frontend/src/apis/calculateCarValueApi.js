export async function getCarValue(model, year) {
   try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/car-value`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ model, year }),
      });
      return await response.json();
   } catch (error) {
      return { error: "Could not connect to the Car Value API" };
   }
}
