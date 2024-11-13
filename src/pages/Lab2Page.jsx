import { Container, Row} from "react-bootstrap";
import { useParams } from "react-router-dom";
import PersonalInfo from "../components/PersonalInfo";
//import { data } from "../data/module-data.js";
export const data = [
    { id: 1, name: "Simba", birth: "21.02.2017", eyes: "green" },
    { id: 2, name: "Max", birth: "10.04.2012", eyes: "brown" },
    { id: 3, name: "Mikołaj", birth: "29.07.2008", eyes: "blue" },
    { id: 4, name: "Małgorzata", birth: "31.08.2011", eyes: "blue" },
    { id: 5, name: "Cezary", birth: "13.04.2016", eyes: "brown" },
    { id: 6, name: "Mikołaj", birth: "26.10.2023", eyes: "brown" },
    { id: 7, name: "Andrzej", birth: "16.11.2012", eyes: "blue" },
    { id: 8, name: "Mateusz", birth: "11.03.2013", eyes: "brown" },
    { id: 9, name: "Andrzej", birth: "26.12.2014", eyes: "blue" },
    { id: 10, name: "Mikołaj", birth: "17.10.2017", eyes: "blue" },
  ];

function Lab2Page() {
    const { id } = useParams();
    const person = data.find((p) => p.id === parseInt(id));
    if (!person) {
        return <p>Nie znaleziono osoby o ID: {id}</p>;
    }
    return ( 
        <>
        <Container>
        <Row>
        <PersonalInfo id={person.id} name={person.name} birth={person.birth} eyes={person.eyes}/>
        </Row>
        </Container>
        </> 
    );
}

export default Lab2Page;