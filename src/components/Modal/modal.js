import React, { Component } from 'react';
import './modal.scss';

class Modal extends Component {
  render() {

    return (
      <div className='modal' onClick={this.props.onClick}>
        <p className='modal__message'>{this.props.message}</p>
        <span className='modal__close'>Close</span>
      </div>
    );
  }
}

export default Modal;