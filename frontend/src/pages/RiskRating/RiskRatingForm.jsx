import { useState } from "react";

import styles from "./RiskRatingForm.module.css";

// Import API
import { calculateRiskRating } from "../../apis/calculateRiskRatingApi";

export default function DiscountForm() {
   // State hooks for inputs and displayed results
   const [userInputs, setUserInputs] = useState({
      claim_history: "",
   });
   const [result, setResult] = useState(null);

   // Handle form submit
   async function handleSubmit(event) {
      event.preventDefault();
      const response = await calculateRiskRating(userInputs.claim_history);
      setResult(response);
   }

   return (
      <div>
         <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="claim_history">Submit your claim history</label>
            <input
               id="claim_history"
               type="textarea"
               rows={3}
               placeholder="For example 'I had a scratch in 2025 and a crash in 2024'"
               value={userInputs.claim_history}
               // Call existing state
               onChange={(event) =>
                  setUserInputs({
                     ...userInputs,
                     claim_history: event.target.value,
                  })
               }
            />
            <button type="submit">Calculate Risk Rating</button>
         </form>

         {/* Conditional rendering */}
         {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}

         {/* Check if result exists before calling property. Display error or discount rating depending on result*/}

         {result?.error && <div className={styles.error}>{result.error}</div>}
         {result?.risk_rating && (
            <div className={styles.result}>
               Your Risk Rating is {result.risk_rating}
            </div>
         )}
      </div>
   );
}
