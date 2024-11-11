import PersonalInfo from "../components/PersonalInfo";


function Lab1Page({ name }) {
    return ( 
    <>
    <h1>Laboratorium 1</h1>
    <h3>Lista imion</h3>
    <ul>
        {name.map((o) => <PersonalInfo {...o}/>)}
    </ul>
    </> 
    );
}

export default Lab1Page;