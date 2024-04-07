import { GoogleAuthProvider } from "firebase/auth";
import { app } from "@/firebase/firebase";
import { getAuth, signInWithPopup } from "firebase/auth";
import { setCookie } from "cookies-next";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function googleSignIn() {
  try {
    const response = await signInWithPopup(auth, provider);
    const result = await GoogleAuthProvider.credentialFromResult(response);
    const token = await result?.accessToken;
    setCookie("googleSignintoken", token);
  } catch (error: any) {
    console.log(error);
    const crediental = GoogleAuthProvider.credentialFromError(error);
    console.log(crediental);
  }
}
