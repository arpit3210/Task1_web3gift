import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from "./Components/Home";

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Home></Home>
    }
  ]
)
function App() {
  return (
    <>
    <main>
    <RouterProvider router={router}></RouterProvider>
    </main>
    </>
  );
}

export default App;
