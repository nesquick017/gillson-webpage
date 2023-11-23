import React from 'react';
import '../components_css/Footer.css';

const Footer = () => {
  return (
    <div className="container footerContainer text-center">
      <div className="authorLink">
        <p>Created by</p>
        <p>
          <a className="gitLink" href="https://github.com/nesquick017">
            Madorskii Nikita
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

// <footer className="footerSection">
//   <div className="in-footer">
//     <div className="gitIntegration">
//       <p>Created by</p>
//       <a class="gitHubLink" href="https://github.com/nesquick017">
//         Madorskii Nikita
//       </a>
//     </div>
//   </div>
// </footer>
