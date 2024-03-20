import { useState } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import Searchbox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import css from '../App/App.module.css';



function App() {
  const [filter, setFilter] = useState('');
  
  return (
    <div className={css.div}>
      <h1>Phonebook</h1>
      <ContactForm />
      <Searchbox value={filter} onFilter={setFilter} />
      <ContactList />
    </div>
  );
}

export default App;
