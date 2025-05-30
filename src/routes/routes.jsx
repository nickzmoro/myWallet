import { Route, Routes } from "react-router-dom";
import App from "../pages/App";
import Transactions from "../pages/Transactions";
import Goals from "../pages/Goals";
import Reports from "../pages/Reports";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/transacoes" element={<Transactions />} />
      <Route path="/metas" element={<Goals />} />
      <Route path="/relatorios" element={<Reports />} />
    </Routes>
  );
}
