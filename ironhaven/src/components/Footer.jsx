import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import './Footer.css'


export default function Footer() {



  return <footer className='footer'>
    <div className="container footer__container">
      <article>
        <Link to='/'  >
          <img className="footerImage" src={Logo} alt="IronHaven" />
        </Link>
        <p>
        Transforming lives, one rep at a time. Welcome to Ironhaven Gym, where strength meets community, and fitness becomes a lifestyle. Join us in the pursuit of a healthier, happier you. 💪 #IronhavenFitness #StrengthInCommunity        </p>
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/pradeepsingroul/" target="_blank" rel="noreferrer noopener"><FaLinkedin /></a>
          <a href="https://www.facebook.com/pradeep.singroul.33/" target="_blank" rel="noreferrer noopener"><FaFacebook /></a>
          <a href="https://www.instagram.com/_pradeep_singroul_/" target="_blank" rel="noreferrer noopener"><AiOutlineInstagram /></a>
          <a href="https://twitter.com/mr_pradeep_mp35" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter /></a>
        </div>
      </article>
      <article>
        <h4>Permalinks</h4>
        <Link to='/'><p>Home</p></Link>
        <Link to='/about'><p>About</p></Link>
        <Link to='/plans'><p>Plans</p></Link>
        <Link to='/trainers'><p>Trainers</p></Link>
        <Link to='/gallery'><p>Gallery</p></Link>
        <Link to='/contact'><p>Contact</p></Link>
      </article>
      <article>
        <h4>Get In Touch</h4>
        <Link to='/'><p>Blogs</p></Link>
        <Link to='/about'><p>Case Studies</p></Link>
        <Link to='/plans'><p>Events</p></Link>
        <Link to='/trainers'><p>Communities</p></Link>
        <Link to='/gallery'><p>FAQs</p></Link>
      </article>
      <div className="footer__copyright">
        <p>
          <small>2024 PRADEEP SINGROUL &copy; All Rights Reserved</small>
        </p>
      </div>
    </div>
  </footer>
}