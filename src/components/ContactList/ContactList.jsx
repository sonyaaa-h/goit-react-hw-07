// import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import {selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
    return (
        <>
            <ul className={s.wrapperList}>
                {filteredContacts.map((contact) => (
                    <Contact
                        key={contact.id}
                        {...contact}
                    />
                ))}
            </ul>
        </>
    );
};
export default ContactList;