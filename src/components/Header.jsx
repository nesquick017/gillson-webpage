import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../components_css/Header.css';

const Header = () => {
  return (
    <header className="headerSection">
      <div className="in-header">
        <ul className="navList">
          <li className="navLink">
            <button type="button" class="btn">
              Main Page
            </button>
          </li>
          <li className="navLink">
            <button type="button" class="btn">
              WorkShops
            </button>
          </li>
          <li className="navLink">
            <button type="button" class="btn">
              Contacts
            </button>
          </li>
          <li className="navLink">
            <button type="button" class="btn">
              About
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
