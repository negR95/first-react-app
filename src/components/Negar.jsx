import { Button, Center } from '@mantine/core';


const Negar = () => {
  return (
    <div style={{ width: 200 }}>
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} fullWidth
      onClick={console.log('heyhey')}>Hey</Button>
    </div>
  );
}

export default Negar;