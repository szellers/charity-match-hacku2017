import React, { Component } from 'react';
import $ from 'jquery';

const isOpening = (currState, nextState) => !currState.isVisible && nextState.isVisible;
const isClosing = (currState, nextState) => currState.isVisible && !nextState.isVisible;

export default class ModalView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
    }

    componentWillUpdate = (nextProps, nextState) => {
        if (isOpening(this.state, nextState) && this.props.beforeOpen) {
            this.props.beforeOpen();
        }

        if (isClosing(this.state, nextState) && this.props.beforeClose) {
            this.props.beforeClose();
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (isOpening(prevState, this.state) && this.props.afterOpen) {
            this.props.afterOpen();
        }

        if (isClosing(prevState, this.state) && this.props.afterClose) {
            this.props.afterClose();
        }
    }

    show = () => {
        $('body').addClass('modal-open');
        this.setState({ isVisible: true });
    }

    hide = () => {
        $('body').removeClass('modal-open');
        this.setState({ isVisible: false });
    }   

    isOpen = () => {
        return this.state.isVisible;
    }

    _onBackgroundClicked = () => {
        this.hide();

        if (this.props.onBackgroundClicked) {
            this.props.onBackgroundClicked();
        }
    }

    render = () => {
        return (
            <StatelessModalView
                {...this.props}
                isVisible={this.state.isVisible}
                onBackgroundClicked={this._onBackgroundClicked}
                onCloseClicked={this.hide}
                showBackground="true"
            />
        );
    }
}

class StatelessModalView extends React.Component {
    constructor() {
        super();
    }

    onBackgroundClicked = () => {
        if (this.props.onBackgroundClicked) {
            this.props.onBackgroundClicked();
        }
    }

    onCloseClicked = () => {
        if (this.props.onCloseClicked) {
            this.props.onCloseClicked();
        }
    }

    render = () => {
        const mergeStyle = (key) => Object.assign({}, styles[key], this.props[key]);
        const { isVisible } = this.props;
        const dialogStyles = mergeStyle('dialogStyles');
        const backgroundStyles = mergeStyle('backgroundStyles');
        const closeButtonStyle = mergeStyle('closeButtonStyle');
        const titleStyle = mergeStyle('titleStyle');
        backgroundStyles.display = dialogStyles.display = 'block';

        let background;
        if (this.props.showBackground) {
            background = (
                <div className="modal-background"
                     onClick={this.onBackgroundClicked}
                     style={backgroundStyles}
                />
            );
        }

        return isVisible ? (
            <section className="modal-wrapper" style={{ position: 'fixed', top: '0px', left: '0px', width: '100%', height: '100%', zIndex: '999' }}>
                {background}
                <div className="modal-dialog" style={dialogStyles}>
                {/*<a role="button" 
                       className="modal-close-button"
                       onClick={this.onCloseClicked}
                       style={closeButtonStyle}>
                       &times;
                    </a>
                    <h2 style={titleStyle}>{this.props.title}</h2>*/}
                    {this.props.children}
                </div>
            </section>
        ) : null;
    }
}

const styles = {
    backgroundStyles: {
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        zIndex: '999',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },

    dialogStyles: {
        width: '50%',
        height: '470px',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: '5px',
        zIndex: '1000',
        boxShadow: '0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28)'
    },

    title: {
        marginTop: '0'
    },

    closeButtonStyle: {
        cursor: 'pointer',
        position: 'absolute',
        fontSize: '1.8em',
        right: '10px',
        top: '0',
        zIndex: '99'
    }
};
