{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}

import React from 'react';
import Mark1 from './Mark1';
import Mark2 from './Mark2';

let App = () => {
    return (
        <div className='app'>
            <Mark1/>
        </div>
    )
}

export default App
