import { useState, useEffect } from "react";
import ButtonAdd from "../components/buttons/buttonAdd";
import SideBar from "../components/sideBar";
import Title from "../components/title";
import { IoClose } from "react-icons/io5";
import FormGoal from "../components/forms/formGoal";
import { FaCheck } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

const Goals = () => {
  const [form, setForm] = useState({
    purpose: "",
    value: "",
    description: "",
  });
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem("entries");
    return savedEntries ? JSON.parse(savedEntries) : [];
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
    console.log("Salvando no localStorage:", entries);
  }, [entries]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((old) => ({
      ...old,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    setEntries((old) => [
      ...old,
      { ...form, value: Number(form.value), completed: false },
    ]);
    setForm({ purpose: "", value: "", description: "" });
  };

  const handleCompleteGoal = (index) => {
    setEntries((old) =>
      old.map((entry, i) =>
        i === index ? { ...entry, completed: true } : entry
      )
    );
  };

  const handleResetTarget = (index) => {
    setEntries((old) =>
      old.map((entry, i) =>
        i === index ? { ...entry, completed: false } : entry
      )
    );
  };

  const handleDelete = (index) => {
    setEntries((old) => old.filter((_, i) => i !== index));
  };

  return (
    <>
      <section className="flex gap-3">
        <SideBar />
        <div className="pl-[125px] pt-5 w-full pr-[50px]">
          <Title
            title="Metas financeiras"
            subtitle="Defina e acompanhe suas metas financeiras."
          />
          <div className="mt-5 w-full h-[1px] bg-[#ffffff36]"></div>
          <div className="mt-5 flex justify-between">
            {entries.length <= 0 ? (
              <p className="text-[rgba(256,_256,_256,_0.9)]">
                Nenhuma meta registrada.
              </p>
            ) : (
              <p className="text-[rgba(256,_256,_256,_0.9)]">
                <span className="font-[600]">{entries.length}</span> metas
                registradas
              </p>
            )}
            <ButtonAdd action={() => setShowModal(true)} />
          </div>
          <div className="mt-5 flex gap-5">
            {entries.length > 0 &&
              entries.map((i, index) => (
                <div
                  key={index}
                  className={`relative p-5 border border-[#ffffff38] rounded-[8px] min-w-[250px] ${
                    i.completed && ""
                  }`}
                >
                  <h4 className="text-[1.1rem] font-[500] mb-1.5">
                    {i.purpose}
                  </h4>
                  <p className="text-[#ffffffd5] mb-1.5 max-w-[250px]">
                    {i.description}
                  </p>
                  <p className="text-[#BDDEFF] font-[500]">
                    {Number(i.value).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <button
                    className={`mt-5 py-1.5 flex items-center justify-center gap-2 rounded-[5px] w-full bg-[#259752] cursor-pointer font-[500] hover:bg-[#259753d8] ${
                      i.completed && "pointer-events-none"
                    }`}
                    onClick={() => handleCompleteGoal(index)}
                    disabled={i.completed}
                  >
                    <FaCheck />
                    {i.completed ? "Concluído" : "Concluir"}
                  </button>
                  {i.completed && (
                    <div className="absolute top-0 left-0 w-full h-full bg-[#16512d46] backdrop-blur-[2px] rounded-[8px] flex gap-1 items-center justify-center">
                      <button
                        onClick={() => handleDelete(index)}
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
              ))}
          </div>
        </div>
        {showModal && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-[#000000a8] backdrop-blur-[3px] z-99 flex items-center justify-center">
            <div className="p-5 border border-[#ffffff77] rounded-[8px] w-[500px] h-auto">
              <div className="flex items-center justify-between pb-2 border-b border-[#ffffff5e]">
                <h4 className="text-[1.2rem] font-[500]">Definir meta</h4>
                <button
                  onClick={() => !setShowModal()}
                  className="group cursor-pointer"
                >
                  <IoClose size={25} className="group-hover:text-[#ffffffd3]" />
                </button>
              </div>
              <div className="mt-3">
                <FormGoal
                  form={form}
                  onChange={handleChange}
                  onClick={() => {
                    !setShowModal(), handleAdd();
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Goals;
