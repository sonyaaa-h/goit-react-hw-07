// import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
    const contacts = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.filter.filter);

    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
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