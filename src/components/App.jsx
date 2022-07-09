import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {
const [contacts, setContacts] = useState([])

  return (
    <>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
