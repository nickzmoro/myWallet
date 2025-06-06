import { FaTrashAlt } from "react-icons/fa";

const TransactionHistory = ({
  savedTransactions,
  hasBackground,
  hasPadding,
  hasBorder,
  onDelete,
  hasButtonDelete,
}) => {
  return (
    <div className="w-full mt-5">
      <table className="w-[97%] h-full text-left">
        <tr className={`rounded-[8px] ${hasBackground && "bg-[#21364A]"}`}>
          <th
            className={`p-3 border-b border-[#626262ad] text-[#ffffffe7] font-[600] uppercase ${
              hasPadding && "pl-8"
            } ${
              hasBorder
                ? "border border-[#62626291]"
                : "border-b border-[#626262ad]"
            }`}
          >
            Descrição
          </th>
          <th
            className={`p-3 border-b border-[#626262ad] text-[#ffffffe7] font-[600] uppercase ${
              hasBorder
                ? "border border-[#62626291]"
                : "border-b border-[#626262ad]"
            }`}
          >
            Tipo
          </th>
          <th
            className={`p-3 border-b border-[#626262ad] text-[#ffffffe7] font-[600] uppercase ${
              hasBorder
                ? "border border-[#62626291]"
                : "border-b border-[#626262ad]"
            }`}
          >
            Categoria
          </th>
          <th
            className={`p-3 border-b border-[#626262ad] text-[#ffffffe7] font-[600] uppercase ${
              hasBorder
                ? "border border-[#62626291]"
                : "border-b border-[#626262ad]"
            }`}
          >
            Data
          </th>
          <th
            className={`text-right p-3 border-b border-[#626262ad] text-[#ffffffe7] font-[600] uppercase ${
              hasPadding && "pr-8"
            } ${
              hasBorder
                ? "border border-[#62626291]"
                : "border-b border-[#626262ad]"
            }`}
          >
            Valor
          </th>
        </tr>
        {savedTransactions.map((transaction, index) => (
          <tr key={index} className="relative">
            <td
              className={`p-2.5 text-[rgba(256,_256,_256,_0.9)] ${
                hasPadding && "pl-8"
              } ${hasBorder && "border border-[#62626291]"}`}
            >
              {transaction.description}
            </td>
            <td
              className={`p-2.5 text-[rgba(256,_256,_256,_0.9)] ${
                hasBorder && "border border-[#62626291]"
              }`}
            >
              {transaction.typeOfTransaction}
            </td>
            <td
              className={`p-2.5 text-[rgba(256,_256,_256,_0.9)] ${
                hasBorder && "border border-[#62626291]"
              }`}
            >
              {transaction.category}
            </td>
            <td
              className={`p-2.5 text-[rgba(256,_256,_256,_0.9)] ${
                hasBorder && "border border-[#62626291]"
              }`}
            >
              {transaction.date}
            </td>
            <td
              className={`text-right font-[600] p-2.5 ${
                transaction.typeOfTransaction === "Entrada"
                  ? "text-[#3BFF88]"
                  : "text-[#FA6138]"
              } ${hasPadding && "pr-8"} ${
                hasBorder && "border border-[#62626291]"
              }`}
            >
              {transaction.typeOfTransaction === "Entrada" ? "+" : "-"}{" "}
              {transaction.value.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </td>
            {hasButtonDelete && (
              <button
                onClick={() => onDelete(index)}
                className="bg-red-500 p-2.5 cursor-pointer rounded-[5px] absolute top-[5px] right-[-50px] hover:bg-red-600 transition-all duration-200"
              >
                <FaTrashAlt />
              </button>
            )}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TransactionHistory;
