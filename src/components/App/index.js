import React, { Component } from 'react';
import styles from './styles.module.css';

class App extends Component {
    render() {
        return (
            <div className={styles.component}>
                <h1 className={styles.title}>
                    <a className={styles.link} href="mailto:this@navgarcha.dev">
                        Nav Garcha
                    </a>
                </h1>

                <h3 className={styles.subtitle}>Javascript Developer</h3>
            </div>
        );
    }
}

export default App;
