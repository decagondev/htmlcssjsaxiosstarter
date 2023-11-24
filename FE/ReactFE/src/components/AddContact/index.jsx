import React, { Component } from 'react';
import './AddContact.css';

class AddContact extends Component {
    state = {
        name: "",
        email: "",
        address: "",
        avatar: "",
        phone_numbers: ""
    }

    add = (e) => {
        e.preventDefault();

        if (this.state.name === "" || this.state.email === "" || this.state.address === "" || this.state.avatar === "" || this.state.phone_numbers === "") {
            alert("All fields must be filled in!");
            return;
        }

        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "", address: "", avatar: "", phone_numbers: "" });
        this.props.history.push("/");
    }
    render() {
        return (
            <div className="ui main">
                <h2>Contact Form</h2>
                <form className="ui form" onSubmit={this.add}>
                <div className="field">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                    <label>Email</label>
                    <input 
                        type="text" 
                        name="Email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })} />
                </div>
                <div className="field">
                    <label>Address</label>
                    <input 
                        type="text" 
                        name="address"
                        placeholder="Address"
                        value={this.state.address}
                        onChange={(e) => this.setState({ address: e.target.value })} />
                </div>
                <div className="field">
                    <label>Avatar</label>
                    <input 
                        type="text" 
                        name="avatar"
                        placeholder="URL of Avatar Picture"
                        value={this.state.avatar}
                        onChange={(e) => this.setState({ avatar: e.target.value })} />
                </div>
                <div className="field">
                    <label>Phone Numbers</label>
                    <input 
                        type="text" 
                        name="phone"
                        placeholder="Comma Seperated List of Phone Numbers"
                        value={this.state.phone_numbers}
                        onChange={(e) => this.setState({ phone_numbers: e.target.value })} />
                </div>
                <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;
