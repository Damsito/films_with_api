import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import "tw-elements";
import {QueryClient, QueryClientProvider} from "react-query";
import store from "./app/store";
import {Provider} from "react-redux";
const queryClient = new QueryClient()
const rootElement = document.getElementById("root");

render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
        <App />
        </Provider>
    </QueryClientProvider>,
    rootElement
);
