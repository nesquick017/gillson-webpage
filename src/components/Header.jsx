import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../components_css/Header.css';

const Header = () => {
  return (
    <div className="container headerContainer text-center">
      <div className="row">
        <div className="col btnContainer">
          <btn id="aboutMe" className="btn headerBtn">
            About me
          </btn>
        </div>
        <div className="col btnContainer">
          <btn id="Services" className="btn headerBtn">
            Services
          </btn>
        </div>
        <div className="col btnContainer">
          <btn id="Contacts" className="btn headerBtn">
            Contacts
          </btn>
        </div>
      </div>
    </div>
  );
};

export default Header;
