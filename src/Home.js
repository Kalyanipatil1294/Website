import React from "react";
import {Helmet} from "react-helmet";
import "./home.css"

export default class Home extends React.Component{
    render() {
        return(
            <div className="homeContainer">
                <Helmet>
                    {/*<script src="./Sparkle.js" type="text/javascript" />*/}
                </Helmet>
                <h1>I'm Kalyani Patil</h1>
                <h4> Software Developer | Full Stack Developer | Web Developer </h4>
            </div>);
    }
}