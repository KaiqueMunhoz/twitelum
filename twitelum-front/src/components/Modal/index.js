import React, {Component} from 'react';
import './modal.css';
import PropTypes from 'prop-types';

class Modal extends Component {

    static propTypes = {
        isOpen : PropTypes.bool,
        closeModal : PropTypes.func.isRequired
    }

    render(){
        return (
            <div className={`modal ${this.props.isOpen && 'modal--active'}`} onClick={this.props.closeModal}>
            {
                this.props.isOpen &&
                <div className={'modal__wrap'}>
                    {this.props.children}
                </div>
            }

            </div>
        );
    }
}

export default Modal;