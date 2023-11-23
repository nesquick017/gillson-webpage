import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../components_css/Services.css';

import trainConsultation from '../background-pictures/trainConsultationBackground.jpeg';
import mealConsultation from '../background-pictures/mealConsultationBackground.jpeg';
import injuryRecover from '../background-pictures/injuryRecoverBackground.jpeg';

const Services = () => {
  return (
    <div className="services">
      <h1>This is my competitions:</h1>
      <div className="serviceList">
        <div className="trainConsultation service-unit trainConsultation">
          <div class="textArea">
            <h4>Trains</h4>
          </div>
        </div>
        <div className="mealConsultation service-unit mealsConsultation">
          <div class="textArea">
            <h4>Meals</h4>
          </div>
        </div>
        <div className="injuryReciveryInfo service-unit injuriesConsultation">
          <div class="textArea">
            <h4>Injuries</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

// {/* <h1 className="servicesHeader">This is our services:</h1> */}
// <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
// <div className="carousel-inner">
//   <div className={cnTrainConsultation}>
//     <img className="d-block w-100" id="1" src={trainConsultation} alt="Первый слайд" />
//     <p>This is the block about train consultation</p>
//   </div>
//   <div className={cnMealConsultation}>
//     <img className="d-block w-100" id="2" src={mealConsultation} alt="Второй слайд" />
//     <p>This is the block about the meal consultation</p>
//   </div>
//   <div className={cnInjuryRecover}>
//     <img className="d-block w-100" id="3" src={injuryRecover} alt="Третий слайд" />
//     <p>This is the block about how to manage your injuries</p>
//   </div>
// </div>
// <a
//   className="carousel-control-prev"
//   href="#carouselExampleControls"
//   role="button"
//   data-slide="prev"
//   onClick={() => prevSlideHandelr(activeItem)}
// >
//   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//   <span className="sr-only">Previous</span>
// </a>
// <a
//   className="carousel-control-next"
//   href="#carouselExampleControls"
//   role="button"
//   data-slide="next"
//   onClick={() => nextSlideHandler(activeItem)}
// >
//   <span className="carousel-control-next-icon" aria-hidden="true"></span>
//   <span className="sr-only">Next</span>
// </a>
// </div>
