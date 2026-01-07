import NavBar from "../components/NavBar"
import MainView from "../components/MainView"
import Cards from "../components/Cards";
import "../styles/index.css"

function HomePage(){
    return(
        <div>
            <NavBar/>
            <MainView/>
            <Cards/>
        </div>
    );
}

export default HomePage;