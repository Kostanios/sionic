import {useState} from "react";
import session from "../redux-orm/orm";

const useReducer = (action, model, rerender = true) => {
    const [, forse] = useState({})
    return () => {
        try {
            const res = model.reducer(action, session[model.modelName])
            if (rerender) forse({})
            return res
        } catch (e) {
            console.log(e)
        }
    }
}

export default  useReducer
