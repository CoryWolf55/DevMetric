import { useState , useEffect} from "react";
import axios from "axios";
import {API_URL_BASE} from "../config";
import SignInCard from "../components/SignInCard";
import NavBar from "../components/NavBar";

function SignUpPage() {
  const [githubUsername, setGithubUsername] = useState(""); // replace later with GitHub username
  const [canEdit, setCanEdit] = useState(false);


  //Check cookie for github auth
  useEffect(() => {
  const checkCookie = async () => {
    try {
      const res = await axios.get(`${API_URL_BASE}/userID`, { withCredentials: true });
      console.log("Response from /userID:", res); 
      const userID = res.data?.userId;
      if (userID) {
        localStorage.setItem("userID", userID);
        console.log("Got userID from cookie:", userID);
      } else {
        console.log("No userID found in response");
      }
      setCanEdit(userID);
    } catch (err) {
      console.log("Grab Error cookie:", err);
    }
   
  };


   const getUsername = async () => {
    try{

      const response = await axios.get(`${API_URL_BASE}/user/username`, {
    withCredentials: true
    });
      console.log(response);

      const username = response.data?.username;
      if(username){setGithubUsername(username);}
    }
    catch{
      console.log("Error with finding username");
    }
  };

  checkCookie();
  getUsername();
}, []);

  const handleSignup = async (data) => {
    try {
      // Send to backend
      const res = await axios.post("/auth/signup", data);
      console.log("Signup success:", res.data);
      // redirect or show success message
    } catch (err) {
      console.error("Signup error:", err);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div>
      <NavBar/>
      <SignInCard 
      githubUsername={githubUsername} 
      onSubmit={handleSignup} 
      setGithubUsername={setGithubUsername}
      canEdit={canEdit}
      />
    </div>
  );
}

export default SignUpPage;
