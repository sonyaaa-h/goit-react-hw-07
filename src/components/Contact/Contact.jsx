import s from "./Contact.module.css";
import { IoMdContact } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDownloadDone } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { deleteContact, editContact } from "../../redux/contactsOps";

const Contact = ({ id, name, phone }) => {
    const dispatch = useDispatch();
    const [editValue, setEditValue] = useState(false);
    const [nameValue, setNameValue] = useState(name);
    const [phoneValue, setPhoneValue] = useState(phone);

    return (
        <div className={s.wrapper}>
            <div className={s.contactInfo}>
                {editValue ? (
                    <div className={s.inputWrapper}>
                        <input
                            type="text"
                            defaultValue={name}
                            onChange={(e) => setNameValue(e.target.value)}
                            onBlur={() => {
                                dispatch(editContact({ id, name: nameValue, phone: phoneValue }));
                            }}
                        />
                        <input
                            type="text"
                            defaultValue={phone}
                            onChange={(e) => setPhoneValue(e.target.value)}
                            onBlur={() => {
                                dispatch(
                                    editContact({ id, name: nameValue, phone: phoneValue })
                                );
                            }}
                        />
                    </div>
                ) : (
                    <div>
                        {" "}
                        <div className={s.iconWrapper}>
                            <IoMdContact className={s.icon} size={22} />
                            <p>{name}</p>
                        </div>
                        <div className={s.iconWrapper}>
                            <FaPhoneVolume className={s.icon} size={20} />
                            <p>{phone}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className={s.iconWrapper}>
                {editValue ? (
                    <button className={s.button} onClick={() => setEditValue(false)}>
                        <MdDownloadDone />
                    </button>
                ) : (
                    <button className={s.button} onClick={() => setEditValue(true)}>
                        <CiEdit />
                    </button>
                )}
                <button
                    className={s.button}
                    onClick={() => dispatch(deleteContact(id))}
                >
                    <RiDeleteBinLine />
                </button>
            </div>
        </div>
    );
};
export default Contact;
