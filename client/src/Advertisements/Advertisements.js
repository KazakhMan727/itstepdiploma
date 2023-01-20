import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AdvtComponent from "./AdvtComponent";

function Advertisements () {
    return (
        <Container fluid className="borderRed">
            <Container className="borderGreen">
                <Row>
                    <AdvtComponent/>
                    <AdvtComponent/>
                    <AdvtComponent/>
                    <AdvtComponent/>
                    <AdvtComponent/>
                    <AdvtComponent/>
                </Row>
            </Container>
        </Container>
    );
}

export default Advertisements;