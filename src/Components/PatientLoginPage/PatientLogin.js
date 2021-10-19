import React, { useContext, useState } from 'react';
import Layout from '../Layout/Layout';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import fbLogo from "../../images/facebook.png";
import googleLogo from "../../images/google.png";
import loginBg from '../../images/loginBg.png';
import './PatientLogin.css';
import initializeAuthentication from './firebase.init';
// import { GoogleAuthProvider , getAuth, signInWithPopup, } from "firebase/auth";
import {
    createUserEmailAndPassword,
    googleSignIn, signInWithEmailPass,
} from "./LoginInManager";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { createUserWithEmailAndPassword } from '@firebase/auth';

// initializeLoginFramework()

// initializeAuthentication();
// const googleProvider = new GoogleAuthProvider();
// const auth = getAuth();

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "100%",
        },
    },
    container: {
        maxWidth: "100%",
        backgroundColor: "white",
        margin: "0",
        marginTop: "20px",
        padding: "20px 30px 10px 20px",
        border: "1px solid lightgray",
        borderRadius: "5px",
    },

    submit: {
        backgroundColor: "#11CFE0",
        border: "none",
        padding: "9px 5px",
        color: "#fff"
    },
    small: {
        textAlign: "center",

    },
    dashContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "460px",
        margin: "10px auto",
    },
    dash: {
        height: "1px",
        border: ".1px solid lightgray",
        width: "30%",
        margin: "2px 3px",
    },
    logo: {
        height: "20px",
        justifySelf: "start",
        marginRight: "40px",
    },
    thirdPartyLoginBtn: {
        maxWidth: "460px",
        borderRadius: "25px",

        margin: "auto",
        border: "1px solid lightgray",
        height: '55px',
    },
}));



const PatientLogin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        displayName: "",
        password: "",
        email: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        error: "",
    });

    const handleGoogleSignIn = () => {
        // signInWithPopup(auth , googleProvider)
        // .then(res=>{
        //     const user = res.user
        // })
        googleSignIn().then((res) => {
            setUser(res);
            setLoggedInUser(res);
            history.replace(from);
        });

    }
    const [newUser, setNewUser] = useState(false);
    const classes = useStyles();

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            createUserEmailAndPassword(
                user.firstName,
                user.lastName,
                user.email,
                user.password
            ).then((res) => {
                setUser(res);
                setLoggedInUser(res);
                console.log('Created ');
            });
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailPass(user.email, user.password).then(
                (res) => {
                    setUser(res);
                    setLoggedInUser(res);
                    history.replace(from);
                }
            );
        }
        e.preventDefault();
        console.log('hello ');
        console.log('user :>> ', user);
    };


    const handleBlur = (e) => {
        let isFieldValid = true;
        // if (e.target.name === "email") {
        //     isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        // }
        // if (e.target.name === "password") {
        //     const isPasswordValid = e.target.value.length >= 6;
        //     const containNumber = /\d+/.test(e.target.value);
        //     isFieldValid = isPasswordValid && containNumber;
        // }
        // if (newUser && e.target.name === "confirmPassword") {
        //     isFieldValid = e.target.value === user.password;
        // }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    };



    return (
        <Layout>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 col-12">
                            <div className="login-area">
                                <div className={classes.container}>
                                    <form
                                        className={classes.root}
                                        noValidate
                                        autoComplete="off"
                                        onSubmit={(e) => handleSubmit(e)}
                                    >
                                        {newUser ? (
                                            <h5>Create an account</h5>
                                        ) : (
                                            <h5> Sign in</h5>
                                        )}

                                        {newUser && (
                                            <TextField
                                                label="First Name"
                                                required
                                                name="firstName"
                                                onBlur={handleBlur}
                                            />
                                        )}
                                        <br />
                                        {newUser && (
                                            <TextField
                                                label="Last Name"
                                                required
                                                onBlur={handleBlur}
                                                name="lastName"
                                            />
                                        )}
                                        <br />
                                        <TextField
                                            label="Username or Email"
                                            required
                                            onBlur={handleBlur}
                                            name="email"
                                            type="email"
                                        />

                                        <br />
                                        <TextField
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            onBlur={handleBlur}
                                            name="password"
                                        />
                                        <br />
                                        {newUser && (
                                            <TextField
                                                label="Confirm Password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                onBlur={handleBlur}
                                                name="confirmPassword"
                                            />
                                        )}
                                        <br />
                                        <input
                                            className={classes.submit}
                                            type="submit"
                                            value={newUser ? "Create an account" : "Login"}
                                        />
                                        <small style={{ color: "red" }}>{user.error}</small>
                                        <div className={classes.small}>
                                            <small>
                                                Already have an account?{" "}
                                                <span
                                                    className="toggle-field"
                                                    onClick={() => setNewUser(!newUser)}
                                                >
                                                    {newUser ? "Login" : "Create an account"}
                                                </span>
                                            </small>
                                        </div>
                                    </form>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className={`${classes.dash} mt-3`}>

                                    </div>
                                    <div className="mt-1">
                                        or
                                    </div>
                                    <div className={`${classes.dash} mt-3`}>

                                    </div>
                                </div>
                                <div className="my-3">
                                    <button
                                        className={`${classes.thirdPartyLoginBtn} col-md-12 col-sm-12 col-12 btn btn-light`}
                                        onClick={handleGoogleSignIn}
                                    >
                                        <img src={googleLogo} alt="" className={classes.logo} />
                                        Continue with Google
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-1">
                            <div className="login-bg d-md-flex d-sm-none d-none">
                                <img src={loginBg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PatientLogin;