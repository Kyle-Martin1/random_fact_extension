import React from 'react';

import styles from './RefreshButton.module.css';

const RefreshButton = (props) => {
    return(
        <div>
            <p className={styles.RefreshButton} onClick={props.clicked}>Want another?</p>
        </div>
    )
};

export default RefreshButton;
