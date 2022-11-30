import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.routes";
import Navigation from "./routes/navigation/nav.routes";
import Login from "./routes/login/login.routes";

// This page defines all the routing of the app.
const Shop = () => {
  return <h1>I'm the shop page</h1>
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
