import react, {useState, useEffect} from 'react';
import {BrowserRouter as Router,Switch,  Route, } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


  function App() {

  const LOCAL_STORAGE_KEY="contacts"
  const [Contacts, setContacts]= useState([])
  const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
}
  const addContactHandler=(contact)=>{
    console.log(contact)
    setContacts([...Contacts, {id:generateKey(contact. name),...contact}]);
  }
  useEffect(()=>{
    const retrieveItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) 
    retrieveItems && setContacts(retrieveItems);
    
      }, [])

  useEffect(()=>{
    Contacts && Contacts.length &&  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Contacts &&  Contacts.length > 0 ? Contacts:""))
  }, [Contacts]);

  const removeHandler = (id)=>{
    const newContacts= Contacts.filter(x=>x.id !== id);
     setContacts(newContacts);
  }

  return (
    <div className='ui container'>
     <Router>
      <Header />
        <Switch>         
        <Route path="/" exact render={(props)=><ContactList {...props} Contacts={Contacts} getContactId={removeHandler}/>} />
         <Route path="/add" render= {(props)=><AddContact  {...props}  addContactHandler={addContactHandler} />} />         
        </Switch> 
    </Router>    

    </div>
  );
}


    //  {/* <AddContact addContactHandler={addContactHandler}/> */}
    //  {/* <ContactList Contacts={Contacts} getContactId={removeHandler}/> */}
    

    // {/* ///component approcfa-flip-horizontal  */}
    // {/* <Route path="/" exact component={()=><ContactList Contacts={Contacts} getContactId={removeHandler}/>} />
    //      <Route path="/add" component= {()=><AddContact addContactHandler={addContactHandler} />} /> */}
export default App;
