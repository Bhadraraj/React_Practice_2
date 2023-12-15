import React, { Component } from 'react';
import './style/stateStyle.css';

class State extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: "Gopal Ram",
            age: "35",
            professional: [
                { title: 'teacher' },

            ],
            info: [
                {
                    title: "React js ", text: "User Interface ",

                },
                {
                    title: "Redux", text: "State Container",
                },
                {
                    title: " GraphQl", text: "Query Language for API"

                }
            ]
        }
    }
    render() {
        return (

            <>

                <section className='card-container'>
                    <h3>Students List </h3>
                    <header className='card-header'>
                        {/* <span age={this.state.age}></span> */}
                        <p>Student Name : {this.state.userName}</p>

                        <p>Age : {this.state.age}</p>
                        <p> Professional : {this.state.professional[0].title} </p>

                        {/* Languages: <p>{this.state.knownLanguages[0].title} - {this.state.knownLanguages[0].text} </p>
                        <p>{this.state.knownLanguages[1].title} - {this.state.knownLanguages[1].text} </p>
                        <p>{this.state.knownLanguages[2].title} - {this.state.knownLanguages[2].text} </p> */}

                    </header>


                </section>
            </>


        )
    }
}
export default State;
