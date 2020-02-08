import React, { useState, createContext } from 'react';

export const WithWeightsContext = createContext({
    checked: false,
    toggleChecked: () => {}
});

export const WithWeightsContextProvider = (props) => {
    const toggleChecked = (bol) => {
        console.log('HERE' + JSON.stringify(state))
        // setState({...state, checked: !initialState.checked})
        setState({...state,
            checked: bol
        })
        console.log('AFTER TOGGLE ' + JSON.stringify(state))
    };
    
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