import React, { Component } from 'react';

class Card2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: 'jbj',
      initials: 'JS',
      info: [
        { title: 'teacher' },
        { title: 'ReactJS', text: 'User Interface' },
        { title: 'ReactJS', text: 'User Interface' },
        { title: 'Redux', text: 'Container for JS Apps' },
        { title: 'GraphQL', text: 'Query language API' },
      ]
    }
  }

  switchFullstack = (newCourse) => {

    this.setState({
      firstName: 'Bhadri',
      info: [
        { title: newCourse, text: 'Runtime Env' },
        { title: 'Express', text: 'Web Framework' },
        { title: 'MongoDB', text: 'NoSQL Database' },
      ]
    })
  }

  render() {
    return (
      <React.Fragment>

        <section className="card-container">
          <header className="card-header">
            <span initials={this.state.initials}></span>
            <h2>{this.state.firstName}</h2>
          </header>

          <main>
            <button onClick={() => this.switchFullstack('NodeJS!!')}>Switch Course</button>
            <ul>
              <li>
                <span>{this.state.info[0].title}</span>
                {this.state.info[0].text}
              </li>
              <li>
                <span>{this.state.info[1].title}</span>
                {this.state.info[1].text}
              </li>
              <li>
                <span>{this.state.info[2].title}</span>
                {this.state.info[2].text}
              </li>
            </ul>
          </main>
        </section>
      </React.Fragment>
    )
  }
}

export default Card2;