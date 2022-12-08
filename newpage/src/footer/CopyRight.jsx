import React, { Component } from 'react';
import styles from './Footer.module.css';


class CopyRight extends Component {
    render() {
        return (
            <p className={styles['footerText']}>
                <span> © 2010 — 2020 </span><span>Privacy — Terms</span>
            </p>
        );
    }
}

export default CopyRight;