import { IoIosArrowDown } from "react-icons/io";

const Select = ({ name, id, options, value, onChange }) => {
  return (
    <div className="relative inline-block">
      <select
        name={name}
        id={id}
        value={value}
        className="w-full appearance-none border-1 border-[#ffffff86] rounded-[5px] py-1.5 px-4 text-[#ffffffd2] bg-[#000000a8]"
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.type}>
            {option.type}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#ffffffd2]">
        <IoIosArrowDown size={20} />
      </div>
    </div>
  );
};

export default Select;
