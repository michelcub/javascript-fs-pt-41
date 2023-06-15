import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    // CORRECTA ( USE CALLBACK )
    // const increment = useCallback(() => setCounter(prev => prev + 1), []);

    const increment = () => setCounter(prev => prev + 1);
    const decrement = () => setCounter(prev => prev - 1);

    // CORRECTA ( USE MEMO )
    // const store = useMemo(() => {
    //     return {
    //         counter
    //     }
    // }, [counter]);

    const store = {
        counter
    }

    const actions = {
        increment,
        decrement
    }

    return(
        <AppContext.Provider value={{ store, actions }}>
            {children}
        </AppContext.Provider>
    );
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;