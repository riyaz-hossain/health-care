import React from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import initializeAuthentication from './firebase.init';


initializeAuthentication();










// export const initializeLoginFramework = () => {

//         initializeApp(firebaseConfig);

// };

export const googleSignIn = () => {
    initializeAuthentication()
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
        .then((res) => {
            const { displayName, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                displayName: displayName,
                email: email,
            };
            return signedInUser;
        })
        .catch((error) => {
            return error.message;
        });
};

export const signOutFromAccount = () => {
    const auth = getAuth();
    return signOut(auth)
        .then((res) => {
            const signedOutUser = {
                isSignedIn: false,
                name: "",
                email: "",
            };
            return signedOutUser;
        })
        .catch((error) => { });
};