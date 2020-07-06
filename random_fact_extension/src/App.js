import React, { Component } from 'react';

import styles from './App.module.css';
import FactContent from './Components/FactContent/FactContent.js';

class App extends Component {
    render(){
        return(
            <div className={styles.mainContainer}>
                <FactContent />
            </div>
        )
    }
}

export default App;
