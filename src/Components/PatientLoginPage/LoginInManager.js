import React from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import initializeAuthentication from './firebase.init';
initializeAuthentication();
const auth = getAuth();

export const googleSignIn = () => {
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

const updateUserName = (firstName, lastName) => {
    const user = auth.currentUser;

    user.updateProfile({
        displayName: firstName + " " + lastName,
    })
        .then((res) => {
            console.log(res);
        })
        .catch(function (error) {});
};

export const createUserEmailAndPassword = (
    firstName,
    lastName,
    email,
    password
) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            const newUserInfo = res.user;
            newUserInfo.error = "";
            updateUserName(firstName, lastName);
            newUserInfo.isSignedIn = true;
            console.log('res :>> ', res);
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            return newUserInfo;
        });
};



export const signInWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            const newUserInfo = res.user;
            newUserInfo.error = "";
            newUserInfo.isSignedIn = true;
            return newUserInfo;
        })
        .catch(function (error) {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            return newUserInfo;
        });
};






export const signOutFromAccount = () => {
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