import Header from './components/Header.jsx';
import './App.css';
import Description from './components/Description.jsx';
import GillsonPicture from './components/GillsonPicture.jsx';
import Services from './components/Services.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="siteBody">
        <div className="welcomePage">
          <Description />
          <GillsonPicture />
        </div>
        <Services />
        <Footer />
      </div>
    </div>
  );
}

export default App;
