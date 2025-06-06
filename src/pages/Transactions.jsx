import { useState } from "react";
import ButtonAdd from "../components/buttons/buttonAdd";
import SideBar from "../components/sideBar";
import Title from "../components/title";
import { IoClose } from "react-icons/io5";
import FormTransaction from "../components/forms/formTransaction";
import { useTransaction } from "../contexts/TransactionLedgerContext";
import TransactionHistory from "../components/transactionHistoryTable";

const Transactions = () => {
  const [showModal, setShowModal] = useState(false);
  const { savedTransactions, handleDelete } = useTransaction();

  return (
    <>
      <section className="flex gap-3">
        <SideBar />
        <div className="pl-[125px] pt-5 w-full pr-[50px]">
          <Title
            title="Transações"
            subtitle="Gerencie suas transações financeiras."
          />
          <div className="mt-5 w-full h-[1px] bg-[#ffffff36]"></div>
          <div className="mt-5 flex justify-between">
            {savedTransactions.length > 0 ? (
              <p className="text-[rgba(256,_256,_256,_0.9)]">
                <span className="font-[600]">{savedTransactions.length}</span>{" "}
                transações registradas
              </p>
            ) : (
              <p className="text-[rgba(256,_256,_256,_0.9)]">
                Nenhuma transação registrada.
              </p>
            )}
            <ButtonAdd action={() => setShowModal(true)} />
          </div>
          {savedTransactions.length > 0 && (
            <TransactionHistory
              savedTransactions={savedTransactions}
              hasBackground={true}
              hasPadding={true}
              hasBorder={true}
              onDelete={handleDelete}
              hasButtonDelete={true}
            />
          )}
        </div>
      </section>
      {showModal && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-[#000000a8] backdrop-blur-[3px] z-99 flex items-center justify-center">
          <div className="p-5 border border-[#ffffff77] rounded-[8px] w-[500px] h-auto">
            <div className="flex items-center justify-between pb-2 border-b border-[#ffffff5e]">
              <h4 className="text-[1.2rem] font-[500]">Nova transação</h4>
              <button
                onClick={() => !setShowModal()}
                className="group cursor-pointer"
              >
                <IoClose size={25} className="group-hover:text-[#ffffffd3]" />
              </button>
            </div>
            <div className="mt-3">
              <FormTransaction closeModal={setShowModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Transactions;
