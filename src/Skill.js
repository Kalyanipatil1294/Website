import React from "react";
import "./skill.css"

export default class Skill extends React.Component{
    render(){
        return(<>
            <section className="main">
                <div className="skill-section">
                    Skills
                </div>
                <div id="sb-container" className="sb-container">
                    <div>
                        <span className="sb-icon icon-cog"></span>
                        <h4><span>Redux / Flux</span></h4>
                    </div>
                    <div>
                        <span className="sb-icon icon-flight"></span>
                        <h4><span>Babel, Webpack</span></h4>
                    </div>
                    <div>
                        <span className="sb-icon icon-eye"></span>
                        <h4><span>REST</span></h4>
                    </div>
                    <div>
                        <span className="sb-icon icon-install"></span>
                        <h4><span>GraphQL</span></h4>
                    </div>
                    <div>
                        <span className="sb-icon icon-bag"></span>
                        <h4><span>Angular js</span></h4>
                    </div>
                    <div>
                        <span className="sb-icon icon-globe"></span>
                        <h4><span>CSS/SCSS</span></h4>
                    </div>
                    <div>
                        <span className="sb-icon icon-picture"></span>
                        <h4><span>HTML</span></h4>
                    </div>
                    <div>
                        <span className="sb-icon icon-video"></span>
                        <h4><span>Node Js</span></h4>
                    </div>
                    <div>
                        <span className="sb-icon icon-download"></span>
                        <h4><span>Java</span></h4>
                    </div>
                    <div>
                        <span className="sb-icon icon-mobile"></span>
                        <h4><span>React Js</span></h4>
                    </div>
                    <div>
                        <span className="sb-icon icon-camera"></span>
                        <h4><span>Javascript</span></h4>
                    </div>
                    <div>
                        <h4><span>Profile</span></h4>
                        <h5><span>Software Engineer</span></h5>
                    </div>
                </div>
            </section>
        </>)
    }
}