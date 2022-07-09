import { Avatar } from '@mantine/core';
import { Button } from '@mantine/core';

const ContactCard = (props) => {

  const { id, name, email } = props.contact;

  return (
    <div style={{ display: 'flex' }}>
      <Avatar src="avatar.png" alt="it's me" />
      <div>
        <div style={{ fontSize: 28 }}>{name}</div>
        <div style={{ fontSize: 20 }}>{email}</div>

        <Button color="red" radius="xl">delete</Button>
      </div>
    </div>
  );
}

export default ContactCard;