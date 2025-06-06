import { FaSave } from "react-icons/fa";
import Select from "../select";
import { useTransaction } from "../../contexts/TransactionLedgerContext";

const FormTransaction = ({ closeModal }) => {
  const { transactions, handleChange, handleSaveTransaction } =
    useTransaction();

  return (
    <form className="flex flex-col gap-3">
      <label htmlFor="value" className="text-[#ffffffdc] flex flex-col gap-1.5">
        Valor
        <input
          type="number"
          name="value"
          id="value"
          className="border-1 border-[#ffffff86] rounded-[5px] py-1.5 px-4 text-[#ffffffd2]"
          placeholder="R$0,00"
          step="any"
          value={transactions[0].value}
          onChange={handleChange}
        />
      </label>
      <label
        htmlFor="typeOfTransaction"
        className="text-[#ffffffdc] flex flex-col gap-1.5"
      >
        Tipo
        <Select
          name="typeOfTransaction"
          id="typeOfTransaction"
          options={[
            { type: "Selecione o tipo da transação" },
            { type: "Entrada" },
            { type: "Saída" },
          ]}
          value={transactions[0].typeOfTransaction}
          onChange={handleChange}
        />
      </label>
      <label
        htmlFor="dateOfTransaction"
        className="text-[#ffffffdc] flex flex-col gap-1.5"
      >
        Data
        <input
          type="date"
          name="date"
          id="date"
          className="border-1 border-[#ffffff86] rounded-[5px] py-1.5 px-4 text-[#fff] [&::-webkit-calendar-picker-indicator]:invert"
          value={transactions[0].date}
          onChange={handleChange}
        />
      </label>
      <label
        htmlFor="category"
        className="text-[#ffffffdc] flex flex-col gap-1.5"
      >
        Categoria
        <Select
          name="category"
          id="category"
          options={[
            { type: "Selecione a categoria" },
            { type: "Salário" },
            { type: "Receitas" },
            { type: "Alimentação" },
            { type: "Transporte" },
            { type: "Moradia" },
            { type: "Saúde" },
            { type: "Educação" },
            { type: "Lazer" },
            { type: "Contas" },
            { type: "Assinaturas" },
            { type: "Outros.." },
          ]}
          value={transactions[0].category}
          onChange={handleChange}
        />
      </label>
      <label
        htmlFor="description"
        className="text-[#ffffffdc] flex flex-col gap-1.5"
      >
        Descrição
        <textarea
          name="description"
          id="description"
          className="border-1 border-[#ffffff86] rounded-[5px] py-1.5 px-4 text-[#ffffffd2] h-[100px]"
          placeholder="Adicione uma breve descrição.. (ex.: “Economize R$6,000 por ano para um carro novo.”)"
          value={transactions[0].description}
          onChange={handleChange}
        />
      </label>
      <button
        type="button"
        className="mt-1 flex gap-2 items-center justify-center bg-[#21364A] rounded-[5px] py-2 font-[500] cursor-pointer hover:bg-[#32516e] transition-all duration-200"
        onClick={() => {
          closeModal();
          handleSaveTransaction();
        }}
      >
        <FaSave size={18} /> Salvar Transação
      </button>
    </form>
  );
};

export default FormTransaction;
