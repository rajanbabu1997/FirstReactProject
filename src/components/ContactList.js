import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";


const ContactList =(props) =>{
    console.log(props.Contacts);
    const clickHandler=(id) =>{
        props.getContactId(id);
    };
   
    const readerContactList = props.Contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} clickHandler={clickHandler} key={contact.id}/>
        )
    })
    return(
        <div className="main" style={{paddingTop: 50}}>
             <h2>
                ContactList 
                <Link to="/add" onClick={() =>  {window.location.href = "/add"; }}>
                <button className="ui button blue right"> Add Contact</button>
                </Link>
            </h2>
        <div className="ui celled list" style={{paddingTop: 50}}>           
           {readerContactList}
        </div>
        </div>
    )
}
export default ContactList;