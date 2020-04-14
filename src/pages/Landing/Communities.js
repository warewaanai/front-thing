import React, { Component } from 'react';
import './landing.scss'
import './communities.scss'

import background from '../../assets/Pictures/backgrounds/2.png'


class Communities extends Component {
    render () {
        return (
            <div id="Communities" className="fullscreen" style={{backgroundImage: `url(${background})`}}>
                <h1 className="Heading">Join Countless Communities on Feathercon</h1>
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

        let mobile = false;
        if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
            mobile = true;

        this.row[0] = [
            <TableCell text="Tennis"/>,
            <TableCell text="CS GO"/>,
            <TableCell text="Ping Pong"/>,
            (!mobile ? [ <TableCell text="French Learners"/>,  <TableCell text="Starcraft II"/>] : null)
        ]
        this.row[1] = [
            <TableCell text="Football"/>,
            <TableCell text="Oxford Students"/>,
            <TableCell text="AoE II"/>,
            (!mobile ? [ <TableCell text="York Students"/>,  <TableCell text="Learning to Code"/>] : null)
        ]
        this.row[2] = [
            <TableCell text="Karaoke"/>,
            <TableCell text="Chinese Learners"/>,
            <TableCell text="Amateur Cooks"/>,
            (!mobile ? [ <TableCell text="Berliners"/>,  <TableCell text="Coldplay Fans"/>] : null)
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
