import '../styles/About.css';
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';
function About(){
    return (<><div class="about-section">
    <h1>About Us Page</h1>
    
    <p>Adfd ere rete ertr area rytry ytjyty ete rytr erwq ryt.</p>
  </div>
  
  <h2 >Our Team</h2>
  <div class="row">
    <div class="column">
      <div class="info-card">
        <img src={user1} alt="Jane" />
        <div class="container">
          <h2>Rachel Green</h2>
          <p class="title">CEO & Founder</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>rachel@example.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>
  
    <div class="column">
      <div class="info-card">
        <img src={user2} alt="Mike" />
        <div class="container">
          <h2>Chandler Bing</h2>
          <p class="title">Art Director</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>chandler@example.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>
    
    <div class="column">
      <div class="info-card">
        <img src={user3} alt="John" />
        <div class="container">
          <h2>Joey Tribbiyani</h2>
          <p class="title">Designer</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>joey@example.com</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>
  </div></>)
}

export default About;