import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from 'antd';
import './modal.scss';


class Modal extends Component {
  el = document.createElement('div');

  static defaultProps = {
    title: ''
  }

  componentDidMount() {
    document.body.append(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    const {
      disablePrev,
      disableNext,
      prev,
      next
    } = this.props;

    return ReactDOM.createPortal(
      <div className="modal-overlay">
        <div className="modal">
          <header className="modal__header">
            <span>{this.props.title}</span>
            <div className="modal__header-action">
              <Button disabled={disablePrev} onClick={prev}>
                <Icon type="left" />
                Назад
              </Button>
              <Button disabled={disableNext} onClick={next}>
                Вперед
                <Icon type="right" />
              </Button>
              <button className="modal__close" onClick={this.props.modalClose}>&#10006;</button>
            </div>
          </header>
          <div className="modal__content">
            {this.props.children}
          </div>
        </div>
      </div>,
      this.el
    );
  }
}


export default Modal;
