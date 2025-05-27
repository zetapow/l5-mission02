import { useState } from "react";

import styles from "./DiscountForm.module.css";

// Import API
import { calculateDiscount } from "../../apis/calculateDiscountApi";

export default function DiscountForm() {
   // State hooks for inputs and displayed results
   const [userInputs, setUserInputs] = useState({
      age: "",
      experience: "",
   });
   const [result, setResult] = useState(null);

   // Handle form submit
   async function handleSubmit(event) {
      event.preventDefault();
      const response = await calculateDiscount(
         userInputs.age,
         userInputs.experience
      );
      setResult(response);
   }

   return (
      <div>
         <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="age">Age</label>
            <input
               id="age"
               type="number"
               placeholder="years"
               value={userInputs.age}
               // Call existing state and only overide age property
               onChange={(event) =>
                  setUserInputs({ ...userInputs, age: event.target.value })
               }
            />

            <label htmlFor="experience">Driving Experience</label>
            <input
               type="number"
               id="experience"
               placeholder="years"
               value={userInputs.experience}
               // Spread operator to keep age property
               onChange={(event) =>
                  setUserInputs({
                     ...userInputs,
                     experience: event.target.value,
                  })
               }
            />
            <button type="submit">Get your discount rate!</button>
         </form>

         {/* Conditional rendering */}
         {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}

         {/* Check if result exists before calling property. Display error or discount rating depending on result*/}

         {result?.error && <div className={styles.error}>{result.error}</div>}
         {result?.discount_rate === 0 ? (
            <div className={styles.noDiscount}>
               ⚠️ You do not qualify for a discount
            </div>
         ) : (
            result?.discount_rate && (
               <div className={styles.result}>
                  ✅ Your discount rate is: {result.discount_rate}%
               </div>
            )
         )}
      </div>
   );
}
