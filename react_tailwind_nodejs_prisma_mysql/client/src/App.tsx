import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}
