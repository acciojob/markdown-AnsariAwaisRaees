import React from "react";
import { useState } from "react";

let Mark1 = () => {
    let [text, setText] = useState('');
    function changeText(event) {
        setText(event.target.value);
    }

    return (
        <div className='mark1'>
            <div className='preview'>
                <h1>Heading</h1>
                <br/><br/>
                <span>This is some <strong>bold</strong> text.</span>
                <textarea onChange={changeText}></textarea>
            </div>
        </div>
    )
}

export default Mark1