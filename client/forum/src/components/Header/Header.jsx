import { Link } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header_container}>
      <div className={classes.header_item}>
        <small><Link href=""><span>Join</span>Wi<span>th</span>Amir</Link></small>
        <div className={classes.header_list}>
          <p>Home</p>
          <p>About</p>
          <p>How it Work</p>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
