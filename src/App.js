import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Layout } from './components/Layout';
import Profile from './components/Profile';

export function App() {
  return (
    <div className="App" style={{ backgroundColor: '#282c34' }}>
      <Header />
      <div className="content">
        {/* <Layout /> */}
        <Profile />
      </div>
      <Footer />
    </div>
  );
}
