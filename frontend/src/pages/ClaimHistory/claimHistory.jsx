import { useState } from "react";
import styles from "./claimHistory.module.css";
import { analyzeClaimHistory } from "../../apis/calculateClaimHistoryApi";

export default function ClaimHistoryForm() {
   const [inputs, setInputs] = useState({
      numberOfClaims: "",
      yearsInsured: "",
   });
   const [result, setResult] = useState(null);

   async function handleSubmit(event) {
      event.preventDefault();
      const response = await analyzeClaimHistory(
         inputs.numberOfClaims,
         inputs.yearsInsured
      );
      setResult(response);
   }

   return (
      <div>
         <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="numberOfClaims">Number of Claims</label>
            <input
               id="numberOfClaims"
               type="number"
               value={inputs.numberOfClaims}
               onChange={(e) =>
                  setInputs({ ...inputs, numberOfClaims: e.target.value })
               }
            />

            <label htmlFor="yearsInsured">Years Insured</label>
            <input
               id="yearsInsured"
               type="number"
               value={inputs.yearsInsured}
               onChange={(e) =>
                  setInputs({ ...inputs, yearsInsured: e.target.value })
               }
            />

            <button type="submit">Analyze Claim History</button>
         </form>

         {result?.error && <div className={styles.error}>{result.error}</div>}
         {result?.riskLevel && (
            <div className={styles.result}>
               Your risk level is: {result.riskLevel}
            </div>
         )}
      </div>
   );
}
