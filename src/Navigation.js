import React from "react";
import {
    Link
} from "react-router-dom";
import "./navigation.css"

export default class Navigation extends React.Component{
    render() {
        return(
            <div>
                <div className="area"></div>
                <nav className="main-menu">
                    <ul>
                        <li>
                            <a href="/">
                                <i className="fa fa-home fa-2x"></i>
                            </a>
                        </li>
                        <li className="has-subnav">
                            <a href="/about">
                                <i className="fa fa-user fa-2x"></i>
                            </a>
                        </li>
                        <li className="has-subnav">
                            <a href="/skill">
                                <i className="fa fa-laptop fa-2x"></i>
                            </a>
                        </li>
                        <li className="has-subnav">
                            <a href="/projects">
                                <i className="fa fa-folder-open fa-2x"></i>
                            </a>
                        </li>
                        <li className="has-subnav">
                            <a href="/contact">
                                <i className="fa fa-folder-open fa-2x"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}