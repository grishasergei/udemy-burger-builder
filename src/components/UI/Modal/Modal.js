import React from 'react';
import classes from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';


const modal = (props) => (
    <Auxiliary>
        <Backdrop show={true} clicked={props.modalClosed}/>
        <div className={classes.Modal}>
            {props.children}
        </div>
    </Auxiliary>
);

export default modal;