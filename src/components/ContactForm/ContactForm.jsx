import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const initialValues = {
    // id: nanoid(),
    name: "",
    phone: "",
};

const ContactForm = () => {  
    const nameId = useId();
    const numberId = useId();

    const phoneRegex = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
    const schema = Yup.object().shape({
        name: Yup.string()
            .required("Required")
            .min(3, "Too short")
            .max(50, "Too long"),
        phone: Yup.string()
            .required("Required")
            .matches(phoneRegex, "Phone number is not valid format (XXX-XX-XX)"), 
    });

    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        const newContact = {
            name: values.name,
            phone: values.phone,
        }
        dispatch(addContact(newContact));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
        >
            <Form className={s.form}>
                <div className={s.inputWrapper}>
                    <label htmlFor={nameId}>Name</label>
                    <Field type="text" name="name" id={nameId} />
                    <ErrorMessage className={s.error} name="name" component="p" />
                </div>

                <div className={s.inputWrapper}>
                    <label htmlFor={numberId}>Number</label>
                    <Field type="num" name="phone" id={numberId} />
                    <ErrorMessage className={s.error} name="phone" component="p" />
                </div>

                <button className={s.addContactBtn} type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};
export default ContactForm;