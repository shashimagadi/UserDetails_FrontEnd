import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateUser from "./components/CreateUser";

import SideAndNavbar from "./components/SideAndNavbar";
import Welcome from "./components/Welcome";

import "react-toastify/dist/ReactToastify.css";
import { TodoList } from "./components/TodoList";
import Parent from "./components/Parentchild/Parent";
import { UseRefDOM } from "./components/hooks/UseRefDOM";
import { UseRefCount } from "./components/hooks/UseRefCount";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SideAndNavbar />}>
            <Route index element={<Welcome />} />
            <Route path="/user-details" element={<Home />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/todo" element={<TodoList />} />

            <Route path="/parent" element={<Parent />} />
            <Route path="/ref" element={<UseRefDOM />} />
            <Route path="/refcount" element={<UseRefCount />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
