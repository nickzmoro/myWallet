import { Route, Routes } from "react-router-dom";
import App from "../pages/App";
import Transactions from "../pages/Transactions";
import Goals from "../pages/Goals";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/transacoes" element={<Transactions />} />
      <Route path="/metas" element={<Goals />} />
    </Routes>
  );
}
