import { createContext, useReducer } from "react";

const initialdata = {
    tables: [[1, 3, 0, 4], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    sum: 0
}

const reducer = ({...state}, action) => {
    //console.log(action.payload);
    
    //console.log(tempstate)
    switch (action.type) {
        case "eat": {
        const [count, stool, table] = action.payload;
        state.tables[table][stool] += 1;
        state.sum += 1
          return  {...state}
        }
        case "add_table": {
          const newTable = [0,0,0,0]
          state.tables.push(newTable)
          return {...state}
        }
        default:{
            return {...state}
        }
    }
}


export const AppContext = createContext(initialdata);

export const AppProvider = ({children}) => {
    const store = useReducer(reducer, initialdata);

    return(
        <AppContext.Provider value={store}>
            {children}
        </AppContext.Provider>
    )
}