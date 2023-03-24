import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/login" element={<>Login</>} />
        </Route>
        <Route path="/app" element={<MainLayout />}>
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
