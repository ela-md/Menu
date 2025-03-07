import { createContext, useState, useEffect } from "react";
import menu from "./data";


export const AppContext = createContext()

 const AppProvider = ({children}) => {
  
    const [menuItems, setMenuItems] = useState(menu);
    
 

   const contextValue = {menuItems, setMenuItems}
    return(
        <AppContext.Provider value={contextValue}>  
          {children}
        </AppContext.Provider>
    )
}

export default AppProvider
