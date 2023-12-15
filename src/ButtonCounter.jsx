import { Component } from 'react';
import react from './react';
import ButtonEvent from './ButtonEvent';

class ButtonCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };


    }
    handleClick() {
        this.setState({
            count: this.state.count + 1
        }, function () {
            console.log("Job Done...")
        })
    }
    render() {

        return (
            <>
                            <div className='click-count'>
                    Button Presses: {this.state.count}
                    <button onClick={this.handleClick.bind(this)}>Add One</button>
                </div>

                <ButtonEvent> 
                </ButtonEvent>

            </>
        )
    }
}
export default ButtonCounter;