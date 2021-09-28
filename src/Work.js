import React from "react";
import classNames from "classnames";
import "./work.css"

export default class Work extends React.Component {
    state = {
        modalClass: ""
    }
    onCardClicked = (className) => {
        this.setState({modalClass : className})
    }
    render() {
        const modalClass = classNames(this.state.modalClass)
        return (
           <div className="portfolio">
               <div id="modal-container" className={modalClass}>
                   <div className="modal-background">
                       <div className="modal">
                           <h2>I'm a Modal</h2>
                           <p>Hear me roar.</p>
                           <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                                preserveAspectRatio="none">
                               <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"/>
                           </svg>
                       </div>
                   </div>
               </div>
               <div className="content">
                   <h1>Modal Animations</h1>
                   <div className="buttons">
                       <div id="one" className="button" onClick={(e) =>this.onCardClicked("one")}>Unfolding</div>
                       <div id="two" className="button" onClick={this.onCardClicked}>Revealing</div>
                       <div id="three" className="button" onClick={this.onCardClicked}>Uncovering</div>
                       <div id="four" className="button" onClick={this.onCardClicked}>Blow Up</div>
                   </div>
               </div>
           </div>
        )
    }
}