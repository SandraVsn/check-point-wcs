import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContinentsPage from "./pages/ContinentsPage";

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={(<ContinentsPage/>)} />
</Routes>
</BrowserRouter>  );
}

export default App;
