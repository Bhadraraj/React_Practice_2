import React, { useState } from 'react';

const InputEvents = () => {
    const [mouseDown, setMouseDown] = useState(false);
    const [mouseClicked, setMouseClicked] = useState(0);
    const [inputText, setInputText] = useState('Bhadri');
    const [formInputText, setFormInputText] = useState('');
    const [formInputTextSubmitted, setFormInputTextSubmitted] = useState();

    const handleOnClick = () => {
        setMouseClicked(mouseClicked + 1);
    };

    const handleOnMouseDown = () => {
        setMouseDown(true);
    };

    const handleOnMouseUp = () => {
        setMouseDown(false);
    };

    const handleOnChange = (e) => {
        setInputText(e.target.value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setFormInputTextSubmitted(formInputTextSubmitted);
    };
    const valueChange = (e) => {
        setFormInputText(e.target.value);
    }
    return (
        <>
            <section>
                <h3>Mouse events:</h3>
                <button
                    onClick={handleOnClick}
                    onMouseDown={handleOnMouseDown}
                    onMouseUp={handleOnMouseUp}
                >
                    Click me
                </button>
                <p>Button mouse down: {mouseDown ? 'true' : 'false'}</p>
                <p>Button clicked: {mouseClicked}</p>
            </section>

            <section>
                <h3>Input change events:</h3>
                <input
                    type="text"
                    value={inputText}
                    onChange={handleOnChange}
                />
                <p>Input value: {inputText}</p>
            </section>

            <section>
                <h3>Form Submit events:</h3>
                <form onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        value={formInputText} onChange={valueChange}
                    />
                    <button type="submit">Submit</button>
                    <p>Input value: {formInputText}</p>
                    <p>Submitted value: {formInputTextSubmitted}</p>
                </form>
            </section>
        </>
    );
};

export default InputEvents;
