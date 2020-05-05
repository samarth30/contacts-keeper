import React, { useReducer } from "react";
import { v1 as uuid } from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CONTACTS,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
} from "../type";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "samarth",
        email: "samarth@gmail.com",
        phone: "9896178450",
        type: "personal",
      },
      {
        id: 2,
        name: "sanchit",
        email: "samarth@gmail.com",
        phone: "9896178450",
        type: "personal",
      },
      {
        id: 3,
        name: "arpit",
        email: "samarth@gmail.com",
        phone: "9896178450",
        type: "professional",
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // add contacts
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // delete contacts
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // set current contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // update contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // filter contacts

  // clear contacts

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
