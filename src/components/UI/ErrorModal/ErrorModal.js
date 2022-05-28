import classes from './ErrorModal.module.css'
import Card from '../Card/Card'
import React from 'react'
import ReactDOM from 'react-dom';

const ErrorModal = (props) => {

    const Overlay = (props) => {
        return (
            <div className={classes.backdrop} onClick={props.onConfirm} ></div>
        )
    }

    const Modal = (props) => {
        return (
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <button className={classes.button} onClick={props.onConfirm}>Okay</button>
                </footer>
            </Card>
        )
    }
    return (
        <React.Fragment>
            {
                ReactDOM.createPortal(
                    <Overlay onConfirm={props.onConfirm}></Overlay>,
                    document.getElementById('overlay'))
            }
            {ReactDOM.createPortal(
                <Modal
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById('modal')
            )}
        </React.Fragment>
    )
}

export default ErrorModal