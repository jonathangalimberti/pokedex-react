import react from 'react';
import {Context} from '../Context/Context';

function Button (){
    const {nextPage, previousPage} = react.useContext(Context);
    return ( 
        <div>
            <button type="button" onClick={previousPage}> previous Page</button>
            <button type="button" onClick={nextPage}> next Page</button>
        </div>
    )
}

export {Button};