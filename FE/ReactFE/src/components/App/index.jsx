import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import api from "../../api/contacts";
import "./App.css";
import Header from "../Header";
import AddContact from "../AddContact";
import ContactList from "../ContactList";
import ContactDetail from "../ContactDetail";
import EditContact from "../EditContact";

function App() {
  const [contacts, setContacts] = useState([]);

  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("http://localhost:8080/contacts/");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    contact.phone_numbers = contact.phone_numbers.split(",");
    for (let i = 0; i < contact.phone_numbers.length; i++) {
      contact.phone_numbers[i] = contact.phone_numbers[i].trim();
    }
    console.log(contact);


    const request = {
      ...contact
    };

    const response = await api.post("http://localhost:8080/contacts/", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    // Step 1 TODO...
    // TODO: manipulate the data from the phone_numbers
    // TODO: perform the axios.put operation
    // TODO: set the state
    // TODO: retrieve all contacts including the updated ones
  };

  const removeContactHandler = async (id) => {
    // Step 2 TODO...
    // TODO: Perform an axios.delete call to the api providing the id of the respective contact
    // TODO: Create a local newContactList that holds all records except the deleted one
    // TODO: Update state with the newContactList
  };

  const getAllContacts = async () => {
    const allContacts = await retrieveContacts();
    if (allContacts) setContacts(allContacts);
  };

  useEffect(() => {
    const getAllContacts = async () => {
        const allContacts = await retrieveContacts();
        if (allContacts) setContacts(allContacts);
      };
    getAllContacts();
  }, []);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          />

          <Route path="/contact/:id" component={ContactDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
