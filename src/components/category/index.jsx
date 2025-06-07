const Category = ({ icon, category, total }) => {
  return (
    <>
      <>
        <div className="flex items-center gap-2">
          {icon}
          <p className="text-[#D8D8D8]">{category}</p>
        </div>
        <div>
          <span className="text-[#8FADCC] font-[600]">{total}</span>
        </div>
      </>
    </>
  );
};

export default Category;
