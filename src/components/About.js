import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctional from "./Profile";
import Profile from "./ProfileClass";

const About = () => {
    return (
        <>
            <h1>This is About Page</h1> 
            <ProfileFunctional name={"Vaidik"}/>
            <Profile name={"VaidikClass"} /> 
        </>
    );
}

export default About;