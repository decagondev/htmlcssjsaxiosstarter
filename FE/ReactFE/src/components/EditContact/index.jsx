import React from 'react';
import './EditContact.css';

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email, address, avatar, phone_numbers  } = props.location.state.contact;
    this.state = {
      id,
      name,
      email,
      address,
      avatar,
      phone_numbers
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "" || this.state.address === "" || this.state.avatar === "" || this.state.phone_numbers === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "", address: "", avatar: "", phone_numbers: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={this.state.address}
              onChange={(e) => this.setState({ address: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Avatar</label>
            <input
              type="text"
              name="avatar"
              placeholder="URL to avatar image"
              value={this.state.avatar}
              onChange={(e) => this.setState({ avatar: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Phone Numbers</label>
            <input
              type="text"
              name="phone_numbers"
              placeholder="Comma Seperated List of Phone Numbers"
              value={this.state.phone_numbers}
              onChange={(e) => {
                this.setState({ phone_numbers: e.target.value })
              }}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
