/** 
1.Visit Console.firebase.google.com
2.Create Project in Firebase(Skip google Analytics)
3.Register web app(Create Config)
4.install firebase: npm install firebase
5.create firebase.init.js file (see firebase.init.js)
6.DANGER: Do not share or Commit your config file.  firebase.init.js file.
7.Visit:Go to Documentation>Build>Authentication>web>Get started.
8.Export app from firebase.init.js file: export default app;
9.Login JSX: import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
10.Create const auth = getAuth(app);
11.Create const provider = new GoogleAuthProvider();
12.use signInWithPopup(auth, provider);
13.Active sign in method(google,facebook,github,etc.)
=> Build>Authentication>web>Sign in methods
=>Build>Authentication>setting>Authorized Domain

                ..........................
                    For Github Login
                ..........................

14.

**/
