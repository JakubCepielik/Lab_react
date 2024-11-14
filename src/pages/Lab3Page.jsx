import FlexContainer from "../components/FlexContainer";
import PersonalInfo from "../components/PersonalInfo";
import data from '../data/module-data.js';

function Lab3Page() {
    return ( 
    <>
    <h1>Laboratorium 3</h1>
    <h3>Lista imion</h3>
    {<FlexContainer element={PersonalInfo} data={data}>
        </FlexContainer>
        }
    </> 
    );
}

export default Lab3Page;