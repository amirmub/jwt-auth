import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";



function Footer() {
  return (
    <div className={classes.footer_container}>
      <div className={classes.footer_wrapper}>
        <div className={classes.footer_left}>
          <small>
            <Link href="">
              <span>Join</span>Wi<span>th</span>Amir
            </Link>
          </small>{" "}
          <div className={classes.footer_icon}>
            <p><FaFacebookF /></p>
            <p><FaInstagram /></p>
            <p><FaYoutube /></p>
            <p><FaLinkedinIn /></p>
          </div>
        </div>

        <div className={classes.footer_item}>
          <h3>Useful Link</h3>
          <div className={classes.footer_content}>
            <p>How It Work</p>
            <p>Team of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <div className={classes.footer_item}>
          <h3>Contact Info</h3>
          <div className={classes.footer_content}>
            <p>Networking with Amir</p>
            <p>Support@Amir Network</p>
            <p>+2519 85202027</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
