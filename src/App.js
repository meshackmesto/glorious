import React ,{useState}from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Your Navbar component
import HomePage from './components/HomePage';
import About from './components/About';
import SchoolLife from './components/SchoolLife';
import Contact from './components/Contact';
import Enquire from './components/Enquire';
import Footer from './components/Footer'; // Your Footer component

function App() {

  const [playState, setPlayState] = useState(false)


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About playState={playState} setPlayState={setPlayState}/>} />
        <Route path="/SchoolLife" element={<SchoolLife />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Enquire" element={<Enquire />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;