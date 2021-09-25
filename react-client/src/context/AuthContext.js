import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false
}
export const AuthContext = createContext(INITIAL_STATE)

const AuthContextWrapper = (props) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextWrapper;