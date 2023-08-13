import { ContactForm } from './ContactForm/ContactForm';
import { ContactsBook } from './App.staled';

export const App = () => {
  return (
    <ContactsBook>
      <h1>Phonebook</h1>
      <ContactForm />

      {/* <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... /> */}
    </ContactsBook>
  );
};
