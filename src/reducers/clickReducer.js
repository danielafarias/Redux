import { CLICK_UPDATE_VALUE } from "../actions/actionTypes";

const initialState = {
    newValue: ''
};

// Caso o type acionado pela action for CLICK_UPDATE_VALUE será retornado o novo estado, caso não, retornará o estado anterior
export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_UPDATE_VALUE: // Tipo
            return {
                ...state, // Preserva o estado anterior
                newValue: action.newValue // Novo valor
            };
            default: 
            return state; // Estado atual
    }
};