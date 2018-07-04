import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Member extends Component {
    constructor(props){
        super(props)
        
        let current = {}
        
        current = props.members.find((member) => member.name.toLowerCase() === props.match.params.member)
        this.state = {
            current: current,
            members: props.members.filter(member => member.name.toLowerCase() !== props.match.params.member)
        }
        this.setState(this.state)
    }
    render() {
        return (
            <div id="Start" align="justify">
                <div style={{paddingRight: 15}} className="teampics">
                    <div className="innershadow">
                        <img className="main" src={this.state.current.image} alt={this.state.current.name} border="0"/>
                    </div>
                    
                    {this.state.members.map((member, i) => (
                        <div style={{float: 'right'}} key={i}>
                            <div className="innershadow">
                                <Link to={`${this.props.match.path.replace(':member',member.name.toLowerCase())}`}><img className="grey" src={member.image} alt={member.name} border="0"/></Link>
                            </div>   
                        </div>
                    ))}
                </div>
                <h3>{this.state.current && this.state.current.name}</h3>
                <p align="justify">
                    {this.state.current && this.state.current.text}
                </p>
            </div>
        )
    }
}

export default Member