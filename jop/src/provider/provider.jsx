import { createContext, useReducer } from "react";

const initialdata = {
    tables: [[1, 3, 0, 4], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    sum: 0
}

/*const reducer = ({...state}, action) => {
    //console.log(action.payload);
    const [count, stool, table] = action.payload;
    //console.log(tempstate)
    switch (action.type) {
        case "eat": {
        state.tables[table][stool] += 1;
        state.sum += 1
          return  {...state}
        }
        default:{
            return {...state}
        }
    }
}*/
const reducer = (state, action) => {
    const [count, stool, table] = action.payload;
    switch (action.type) {
      case "eat": {
        console.log(state.sum);
        return {
          ...state,
          tables: state.tables.map((row, i) =>
            i === table
              ? row.map((value, j) => (j === stool ? value + 1 : value))
              : row
          ),
          sum: state.sum + 1,
        };
      }
      default: {
        
        return state;
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