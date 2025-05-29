import "./App.css";
import DiscountForm from "./pages/DiscountForm/DiscountForm";
import RiskRatingForm from "./pages/RiskRating/RiskRatingForm";
import QuoteForm from "./pages/Quote/Quote";
import ClaimHistory from "./pages/ClaimHistory/claimHistory";
import CarValue from "./pages/CarValue/carValue";

function App() {
   return (
      <>
<<<<<<< HEAD
         <h2>Get car value</h2>
         <h2>Calculate risk rating</h2>
=======
         <h1>Calculate Car value</h1>
         <CarValue />

         <h1>Calculate claim history</h1>
         <ClaimHistory />

         <h1>Calculate risk rating</h1>
>>>>>>> main
         <RiskRatingForm />

         <h2>Calculate insurance rate</h2>
         <DiscountForm />

         <h2>Generate Monthly and Yearly Premium</h2>
         <QuoteForm />
      </>
   );
}

export default App;
