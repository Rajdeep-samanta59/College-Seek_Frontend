import { createContext, useState } from "react";


export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [ account, setAccount ] = useState({ name: '', username: '' });
        
    return (
        <DataContext.Provider value={{ 
            account, 
            setAccount 
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;




// The `dataprovide.jsx` file is responsible for setting up a React Context (`DataContext`) that shares user account data (such as the currently logged-in user's name and username) across different components in the application.

// Here's how it works:

// * `createContext(null)` initializes a context object which can later be accessed by any component wrapped inside this provider.
// * `DataProvider` is a functional component that wraps its `children` (i.e. any nested components) with the `DataContext.Provider`.
// * Inside this provider, it manages a state variable `account` using `useState`, initialized as an object with empty `name` and `username`.
// * It exposes both `account` and its setter `setAccount` through the context value, so any child component can **read** or **update** the logged-in user data without prop drilling.

// This setup is essential for global user session handling in a frontend React app like this one.
