import { Container, Row} from "react-bootstrap";
import { useParams } from "react-router-dom";
import PersonalInfo from "../components/PersonalInfo";
import { data } from "../data/module-data.js";

function Lab2Page() {
    const { id } = useParams();
    const person = data.find((p) => p.id === parseInt(id));
    if (!person) {
        return <p>Nie znaleziono osoby o ID: {id}</p>;
    }
    return ( 
        <>
        <h1>Laboratorium 2</h1>
        <h3>Wyszukana osoba</h3>
        <Container>
        <Row>
        <PersonalInfo id={person.id} name={person.name} birth={person.birth} eyes={person.eyes} rating={person.rating}/>
        </Row>
        </Container>
        </> 
    );
}

export default Lab2Page;