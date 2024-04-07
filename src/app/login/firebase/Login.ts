import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {setCookie} from "cookies-next";
import {app} from "@/firebase/firebase"



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