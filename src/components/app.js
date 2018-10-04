import React, { Component } from 'react';

import Counter from './Counter';
import Test from './Test';


class App extends Component {
    render(){
        return(
            <div>
                <Counter />
                <Test />
            </div>
        )
    }
}

export default App;