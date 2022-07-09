import { Input } from '@mantine/core';
import { Text } from '@mantine/core';
import { Button } from '@mantine/core';


class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  render() {
    return (
      <div>
        <Text weight={500} size="xl" >
          <h2>Add Contact</h2>
        </Text>
        <form>

          <div style={{ maxWidth: 500 }}>
            <Text weight={500} size="xl" >
              <label htmlFor="">Name</label>
            </Text>
            <Input variant="default" placeholder="Name" size='lg' />
          </div>

          <div style={{ marginTop: "20px" }}>
            <Text weight={500} size="xl" >
              <label htmlFor="">Email</label>
            </Text>
            <Input variant="default" placeholder="Email" size='lg' />
          </div>


          <Button style={{ marginTop: "20px" }}> Add </Button>

        </form>
      </div>
    )
  }
}


export default AddContact;