import React from "react";
import ReactDOMClient from "react-dom/client";
import { FullScreen } from "./screens/FullScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<FullScreen />);
