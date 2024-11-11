import { Container, Row} from "react-bootstrap";
import PersonalInfo from "../components/PersonalInfo";


function Lab1Page({ name }) {
    return ( 
    <>
    <h1>Laboratorium 1</h1>
    <h3>Lista imion</h3>
    <Container>
        <Row>
        {name.map((o) => <PersonalInfo {...o}/>)}
        </Row>
    </Container>
    </> 
    );
}

export default Lab1Page;