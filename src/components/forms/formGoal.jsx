import { FaSave } from "react-icons/fa";

const FormGoal = ({ form, onChange, onClick }) => {
  return (
    <form className="flex flex-col gap-3">
      <label className="text-[#ffffffdc] flex flex-col gap-1.5">
        Propósito
        <input
          type="text"
          name="purpose"
          id="purpose"
          value={form.purpose}
          className="border-1 border-[#ffffff86] rounded-[5px] py-1.5 px-4 text-[#ffffffd2]"
          placeholder="ex.: “Comprar um carro novo”"
          onChange={onChange}
        />
      </label>
      <label htmlFor="value" className="text-[#ffffffdc] flex flex-col gap-1.5">
        Valor
        <input
          type="number"
          name="value"
          id="value"
          value={form.value}
          className="border-1 border-[#ffffff86] rounded-[5px] py-1.5 px-4 text-[#ffffffd2]"
          placeholder="R$0,00"
          onChange={onChange}
          step="any"
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
          value={form.description}
          className="border-1 border-[#ffffff86] rounded-[5px] py-1.5 px-4 text-[#ffffffd2] h-[100px]"
          placeholder="Adicione uma breve descrição.. (ex.: “Economize R$6,000 por ano para um carro novo.”)"
          onChange={onChange}
        />
      </label>
      <button
        type="button"
        className="mt-1 flex gap-2 items-center justify-center bg-[#21364A] rounded-[5px] py-2 font-[500] cursor-pointer hover:bg-[#32516e] transition-all duration-200"
        onClick={onClick}
      >
        <FaSave size={18} /> Salvar Meta
      </button>
    </form>
  );
};

export default FormGoal;
