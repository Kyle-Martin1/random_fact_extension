import React, { Component } from 'react';
import Draggable, { DraggableCore } from 'react-draggable';

import styles from './App.module.css';
import FactContent from './Components/FactContent/FactContent.js';

class App extends Component {

    state = {
        backgroundColor: ['FD151B', '339989', 'B2FFD6', '6ABEA7', 'C1666B', 'F17F29', 'CA1551'],
        randomNumber: null,
        deltaPosition: {
            x: 0, y: 0
        }
    }

    componentDidMount(){
        let randomNumber = Math.floor(Math.random() * 7);
        this.setState({
            randomNumber: randomNumber
        })
    }

    handleDrag = (e, ui) => {
        const {x, y} = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    };

    onStart = () => {
        this.setState({activeDrags: ++this.state.activeDrags});
    };

    onStop = () => {
      this.setState({activeDrags: --this.state.activeDrags});
    };

    render(){

        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        const {deltaPosition, controlledPosition} = this.state;

        return(
            <Draggable {...dragHandlers}>
                <div className={styles.mainContainer} style={{backgroundColor: '#' + this.state.backgroundColor[this.state.randomNumber]}}>
                    <FactContent />
                </div>
            </Draggable>
        )
    }
}

export default App;
