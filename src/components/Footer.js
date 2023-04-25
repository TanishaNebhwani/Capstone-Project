import '../styles/Footer.css';

import logo from '../assets/footer-logo.png';
function Footer(){
    return (<div className="footer">
       <div className="footer__addr">
       <img  className="footer-logo" src={logo} alt='logo'></img>
    
  </div>
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Media</h2>

      <ul className="nav__ul">
        <li>
          <a href="/home">Online</a>
        </li>

        <li>
          <a href="/home">Print</a>
        </li>
            
        <li>
          <a href="/home">Alternative Ads</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item nav__item--extra">
      <h2 className="nav__title">Technology</h2>
      
      <ul className="nav__ul nav__ul--extra">
        <li>
          <a href="/home">Hardware Design</a>
        </li>
        
        <li>
          <a href="/home">Software Design</a>
        </li>
        
        <li>
          <a href="/home">Digital Signage</a>
        </li>
        
        <li>
          <a href="/home">Automation</a>
        </li>
        
        <li>
          <a href="/home">Artificial Intelligence</a>
        </li>
        
        <li>
          <a href="/home">IoT</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item">
      <h2 className="nav__title">Legal</h2>
      
      <ul className="nav__ul">
        <li>
          <a href="/home">Privacy Policy</a>
        </li>
        
        <li>
          <a href="/home">Terms of Use</a>
        </li>
        <li>
          <a href="/home">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  <div className="legal">
    <p>&copy; 2019 Something. All rights reserved.</p>
    
  </div>
        </div>);
}

export default Footer;