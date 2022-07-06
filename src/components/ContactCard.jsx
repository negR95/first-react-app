import { List } from '@mantine/core';
import { Text } from '@mantine/core';

const ContactCard = (props) => {

  const { id, name, email } = props.contact;

  return (<List><Text size="xl" >
    <List.Item>{name}</List.Item>
    <List.Item>{email}</List.Item>
  </Text></List>
  );
}

export default ContactCard;