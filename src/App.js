import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#282c34" }}>
      <Header />
      <div className="content">
        <Layout />
      </div>
      <Footer />
    </div>
  );
}

export default App;
