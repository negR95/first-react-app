import { Text } from '@mantine/core';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  console.log(props);

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} />
    );
  })

  return (
    <div >
      <Text weight={500} size="xl" >
        <h2>Contact List</h2>
      </Text>
      {renderContactList}
    </div>
  );
}

export default ContactList;
