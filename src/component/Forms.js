import React, { Component } from "react";
import "./Forms.css";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "First Name",
      lastName: "Last Name",
      savedFirstName: "First Name",
      savedLastName: "Last Name",
      entry: true
    };

    this.onEdit = this.onEdit.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onEdit() {
    this.setState({
      savedFirstName: this.state.firstName,
      savedLastName: this.state.lastName,
      entry: false
    });
  }

  onChangeFirstName(event) {
    this.setState({
      firstName: event.target.value
    });
  }
  onChangeLastName(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  onSave() {
    this.setState({
      entry: true
    });
  }

  onCancel() {
    this.setState({
      firstName: this.state.savedFirstName,
      lastName: this.state.savedLastName,
      entry: true
    });
  }

  render() {
    if (this.state.entry) {
      return (
        <div className="Forms">
          <p>Because we can...</p>
          <p>add and/or edit your first and last name! </p>
          <div class="flex-container">
            <div>
              <p className="first">{this.state.firstName}</p>
            </div>
            <div>
              <p className="last">{this.state.lastName}</p>
            </div>
          </div>
          <br />
          <button className="button" onClick={this.onEdit}>
            Edit
          </button>
        </div>
      );
    } else {
      return (
        <div className="Forms">
          <p>Because we can...</p>
          <p>add and/or edit your first and last name! </p>
          <div className="flex-container">
            <div>
              <input
                className="first"
                type="text"
                value={this.state.firstName}
                onChange={this.onChangeFirstName}
              />
            </div>
            <div>
              <input
                className="last"
                type="text"
                value={this.state.lastName}
                onChange={this.onChangeLastName}
              />
            </div>
          </div>
          <br />
          <div>
            <button className="button" onClick={this.onSave}>
              Save
            </button>
            <span> </span>
            <button className="button" onClick={this.onCancel}>
              Cancel
            </button>
          </div>
        </div>
      );
    }
  }
}

export default Forms;
