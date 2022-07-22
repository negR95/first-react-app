import { Button, Input, Text } from '@mantine/core';


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
            <Input variant="default" placeholder="Name" size='lg' value={this.state.name} onChange={(event) => { this.setState({ name: event.target.value }) }} />
          </div>

          <div style={{ marginTop: "20px" }}>
            <Text weight={500} size="xl" >
              <label htmlFor="">Email</label>
            </Text>
            <Input variant="default" placeholder="Email" size='lg' value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} />
          </div>


          <Button style={{ marginTop: "20px" }}> Add </Button>

        </form>
      </div>
    )
  }
}


export default AddContact;