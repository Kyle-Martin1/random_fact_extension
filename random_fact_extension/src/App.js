import React, { Component } from 'react';

import styles from './App.module.css';
import FactContent from './Components/FactContent/FactContent.js';

class App extends Component {

    state = {
        backgroundColor: ['FD151B', '339989', 'B2FFD6', '6ABEA7', 'C1666B', 'F17F29', 'CA1551'],
        randomNumber: null
    }

    componentDidMount(){
        let randomNumber = Math.floor(Math.random() * 7);
        this.setState({
            randomNumber: randomNumber
        })
    }

    render(){
        return(
            <div className={styles.mainContainer} style={{backgroundColor: '#' + this.state.backgroundColor[this.state.randomNumber]}}>
                <FactContent />
            </div>
        )
    }
}

export default App;
