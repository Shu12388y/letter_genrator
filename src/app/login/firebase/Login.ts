import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {setCookie} from "cookies-next";
import {app} from "@/firebase/firebase"
// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });


// login function
export async function Login(email:string,password:string){
   try {
     const auth = getAuth(app)
     const response = await signInWithEmailAndPassword(auth,email,password)
     const data = await response.user
     console.log(data)
   } catch (error:any) {
    console.log(error)
    
   }


    
} 