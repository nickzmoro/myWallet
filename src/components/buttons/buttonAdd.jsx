import { IoMdAdd } from "react-icons/io";

const ButtonAdd = ({ action }) => {
  return (
    <button
      onClick={action}
      className="flex gap-3 items-center py-1.5 px-3 rounded-[8px] bg-[#4388B4] text-white font-[500] cursor-pointer hover:bg-[#4389b4cb] transition-all duration-200"
    >
      <IoMdAdd size={22} />
      <div className="w-[1px] h-[20px] bg-[#ffffff7e]"></div>
      Adicionar
    </button>
  );
};

export default ButtonAdd;
