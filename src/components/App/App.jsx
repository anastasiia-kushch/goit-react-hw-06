import ContactForm from '../ContactForm/ContactForm';
import Searchbox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import css from '../App/App.module.css';

function App() {
  return (
    <div className={css.div}>
      <h1>Phonebook</h1>
      <ContactForm />
      <Searchbox />
      <ContactList />
    </div>
  );
}

export default App;
