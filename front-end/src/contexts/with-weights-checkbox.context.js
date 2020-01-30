import { createContext } from 'react';

const WithWeightsCheckboxContext = createContext({
    checked: false,
    toggleChecked: () => {}
});

export default WithWeightsCheckboxContext;