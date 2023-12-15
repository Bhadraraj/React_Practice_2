import React, { Component } from 'react';
import '../style/stateStyle.css';

class Card1 extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="card-container">
          <header className="card-header">
            <span initials="JS"></span>
            <h2>{this.props.name}{this.props.children}</h2>
          </header>

          <main>
            <ul>
              <li><span>ReactJS</span>User Interface</li>
              <li><span>Redux</span>Container for JS Apps</li>
              <li><span>GraphQL</span>Query language API</li>
            </ul>
          </main>
        </section>
      </React.Fragment>
    )
  }
}

export default Card1;