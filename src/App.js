import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Layout } from "./components/Layout";

export function App() {
  return (
    <div className="App" style={{ backgroundColor: "#282c34" }}>
      <Header />
      <Layout />
      <Footer />
    </div>
  );
}
