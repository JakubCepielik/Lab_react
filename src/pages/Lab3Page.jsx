import FlexContainer from "../components/FlexContainer";
import PersonalInfo from "../components/PersonalInfo";


function Lab3Page() {
    return ( 
    <>
    <h1>Laboratorium 3</h1>
    <h3>Lista imion</h3>
    {<FlexContainer element={PersonalInfo}>
        </FlexContainer>
        }
    </> 
    );
}

export default Lab3Page;