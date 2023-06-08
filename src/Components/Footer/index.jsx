import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="nav-link">
        <Link to="/about-us">
          About us 
        </Link> <Link to="/terms" >
           Terms of service
        </Link>
      </div>
    </div>
  );
}

export default Footer;