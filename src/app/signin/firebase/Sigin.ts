import {app} from "@/firebase/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setCookie } from "cookies-next";

export async function signIn(email:any,password:any) {
    const auth = getAuth(app);
    try {
        const response = await createUserWithEmailAndPassword(auth,email,password)
        const data = await response.user
        setCookie("token", data.accessToken)

    } catch (error:any) {
        const errorCode = error.code;
        const errorMessage = error.message;
            console.log(errorCode,errorMessage)
        
    }
    
}