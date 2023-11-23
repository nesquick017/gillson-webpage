import Header from './components/Header.jsx';
import './App.css';
import Services from './components/Services.jsx';
import Footer from './components/Footer.jsx';
import AboutMe from './components/AboutMeSection.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="siteContainer">
        <Header />
        <div className="siteBody">
          <AboutMe />
          <Services />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
