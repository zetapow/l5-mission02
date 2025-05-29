import "./App.css";
import DiscountForm from "./pages/DiscountForm/DiscountForm";
import RiskRatingForm from "./pages/RiskRating/RiskRatingForm";
import QuoteForm from "./pages/Quote/Quote";
import ClaimHistory from "./pages/ClaimHistory/claimHistory";
import CarValue from "./pages/CarValue/carValue";

function App() {
   return (
      <>
         <h1>Calculate Car value</h1>
         <CarValue />

         <h1>Calculate claim history</h1>
         <ClaimHistory />

         <h1>Calculate risk rating</h1>
         <RiskRatingForm />

         <h1>Generate insurance quotation</h1>
         <h1>Calculate insurance rate</h1>
         <DiscountForm />

         <h1>Generate Monthly and Yearly Premium</h1>
         <QuoteForm />
      </>
   );
}

export default App;
