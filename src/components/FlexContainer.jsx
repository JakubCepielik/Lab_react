import AppContext from '../data/AppContext';
import { useContext} from 'react';
 
function FlexContainer({ element: Element }) { // Zmieniamy nazwę `element` na `Element`
    const context = useContext(AppContext);
    const state = context.items;
    return ( 
        <>
            <div className="d-flex justify-content-center flex-wrap mt-3">
                { state.map(e => <Element key={e.id} {...e} />) }
            </div>
        </>
    );
}

export default FlexContainer;