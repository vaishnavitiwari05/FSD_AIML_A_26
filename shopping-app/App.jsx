import Navbar from "./navbar.jsx";
import Header from "./header.jsx";
import Home from "./home.jsx";
import Footer from "./footer.jsx";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;