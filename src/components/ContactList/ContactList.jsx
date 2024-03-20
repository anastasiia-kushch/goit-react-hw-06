import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';

import css from '../ContactList/ContactList.module.css'

export default function ContactList() {
  const selectContacts = useSelector((state) => state.contacts.items);

  return (
    <ul className={css.ul}>
      {selectContacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
