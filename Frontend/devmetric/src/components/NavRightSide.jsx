import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function NavRightSide({isMainPage}){
    
    const navigate = useNavigate();


    const toLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

    const toEditProfile = (e) => {
    e.preventDefault();
    navigate("/profile");
  }




    const getStarted = <form onSubmit={toLogin}>
          <div className="button-container">
            <button type="submit" className="button">Get Started Free</button>
          </div>
        </form>


    const editProfile = <form onSubmit={toEditProfile}>
          <div className="button-container">
            <button type="submit" className="button">Edit Profile</button>
          </div>
        </form>


    const display = isMainPage ? getStarted : editProfile;
    return(display);
}


export default NavRightSide