import { useState, useEffect } from "react";
import ButtonAdd from "../components/buttons/buttonAdd";
import SideBar from "../components/sideBar";
import Title from "../components/title";
import { IoClose } from "react-icons/io5";
import FormGoal from "../components/forms/formGoal";
import GoalsCard from "../components/cards/goalsCard";

const getEntriesFromStorage = () => {
  const savedEntries = localStorage.getItem("entries");
  return savedEntries ? JSON.parse(savedEntries) : [];
};

const saveEntriesToStorage = (entries) => {
  localStorage.setItem("entries", JSON.stringify(entries));
};

const Goals = () => {
  const [form, setForm] = useState({
    purpose: "",
    value: "",
    description: "",
  });
  const [entries, setEntries] = useState(getEntriesFromStorage);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    saveEntriesToStorage(entries);
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

  const handleDeleteGoal = (index) => {
    setEntries((old) => old.filter((_, i) => i !== index));
  };

  const renderGoalCard = (goal, index) => (
    <GoalsCard
      index={index}
      goal={goal}
      handleCompleteGoal={handleCompleteGoal}
      handleDeleteGoal={handleDeleteGoal}
      handleResetTarget={handleResetTarget}
    />
  );

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
            {entries.length > 0 && entries.map(renderGoalCard)}
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
