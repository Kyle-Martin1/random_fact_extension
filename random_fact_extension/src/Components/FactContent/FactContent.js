import React, { Component } from 'react';

import styles from './FactContent.module.css';
import RefreshButton from '../RefreshButton/ResfreshButton.js';

class FactContent extends Component {

    state = {
        currentFact: null
    }

    componentDidMount() {
        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(result => {
          return result.json();
        })
        .then(jsonReturn => {
            this.setState({
                currentFact: jsonReturn.text
            });
        })
        .catch(error => {
          console.log(error);
        });
    }

    RefreshButtonHandler = () => {
        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(result => {
          return result.json();
        })
        .then(jsonReturn => {
            this.setState({
                currentFact: jsonReturn.text
            });
        })
        .catch(error => {
          console.log(error);
        });
    }

    render(){
        return(
            <div className={styles.factContainer}>
                <div className={styles.factContainerHeader}>
                    <p>Did you know?</p>
                </div>
                <p className={styles.fact}>{this.state.currentFact}</p>
                <RefreshButton clicked={this.RefreshButtonHandler}/>
            </div>
        )
    }
};

export default FactContent;
