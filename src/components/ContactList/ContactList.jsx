import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { getFilters } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filtered = useSelector(getFilters);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filtered.toLowerCase())
  );

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {filteredContacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              hasContacts={filteredContacts.length > 0}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}


