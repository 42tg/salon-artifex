import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Member extends Component {
    constructor(props){
        super(props)

    }
    componentWillMount(){
        this.componentWillReceiveProps(this.props)
    }
    componentWillReceiveProps(newProps){
        let current = null
        current = newProps.members.find((member) => member.name.toLowerCase() === newProps.match.params.member)
        let state = {
            current: current,
            members: newProps.members.filter(member => member.name.toLowerCase() !== newProps.match.params.member)
        }
        this.setState(state)
    }
    render() {
        if(!this.state) return ''
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