import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../components_css/AboutMeSection.css';

const AboutMe = () => {
  return (
    <div className="container text-center aboutMeContainer">
      <div className="row">
        <div id="about me descriptions" className="col">
          <h1 className="aboutMeHeader">My vision</h1>
          <p className="aboutMe text-wrap">
            Ever since I can remember I had a passion for movement in all kinds of ways! After
            playing football for 15 years, I discovered breakdancing and acrobatics. I realized the
            capacity and the potential my body had when in motion. So I started to learn more about
            movement from Ido Portal and other teachers and made my own practice and teaching become
            my everyday life. I want to help people to unlock the full potential of their bodies and
            to become better movers. Gaining strength, improving mobility, learning skills and
            discovering what is possible to do with one's own body is what I want to share with my
            students.
          </p>
        </div>
        <div id="picture" className="col gillsonPicture">
          <h1>My name is Gillson Gillen.</h1>
          <p>And im the fintess specialist.</p>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
