import BalanceChart from "../components/balanceGraphic";
import BalanceOverview from "../components/balanceOverview";
import Category from "../components/category";
import SideBar from "../components/sideBar";
import Title from "../components/title";
import { BsBank2 } from "react-icons/bs";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { IoAddCircleOutline } from "react-icons/io5";
import { useTransaction } from "../contexts/TransactionLedgerContext";
import TransactionHistory from "../components/transactionHistoryTable";
import { MdLabel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function App() {
  const { savedTransactions } = useTransaction();
  const navigate = useNavigate("");

  const income = 3000;
  const expenses = 1500;

  return (
    <div className="flex gap-3">
      <SideBar />
      <section className="pl-[125px] pt-5 w-full pr-[50px]">
        <Title
          title="Visão geral"
          subtitle="Seu resumo financeiro atualizado."
        />
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
              {savedTransactions.length > 0 ? (
                savedTransactions.map((transaction, index) => (
                  <div
                    className="flex items-center justify-between"
                    key={index}
                  >
                    <Category
                      icon={<MdLabel size={20} className="text-[#8fdfff]" />}
                      type={transaction.category}
                      amount={transaction.value}
                    />
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-between">
                  <p className="text-[#ffffffc0]">
                    Nenhuma categoria foi adicionada.
                  </p>
                  <button
                    className="flex items-center gap-2 p-2 px-3 font-[500] bg-[#24425e] rounded-[8px] hover:opacity-90 transition-all duration-200 cursor-pointer"
                    onClick={() => navigate("/transacoes")}
                  >
                    <IoAddCircleOutline size={20} />
                    Adicionar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10 mb-8 border border-[#304D69] rounded-[8px] p-5">
          <div>
            <h4 className="text-[1.25rem]">Transações recentes</h4>
          </div>
          {savedTransactions.length > 0 ? (
            <TransactionHistory savedTransactions={savedTransactions} />
          ) : (
            <p className="mt-3 text-[#ffffffc0] px-5">
              Nenhuma transação foi registrada até o momento..
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
