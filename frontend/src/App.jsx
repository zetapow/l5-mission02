import "./App.css";
import DiscountForm from "./pages/DiscountForm/DiscountForm";
import RiskRatingForm from "./pages/RiskRating/RiskRatingForm";
import QuoteForm from "./pages/Quote/Quote";

function App() {
   return (
      <>
         <h2>Get car value</h2>
         <h2>Calculate risk rating</h2>
         <RiskRatingForm />

         <h2>Calculate insurance rate</h2>
         <DiscountForm />

         <h2>Generate Monthly and Yearly Premium</h2>
         <QuoteForm />
      </>
   );
}

export default App;
