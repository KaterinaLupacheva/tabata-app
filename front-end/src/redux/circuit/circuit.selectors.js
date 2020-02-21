import { createSelector } from "reselect";

const selectCircuit = state => state.circuit;

export const selectCircuitOptions = createSelector(
  [selectCircuit],
  circuit => circuit.options
);

export const selectSelectedCircuit = createSelector(
  [selectCircuit],
  circuit => circuit.selectedCircuit
);

export const selectCurrentCircuit = createSelector(
  [selectCircuit],
  circuit => circuit.currentCircuit
);
