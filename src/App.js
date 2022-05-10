import React from 'react';
import NavBar from './components/NavBar';
import Image from './components/Image';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';




const App = () => {
    return (
        <div>
            <NavBar />
            <Image />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
            <Copyright />

        </div>
    );
};


export default App;