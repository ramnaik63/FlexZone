// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './home';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection'
import Footer from './Footer';
import ServicesSection from './ServicesSection';
import GymMembershipForm from './GymMembershipForm';
import AdminPage from './Admin';
import Admin from './Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={AboutSection} />
        <Route path="/services" component={ServicesSection} />
        <Route path="/contact" component={ContactSection} />
        <Route path='/subscribe' component={GymMembershipForm}/>
        <Route path='/admin' component={Admin}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
