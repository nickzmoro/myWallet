import { BiSolidWallet } from "react-icons/bi";
import { FaHouse } from "react-icons/fa6";
import { RiFilePaper2Fill } from "react-icons/ri";
import { HiMiniTrophy } from "react-icons/hi2";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="group w-[80px] fixed top-0 left-0 h-screen flex backdrop-blur-[5px] border-r border-gray-800 hover:w-[250px] transition-all duration-300 p-5 overflow-hidden z-50">
      <div className="w-full h-full flex flex-col items-start justify-between">
        <div className="flex gap-2 items-center">
          <BiSolidWallet className="h-9 text-[#8FADCC]" size={28} />
          <p className="group-hover:block hidden text-[1.1rem] font-[600]">
            MyWallet
          </p>
        </div>
        <div className="flex flex-col justify-center gap-2 w-[200px]">
          <div>
            <button
              className={`flex gap-3 items-center cursor-pointer w-full px-2 h-10 rounded-[8px] transition-all duration-200 ${
                currentPath === "/"
                  ? "bg-[#223649] font-[500]"
                  : "hover:bg-[#2236497e]"
              }`}
              onClick={() => navigate("/")}
            >
              <FaHouse className="h-9 text-[#CDCDCD]" size={28} />
              <p className="group-hover:block hidden">Início</p>
            </button>
          </div>
          <div>
            <button
              className={`flex gap-3 items-center cursor-pointer w-full px-2 h-10 rounded-[8px] transition-all duration-200 ${
                currentPath === "/transacoes"
                  ? "bg-[#223649] font-[500]"
                  : "hover:bg-[#2236497e]"
              }`}
              onClick={() => navigate("/transacoes")}
            >
              <RiFilePaper2Fill className="h-9 text-[#CDCDCD]" size={28} />
              <p className="group-hover:block hidden">Transações</p>
            </button>
          </div>
          <div>
            <button
              className={`flex gap-3 items-center cursor-pointer w-full px-2 h-10 rounded-[8px] transition-all duration-200 ${
                currentPath === "/metas"
                  ? "bg-[#223649] font-[500]"
                  : "hover:bg-[#2236497e]"
              }`}
              onClick={() => navigate("/metas")}
            >
              <HiMiniTrophy className="h-9 text-[#CDCDCD]" size={28} />
              <p className="group-hover:block hidden">Metas</p>
            </button>
          </div>
          <div>
            <button
              className={`flex gap-3 items-center cursor-pointer w-full px-2 h-10 rounded-[8px] transition-all duration-200 ${
                currentPath === "/relatorios"
                  ? "bg-[#223649] font-[500]"
                  : "hover:bg-[#2236497e]"
              }`}
              onClick={() => navigate("/relatorios")}
            >
              <BiSolidBarChartAlt2 className="h-9 text-[#CDCDCD]" size={28} />
              <p className="group-hover:block hidden">Relatórios</p>
            </button>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <TbLogout className="h-9 text-[#fdb29d] cursor-pointer" size={28} />
          <p className="group-hover:block hidden text-[#fdb29d] font-[500]">
            Sair
          </p>
        </div>
      </div>
    </header>
  );
};

export default SideBar;
