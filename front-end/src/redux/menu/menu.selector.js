import { createSelector } from 'reselect';

const selectMenu = state => state.menu;

export const selectMenuSections = createSelector(
    [selectMenu],
    menu => menu.sections
);