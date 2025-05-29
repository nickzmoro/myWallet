import BalanceOverview from "../components/balanceOverview";
import SideBar from "../components/sideBar";
import { BsBank2 } from "react-icons/bs";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

function App() {
  return (
    <div className="flex gap-3">
      <SideBar />
      <section className="pl-[150px] pt-5 w-full pr-[50px]">
        <div>
          <h3 className="text-[1.5rem] font-[600]">Visão geral</h3>
          <p className="text-[#8FADCC] mt-1">
            Seu resumo financeiro atualizado.
          </p>
        </div>
        <div className="mt-8 flex justify-between gap-8">
          <BalanceOverview
            title={"Saldo Atual"}
            info={"Atualizado hoje"}
            infoColor={"text-[#7c92aa]"}
            icon={<BsBank2 className="text-[#8FADCC]" />}
          />
          <BalanceOverview
            title={"Entradas do Mês"}
            info={"+10% vs. Mês anterior"}
            infoColor={"text-[#9FFFC5]"}
            icon={<FaArrowUp className="text-[#3BFF88]" />}
            balanceColor={"text-[#3BFF88]"}
          />
          <BalanceOverview
            title={"Saídas do Mês"}
            info={"+5% vs. Mês anterior"}
            infoColor={"text-[#FA8C6F]"}
            icon={<FaArrowDown className="text-[#DA5733]" />}
            balanceColor={"text-[#DA5733]"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
