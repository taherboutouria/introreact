import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './2206368.png'
function App() {
  return (
    <div className="App" style={{display:'flex',justifyContent:'center'}}>
      <img src={image} />
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nom :</Form.Label>
        <Form.Control type="nom" placeholder="taher" />
        <Form.Label>Age :</Form.Label>
        <Form.Control type="age" placeholder="30 ans" />
        <Form.Label>aderess email :</Form.Label>
        <Form.Control type="email" placeholder="taher@gmail.com" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default App;
