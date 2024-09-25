
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {

    const auth=getAuth(app); 
    const provider = new GoogleAuthProvider();

    const loginWithGoogle=()=>{
        // console.log("login with google")
        signInWithPopup(auth, provider)
        .then(result => {

            const user = result.user;
            console.log(user);
            
        })
        .catch(error => {
            console.log("error", error.message);
            
        })
    }
    return (
        <div>
            <button onClick={loginWithGoogle} type="button">Sign in With Login</button>
        </div>
    );
};

export default Login;