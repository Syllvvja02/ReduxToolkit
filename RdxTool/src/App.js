import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "./BlogApp/store";
import PostsList from "./Features/Posts/PostsList";

const App = () => {
    return(
        <Provider store={store}>
            <PostsList/>
        </Provider>
    )
}

const root = createRoot(document.getElementById("app"))
root.render(<App/>)