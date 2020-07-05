import React from 'react';

const FactContent = () => {

    state = {
        currentFact: null
    }

    componentDidMount() {
        fetch('')
        .then(result => {
          return result.json();
        })
        .then(jsonReturn => {
            this.setState({
                currentFact: jsonReturn.message
            });
        })
        .catch(error => {
          console.log(error);
        });
    }

    return(
        <div>
            <p>{this.state.currentFact}
        </div>
    )
};

export default FactContent;
