import React, { useState, createContext } from 'react';

export const WithWeightsContext = createContext({
    checked: null,
    toggleChecked: () => {}
});

export const WithWeightsContextProvider = (props) => {
    const toggleChecked = (newChecked) => {
        setState({...state,
            checked: newChecked
    })};
    
    const initialState = {
        checked: false,
        toggleChecked: toggleChecked
    };
    
    const [state, setState] = useState(initialState);

    return(
        <WithWeightsContext.Provider value={state}>
            {props.children}
        </WithWeightsContext.Provider>
    )
};