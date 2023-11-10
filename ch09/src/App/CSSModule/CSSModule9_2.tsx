import React from "react";
import styles from '../../CSSModules/CSSModule9_2.module.css';

const CSSModule9_2 = () => {
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            Hello, I'm <span className={"something"}>CSS MODULE!!!</span>
        </div>
    )
}
export default CSSModule9_2;