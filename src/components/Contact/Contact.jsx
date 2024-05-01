import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ id, name, number, hasContacts }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div className={css.contactWrapper}>
        <div className={css.wrapper}>
          <p className={css.username}>{name}</p>
          <p className={css.userphone}>{number}</p>
        </div>
        {hasContacts && (
          <button className={css.btn} type="button" onClick={handleDelete}>
            Delete
          </button>
        )}
      </div>
    </>
  );
}


