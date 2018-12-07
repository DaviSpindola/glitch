import { auth } from "../firebase";
import { store } from "../../store";

export const doSignInWithEmailAndPassword = ({ email, password }) =>
  auth.signInWithEmailAndPassword(email, password);

export const doSignUpWithEmailAndPassword = ({ email, password }) =>
  auth.createUserWithEmailAndPassword(email, password);

export const doSignOut = () => {
  auth.signOut();
  store.dispatch({ type: "SET_AUTH_USER", authUser: null });
};
