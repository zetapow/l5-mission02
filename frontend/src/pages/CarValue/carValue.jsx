import { useState } from "react";
import styles from "./carValue.module.css";
import { getCarValue } from "../../apis/calculateCarValueApi";

export default function CarValue() {
   const [inputs, setInputs] = useState({
      model: "",
      year: "",
   });
   const [result, setResult] = useState(null);

   async function handleSubmit(event) {
      event.preventDefault();
      const response = await getCarValue(inputs.model, inputs.year);
      setResult(response);
   }

   return (
      <div>
         <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
               <label htmlFor="model">Car Model</label>
               <input
                  id="model"
                  type="text"
                  value={inputs.model}
                  onChange={(e) => setInputs({ ...inputs, model: e.target.value })}
               />
            </div>

            <div className={styles.inputGroup}>
               <label htmlFor="year">Year</label>
               <input
                  id="year"
                  type="number"
                  value={inputs.year}
                  onChange={(e) => setInputs({ ...inputs, year: e.target.value })}
               />
            </div>

            <button type="submit">Check Car Value</button>
         </form>

         {result?.error && <div className={styles.error}>{result.error}</div>}
         {result?.value && (
            <div className={styles.result}>
               Estimated car value: ${result.value}
            </div>
         )}
      </div>
   );
}