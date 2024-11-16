import AppContext from '../data/AppContext';
import { useContext} from 'react';
 
function FlexContainer({ element }) {
    const context = useContext(AppContext);
    const state = context.items;
    return ( 
        <>
            <div className="d-flex justify-content-center flex-wrap mt-3">
                { state.map(e => element({...e})) }
            </div>
        </>
     );
}

export default FlexContainer;