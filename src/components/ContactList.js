import React from "react";
import ContactCard from "./ContactCard";


const ContactList =(props) =>{
    console.log(props.Contacts);
    const clickHandler=(id) =>{
        props.getContactId(id);
    };
    const Contacts= [{
        id:"1",
        name:"John",
        email:"john@gmail.com",
    }];
    const readerContactList = Contacts.map((contact)=>{
        return(
           <ContactCard contact={contact} clickHandler={clickHandler} key={contact.id}/>
        )
    })
    return(
        <div className="ui celled list">
           {readerContactList}
        </div>
    )
}
export default ContactList;