import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";

const GoalsCard = ({
  index,
  goal,
  handleCompleteGoal,
  handleDeleteGoal,
  handleResetTarget,
}) => {
  return (
    <div
      key={index}
      className={`relative p-5 border border-[#ffffff38] rounded-[8px] min-w-[250px]`}
    >
      <h4 className="text-[1.1rem] font-[500] mb-1.5">{goal.purpose}</h4>
      <p className="text-[#ffffffd5] mb-1.5 max-w-[250px]">
        {goal.description}
      </p>
      <p className="text-[#BDDEFF] font-[500]">
        {Number(goal.value).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <button
        className={`mt-5 py-1.5 flex items-center justify-center gap-2 rounded-[5px] w-full bg-[#259752] cursor-pointer font-[500] hover:bg-[#259753d8] ${
          goal.completed && "pointer-events-none"
        }`}
        onClick={() => handleCompleteGoal(index)}
        disabled={goal.completed}
      >
        <FaCheck />
        {goal.completed ? "Concluído" : "Concluir"}
      </button>
      {goal.completed && (
        <div className="absolute top-0 left-0 w-full h-full bg-[#16512d46] backdrop-blur-[2px] rounded-[8px] flex gap-1 items-center justify-center">
          <button
            onClick={() => handleDeleteGoal(index)}
            className="bg-[#BE2800] p-2 rounded-[5px] cursor-pointer border border-[#fff3] hover:bg-[#ff0000b7] transition-all duration-200"
          >
            <FaTrashAlt className="text-[#ffffff]" />
          </button>
          <button
            onClick={() => handleResetTarget(index)}
            className="bg-[#414141] p-2 rounded-[5px] cursor-pointer border border-[#fff3] hover:bg-[#818181b7] transition-all duration-200"
          >
            <GrPowerReset className="text-[#ffffff]" />
          </button>
        </div>
      )}
    </div>
  );
};

export default GoalsCard;
