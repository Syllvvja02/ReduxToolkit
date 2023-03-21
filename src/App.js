import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "./BlogApp/store";

const App = () => {
    return(
        <Provider store={store}>

        </Provider>
    )
}

const root = createRoot(document.getElementById("app"))
root.render(<App/>)