import {app} from "@/firebase/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

export async function signIn(email:any,password:any) {
    try {
        const response = await createUserWithEmailAndPassword(auth,email,password)
        const data = await response.user
        console.log(data)

    } catch (error:any) {
        const errorCode = error.code;
        const errorMessage = error.message;
            console.log(errorCode,errorMessage)
        
    }
    
}