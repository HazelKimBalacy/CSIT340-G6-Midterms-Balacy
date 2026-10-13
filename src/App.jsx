import Footer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";
import PlanPicker from "./components/planpicker.jsx";
import Waitlist from "./components/waitlist.jsx";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#DDDDDD] text-[#000000]">
      <Navbar />
      <PlanPicker />
      <Waitlist />
      <Footer />
    </div>
  );
}

export default App;
