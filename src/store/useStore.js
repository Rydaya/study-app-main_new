import { useState } from "react";
import { reducer } from "./reducer.js";

export const useStore = (initialStore) => {
    const [state, setState] = useState(initialStore);

    const dispatcher = (action) => {
        const newState = reducer(state, action);

        setState(newState);
    }

    return [state, dispatcher];
}