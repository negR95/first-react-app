import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Negar from "./Negar";


function App() {

  const contacts = [
    {
      id: "1",
      name: "Negar",
      email: "negar.mahdavi95@gmail.com"
    },
    {
      id: "2",
      name: "gholi",
      email: "gholi.mahdavi95@gmail.com"
    },
  ];

  return (
    <>
      <Negar />
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
