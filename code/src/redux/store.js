import { createStore } from "redux";
import rootReducer from "./reducers";
import {addArticle} from './actions';

const store = createStore(rootReducer);


store.subscribe(() => console.log(store.getState()));
store.dispatch( addArticle({ id: 1, title: 'Post 1',  body: "Sample Post Body" }) )

export default store;