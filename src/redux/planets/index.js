import { actionTypes } from "./actionTypes";

const initialState = {
    planets: [],
    addUrl: "",
    searchPlanets: [],
    totalInfo: {}, 
};

export function planetsReducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_PLANETS:
            return {
                ...state,
                planets: [...action.payload.results],
                addUrl: action.payload.next
            }
        case actionTypes.SET_NEXT_PAGE_OF_PLANETS:
            return {
                ...state,
                planets: [...state.planets, ...action.payload.results],
                addUrl: action.payload.next
            }
        case actionTypes.SET_SEARCH_PLANETS:
            return {
                ...state,
                searchPlanets: state.planets?.filter((planets) => {
                    if(action.payload === "") {
                        return planets
                    } else if(planets.name.toLowerCase().includes(action.payload.toLowerCase())) {
                        return planets
                    }
                })
            }    
        case actionTypes.SET_TOTAL_INFO_OF_PLANETS:
            return {
                ...state,
                totalInfo: {...action.payload}
            }
        default:
            return state;
    };
};
