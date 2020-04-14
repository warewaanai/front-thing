import React, { Component } from 'react';
import './background.scss';

class Background extends Component {
    C = 5;
    R = 4;

    constructor(props) {
        super(props);

        this.dy = 0;
        this.lastY = 0;

        this.canvas = React.createRef();
        this.divv = React.createRef();
        this.frameCount = 0;

        this.starList = [];
        for (let i = 0; i < this.C; ++i)
        for (let j = 0; j < this.R; ++j)
            this.starList.push({
                impx: 0,
                impy: 0,
                x: i + Math.random(),
                y: j + Math.random(),
                sinoff:  Math.random() * 2 * Math.PI,
                seed: (.5 - Math.random()) * 2
            });
    }

    clearFrame = () => {
        this.ctx.fillStyle = 'rgb(5, 5, 20)';
        this.ctx.fillRect(0, 0, 10000, 10000);
    }

    drawCircle = ({x, y, sinoff, seed}) => {
        let canvas = this.canvas.current;
        let ctx = this.ctx;
        let frame = this.frameCount;

        let dx = Math.sin(frame / 600 * Math.PI * 3 + sinoff * 100) / 2;
        let dy = Math.cos(frame / 600 * Math.PI * 4 + sinoff * 100) / 2;

        let realX = (x + dx) * canvas.width / this.C;
        let realY = (y + dy) * canvas.height / this.R;

        let col= `rgba(255, ${Math.sin(frame / 30 + sinoff) * Math.sin(frame / 30 + sinoff) * 255 * 0.4 + 255 * 0.6}, ${Math.cos(frame / 30 + sinoff) * Math.cos(frame / 30 + sinoff) * 255 / 3}, 1)`;

        ctx.beginPath();

        ctx.shadowColor = col;
        ctx.fillStyle = col;
        ctx.arc(realX, realY + this.dy, Math.sin(frame / 60 + sinoff) + 4, 0, 2 * Math.PI);
        ctx.fill();
    }

    frame = () => {

        this.dy = this.lastY - this.props.y;
        if (this.lastY > this.props.y + 100) { // scroll up
            if (this.dy > window.innerHeight)
                this.lastY = this.props.y + window.innerHeight;
            if (this.dy <= 500)
                this.lastY-= Math.min(this.lastY - this.props.y, this.dy * this.dy / 250000 * 10);
            else
                this.lastY-= Math.min(this.lastY - this.props.y, 10);       
        }
        else if (this.lastY + 100 < this.props.y) { // scroll down
            if (-this.dy > window.innerHeight)
                this.lastY = this.props.y - window.innerHeight;
            if (-this.dy <= 500)
                this.lastY+= Math.min(this.props.y - this.lastY, this.dy * this.dy / 250000 * 10);
            else
                this.lastY+= Math.min(this.props.y - this.lastY, 10);
        }
        
        this.clearFrame();
            


        this.frameCount+= 1;
        for (let i = 0; i < this.C * this.R; ++i)
            this.drawCircle(this.starList[i]);

        window.requestAnimationFrame(this.frame);
    }

    componentDidMount() {
        this.canvas.current.width = this.divv.current.clientWidth;
        this.canvas.current.height = this.divv.current.clientHeight;

        this.ctx = this.canvas.current.getContext('2d');

        window.requestAnimationFrame(this.frame);
    }

    render() {
        return (
            <div id="landingBackground" ref={this.divv}>
                <canvas id="dinamo" ref={this.canvas}>
                    Haha, good one :^/
                </canvas>
            </div>
        );
    }
}

export default Background;
