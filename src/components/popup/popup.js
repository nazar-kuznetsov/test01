import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Modal extends Component {
    el = document.createElement('div');

    componentDidMount() {
      document.body.append(this.el);
    }

    componentWillUnmount() {
      document.body.removeChild(this.el);
    }

    render() {

      return ReactDOM.createPortal(
        <div className="modal-overlay">
          <div className="modal">
            <header className="modal__header">
              <span>{this.props.title}</span>
              <div>
                {this.props.header}
                <button className="modal__close" onClick={this.props.close}>&#10006;</button>
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
