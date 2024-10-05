
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] =useState(null);
    const auth=getAuth(app); 
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider;


    const loginWithGoogle=()=>{
        // console.log("login with google")
        signInWithPopup(auth, googleProvider)
        .then(result => {

            const loggedInUser = result.user;
            console.log(user);
            setUser(loggedInUser);
            
        })
        .catch(error => {
            console.log("error", error.message);  
        })
    }


    const logOutGoogle=()=>{
        signOut(auth)
        .then((result) => {
            // Sign-out successful.
            console.log(result);
            setUser(null);
        })
        .catch(error => {
            console.log("error", error.message);  
        })  
    }


    const loginWithGithub=()=>{
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(user);
            setUser(loggedInUser);
            
        })
        .catch(error => {
            console.log("error", error.message);  
        })
    }

    
    return (
        <div>
            <h3>
            {user ? <button onClick={logOutGoogle}>Log Out</button> : <>
                <button onClick={loginWithGoogle}>Google Login</button> <button onClick={loginWithGithub}>Github Login</button></>}
            </h3>

            <h3>
                {
                    user&&`Welcome ${user.displayName}`
                }
            </h3>


            
        </div>
    );
};;

export default Login;