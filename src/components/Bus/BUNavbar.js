import React from "react";
import { Link } from "react-router-dom";
import "../../assets/controller/styleController.css";

const BUNavbar = () => {
  return (
    <div className="navbar navbar-blue"> {/* Ajoutez la classe 'navbar-blue' */}
      <div className="navbar-container">
        <div className="navbar-logo">
          
        </div>
        <div className="navbar-links">
          <Link to="/" className="btn-auth login">
            Se Deconnecter
          </Link>
          {/* Ajoutez d'autres liens de navigation ici si nécessaire */}
        </div>
      </div>
    </div>
  );
};

export default BUNavbar;
