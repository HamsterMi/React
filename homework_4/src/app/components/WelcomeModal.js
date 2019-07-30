import React from "react";

export default class WelcomeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  render() {
    let modalWindow;
    if (this.state.modal) {
      modalWindow = (
        <div className="modal-wrap">
          <div className="modal-item block-item">
            <span className="title">{this.props.items.title}</span>
            <hr />
            <div>{this.props.items.modalBody}</div>
            <hr />
            <button
              className="modal-button"
              onClick={() => {
                this.setState({ modal: !this.state.modal });
              }}
            >
              {this.props.items.buttonTitle}
            </button>
          </div>
        </div>
      );
    }
    return <div>{modalWindow};</div>;
  }
  componentDidMount() {
    this.setState({ modal: !this.state.modal });
  }
}
