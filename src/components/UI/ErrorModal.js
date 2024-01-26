import React from 'react';
import { ReactDOM } from 'react';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}/>
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('root'))}
      {ReactDOM.createPortal(<ModalOverlay tittle = {props.tittle} message = {props.message} onConfirm= {props.onConfirm}/>)}

    </React.Fragment>
  );
};

export default ErrorModal;
