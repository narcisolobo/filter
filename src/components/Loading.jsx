import Container from 'react-bootstrap/Container'
import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <Container>
      <div className="w-100 p-5 d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="info" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </Container>
  );
}

export default Loading;
