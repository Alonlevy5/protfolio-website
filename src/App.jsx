import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/protfolio/Portfolio';
// import Services from './components/services/Services';
import Testemonials from './components/testemonials/Testemonials';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Testemonials />
      <Contact />
      <Footer />
    </>
    //2:04
  );
}

export default App;
