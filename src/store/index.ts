import { createContext, useContext } from 'react'
import car from "./car";
import counter from './counter';

class moboxStore {
    car = car
    counter = counter
}
const store = new moboxStore();

const storeContext = createContext(store);

export const useStore = () => useContext(storeContext)
