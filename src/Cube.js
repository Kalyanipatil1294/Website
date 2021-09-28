import React from "react";
import "./cube.css"

export default class Cube extends React.Component {
     hasClassName = (inElement, inClassName) => {
        const regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)');
        return regExp.test(inElement.className);
    };

     addClassName = (inElement, inClassName) => {
        if (!this.hasClassName(inElement, inClassName))
            inElement.className = [inElement.className, inClassName].join(' ');
    }

     removeClassName = (inElement, inClassName) => {
        if (this.hasClassName(inElement, inClassName)) {
            const regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)', 'g');
            const curClasses = inElement.className;
            inElement.className = curClasses.replace(regExp, ' ');
        }
    }

     toggleClassName = (inElement, inClassName) =>  {
        if (this.hasClassName(inElement, inClassName))
            this.removeClassName(inElement, inClassName);
        else
            this.addClassName(inElement, inClassName);
    }

     toggleShape = () => {
        let shape = document.getElementById('shape');
        if (this.hasClassName(shape, 'ring')) {
            this.removeClassName(shape, 'ring');
            this.addClassName(shape, 'cube');
        } else {
            this.removeClassName(shape, 'cube');
            this.addClassName(shape, 'ring');
        }

        // Move the ring back in Z so it's not so in-your-face.
        let stage = document.getElementById('stage');
        if (this.hasClassName(shape, 'ring'))
            stage.style.webkitTransform = 'translateZ(-200px)';
        else
            stage.style.webkitTransform = '';
    }

     toggleBackfaces = () => {
        const backfacesVisible = document.getElementById('backfaces').checked;
        const shape = document.getElementById('shape');
        if (backfacesVisible)
            this.addClassName(shape, 'backfaces');
        else
            this.removeClassName(shape, 'backfaces');
    }

    render() {
        return(
            <>
                <div className="controls">
                    <div>
                        <button onClick={this.toggleShape}>Toggle Shape</button>
                    </div>
                    <div><input type="checkbox" id="backfaces" onClick={this.toggleBackfaces} checked />
                        <label
                            htmlFor="backfaces">Backfaces visible> </label>
                        </div>
                </div>

                <div id="container">
                    <div id="stage">
                        <div id="shape" className="ring backfaces">
                            <div className="plane one">Javascript</div>
                            <div className="plane two">React Js</div>
                            <div className="plane three">Java</div>
                            <div className="plane four">Node Js</div>
                            <div className="plane five">HTML</div>
                            <div className="plane six">CSS</div>
                            <div className="plane seven">Scss</div>
                            <div className="plane eight">8</div>
                            <div className="plane nine">9</div>
                            <div className="plane ten">10</div>
                            <div className="plane eleven">11</div>
                            <div className="plane twelve">12</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}