import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <LandingPage/>
   <Footer/>
    </div>
  );
}

export default App;
