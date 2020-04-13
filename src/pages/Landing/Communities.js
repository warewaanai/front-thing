import React, { Component } from 'react';
import './landing.scss'
import './communities.scss'

import background from '../../assets/Pictures/backgrounds/2.jpg'


class Communities extends Component {
    render () {
        return (
            <div id="Communities" className="fullscreen" style={{backgroundImage: `url(${background})`}}>
                <CommunityTable />
            </div>
        );
    }
}


const TableCell = (props) => <div className="EventCell"  style={{flexGrow: props.text.length}}><div className="TableCell"> {props.text} </div></div>
class CommunityTable extends Component {
    constructor(props) {
        super(props);

        this.row = [[], [], []];
        this.row[0] = [
            <TableCell text="Tennis"/>,
            <TableCell text="CS Go"/>,
            <TableCell text="Ping Pong"/>,
            <TableCell text="French Learners"/>,
            <TableCell text="Starcraft II"/>,
        ]
        this.row[1] = [
            <TableCell text="Football"/>,
            <TableCell text="Oxford Students"/>,
            <TableCell text="AoE II"/>,
            <TableCell text="Berliners"/>,
            <TableCell text="Liverpool Fans"/>,
        ]
        this.row[2] = [
            <TableCell text="Karaoke"/>,
            <TableCell text="Chinese Learners"/>,
            <TableCell text="Amateur Cooks"/>,
            <TableCell text="York Studens"/>,
            <TableCell text="Learning to Code"/>,
        ]
    }

    render() {
        return (
            <div id="CommunityTable">
                <div className="Row" id="A">
                    <div className="TableCellGroup"> {this.row[0]} </div>
                    <div className="TableCellGroup"> {this.row[0]} </div>
                </div>
                <div className="Row" id="B">                
                    <div className="TableCellGroup"> {this.row[1]} </div>
                    <div className="TableCellGroup"> {this.row[1]} </div>
                </div>
                <div className="Row" id="C">
                    <div className="TableCellGroup"> {this.row[2]} </div>
                    <div className="TableCellGroup"> {this.row[2]} </div>
                </div>
            </div>
        )
    }
}

export default Communities;
