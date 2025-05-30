import BalanceChart from "../components/balanceGraphic";
import BalanceOverview from "../components/balanceOverview";
import Category from "../components/category";
import SideBar from "../components/sideBar";
import { BsBank2 } from "react-icons/bs";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { FaBus } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { GiFamilyHouse } from "react-icons/gi";

function App() {
  const income = 3000;
  const expenses = 1500;

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
        <div className="flex justify-between gap-8">
          <div className="min-w-[1000px] mt-10 border border-[#304D69] rounded-[8px] p-5">
            <h4 className="text-[1.1rem] text-[#8FADCC] font-[500]">
              Entradas vs. Saídas
            </h4>
            <p className="text-[0.9rem] mb-5 text-[#979797]">
              Comparativo mensal
            </p>
            <BalanceChart income={income} expenses={expenses} />
          </div>
          <div className="w-full mt-10 border border-[#304D69] rounded-[8px] p-5">
            <h4 className="text-[1.1rem] text-[#8FADCC] font-[500]">
              Categorias mais utilizadas
            </h4>
            <div className="mt-5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <Category
                  icon={<ImSpoonKnife size={20} className="text-[#E26416]" />}
                  type={"Alimentação"}
                  amount={300}
                />
              </div>
              <div className="flex items-center justify-between">
                <Category
                  icon={<FaBus size={20} className="text-[#1667E2]" />}
                  type={"Transporte"}
                  amount={300}
                />
              </div>
              <div className="flex items-center justify-between">
                <Category
                  icon={
                    <IoGameController size={20} className="text-[#A816E2]" />
                  }
                  type={"Lazer"}
                  amount={300}
                />
              </div>
              <div className="flex items-center justify-between">
                <Category
                  icon={<GiFamilyHouse size={20} className="text-[#E2169E]" />}
                  type={"Moradia"}
                  amount={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
