import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';


// 1. Define the typescript type for the state
type ProductState = {
    products: string[],
    errorMessage : string,
    isLoading: boolean
}

// 2. Define initial state
const initialState: ProductState = {
    products : [],
    errorMessage : "",
    isLoading : false
}

// 3. build and export the signalStore
export const ProductStore = signalStore(
    { providedIn: 'root'},
    withState(initialState),


);




