import React from "react";
import ReactDOM from "react-dom";
import webFontLoader from "webfontloader";
import { QueryClient, QueryClientProvider } from "react-query";

import "assets/styles/main.css";
import App from "./App";

const queryClient = new QueryClient();

webFontLoader.load({
  google: {
    families: ["Raleway:400,700:latin", "Montserrat:700:latin"],
  },
});

ReactDOM.render(
  <>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </>,
  document.getElementById("root")
);
