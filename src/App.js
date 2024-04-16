import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Layout } from './components/Layout';

const navItems = ['Home', 'About', 'Contact', 'Profile'];

export function App() {
  return (
    <div className="App">
      <Header navItems={navItems} />
      <Layout />
      <Footer navItems={navItems} />
    </div>
  );
}
