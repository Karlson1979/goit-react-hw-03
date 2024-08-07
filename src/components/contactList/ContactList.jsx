import Contact from "./contact/Contact"

 const ContactList = ({contacts}) => {

  return (
    <div>
      {contacts.map(contact=>(
        <Contact key={contact.id} name={contact.name} number={contact.number}/>
      )) }  
       

    </div>
  )
}
export default ContactList