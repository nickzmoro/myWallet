const Category = ({ icon, type, amount }) => {
  const amountFormated = amount.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-[#D8D8D8]">{type}</p>
      </div>
      <div>
        <span className="text-[#8FADCC] font-[600]">{amountFormated}</span>
      </div>
    </>
  );
};

export default Category;
