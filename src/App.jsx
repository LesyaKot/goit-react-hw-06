// import  favicon from '../public/favicon.png'
import Layout from "./components/Layout/Layout";
import Contact from "./components/Contact/Contact";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components//ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <h1>Phonebook</h1>
        <Contact />
        <ContactList />
        <ContactForm />
        <SearchBox />
      </Layout>
    </>
  );
}

export default App;
