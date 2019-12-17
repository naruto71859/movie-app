import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

export default class PopUp extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="col-4">
        <div
          className="card border-secondary mb-3 card-body text-secondary "
          style={{ maxWidth: "28rem", height: "30rem", cursor: "pointer" }}
           onClick={this.openModal}
        >
          <img src="http://tny.im/kdT" alt="200*200" width="100%" />
          <h5 className="card-title mt-3 text-center">Open Modal</h5>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input
              placeholder="Title"
              onChange={event => this.props.titleValue(event)}              ////// Title
              value={this.props.Modeltitle}
            />
            {/* we are using a function created in the parent  thanks to props */}
            <input          
              placeholder="year"
              onChange={event => this.props.yearValue(event)}                   ////// year
              value={this.props.Modelyear.replace(/\D/,"").split('').filter((el,i) => (i<4)? el :null).join('')}
            />
            <span className=''>  <p className="mt-2">Rating</p>
            
            <button className="btn-info"
            onClick={event => this.props.ratingValue(event)}
            value="1"
            >1</button>
            <button className="btn-info"
            onClick={event => this.props.ratingValue(event)}
            value="2"
            >2</button>
            <button className="btn-info"
            onClick={event => this.props.ratingValue(event)}
            value="3"
            >3</button>
            <button className="btn-info"
            onClick={event => this.props.ratingValue(event)}
            value="4"
            >4</button>
            <button className="btn-info"
            onClick={event => this.props.ratingValue(event)}
            value="5"
            >5</button>
            </span>
            <input
              type="submit"
              value="Confirm"
              onClick={(event) => this.props.addMovie(event)}             ////// ADD
            />     
            
          </form>
        </Modal>
      </div>
    );
  }
}
