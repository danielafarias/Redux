import { CLICK_UPDATE_VALUE } from "./actionTypes";

// Action Creator
export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE, // Informa o reducer o tipo
    newValue: value // E o valor a ser atualizado
});