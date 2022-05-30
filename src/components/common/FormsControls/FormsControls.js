import * as React from "react";
import styles from "./FormsControls.module.css"

export const InputType = ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error;
    return (
        <div className={styles.formControl+' '+ (showError ? styles.error: '')}>
            {props.typeField === 'input'? <input {...input} {...props}/> :  <textarea {...input} {...props}/>}
            {showError && <span>{meta.error}</span>}
        </div>
    )
};
