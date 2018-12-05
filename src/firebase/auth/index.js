import { auth } from "../firebase";

export const doSignInWithEmailAndPassword = ({ email, password }) =>
  auth.signInWithEmailAndPassword(email, password);

export const doSignUpWithEmailAndPassword = ({ email, password }) =>
  auth.createUserWithEmailAndPassword(email, password);

export const doSignOut = () => auth.signOut();
