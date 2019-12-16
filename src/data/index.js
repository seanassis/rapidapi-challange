import { observable } from "mobx";
import imdbStore from "./stores/imdb.store";

const stores = observable({
    imdbStore
})

export default stores