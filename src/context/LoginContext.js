import { createContext } from "react";



export const LoginContext = createContext()

export const LoginProvider = ({children}) => {

<LoginContext.Provider>

    {children}

</LoginContext.Provider>
 
}