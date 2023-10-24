
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Card1 from './Components/Card1';
import Card2 from './Components/Card2';
import Fotter from './Components/Fotter';
import Branding from './pages/Branding';
import Development from './pages/Development';
import Fireartlife from './pages/Fireartlife';
import Illustration from './pages/Illustration';
import InnovationHub from './pages/InnovationHub';
import MotionDesign from './pages/MotionDesign';
import UiDesign from './pages/UiDesign';


function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <div>
        <Routes>
          <Route path="/branding" element={<Branding />} />
          <Route path="/development" element={<Development />} />
          <Route path="/Fireartlife" element={<Fireartlife />} />
          <Route path="/Illustration" element={<Illustration />} />
          <Route path="/InnovationHub" element={<InnovationHub />} />
          <Route path="/MotionDesign" element={<MotionDesign />} />
          <Route path="/UiDesign" element={<UiDesign />} />


        </Routes>
      </div>
      <Card1 />
      <Card2 />
      <Fotter />
    </Router>
  );
}

export default App;
