import { useState } from "react";
import styles from "./Quote.module.css";
import { calculateQuote } from "../../apis/calculateQuoteApi";

export default function QuoteForm() {
   // State hooks for inputs and result
   const [userInputs, setUserInputs] = useState({
      car_value: "",
      risk_rating: "",
   });
   const [result, setResult] = useState(null);

   // Handle form submission
   async function handleSubmit(event) {
      event.preventDefault();
      const response = await calculateQuote(
         userInputs.car_value,
         userInputs.risk_rating
      );

      // Merge conflict resolution: pick the version that expects `response.result`
      // but fallback if response is already the result
      setResult(response.result || response);
   }

   return (
      <div>
         <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="car_value">Car Value</label>
            <input
               id="car_value"
               type="number"
               placeholder="NZD"
               value={userInputs.car_value}
               onChange={(event) =>
                  setUserInputs({
                     ...userInputs,
                     car_value: event.target.value,
                  })
               }
            />

            <label htmlFor="risk_rating">Risk Rating</label>
            <input
               id="risk_rating"
               type="number"
               placeholder="1-5"
               value={userInputs.risk_rating}
               onChange={(event) =>
                  setUserInputs({
                     ...userInputs,
                     risk_rating: event.target.value,
                  })
               }
            />
            <button type="submit">Calculate Insurance Quote</button>
         </form>

         {result?.error && <div className={styles.error}>{result.error}</div>}

         {!result?.error && result?.monthly !== undefined && result?.yearly !== undefined && (
            <div className={styles.result}>
               Your monthly premium is: ${result.monthly} <br />
               Your yearly premium is: ${result.yearly}
            </div>
         )}
      </div>
   );
}
