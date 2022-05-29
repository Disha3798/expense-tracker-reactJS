import React from "react"
import { AuthContextProvider } from "./auth-context"
import { ExpenseContextProvider } from "./expense-context"

const MainContextProvider=(props)=>{
    return(
        <React.Fragment>
            {props.children}
            <AuthContextProvider/>
            <ExpenseContextProvider/>
        </React.Fragment>
    )
}

export default MainContextProvider