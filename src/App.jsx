import { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import store from "./store";

function App() {
  return (
    <div className="App">
      <main>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Users />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </main>
    </div>
  );
}

export default App;
