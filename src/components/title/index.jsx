const Title = ({ title, subtitle }) => {
  return (
    <div>
      <h3 className="text-[1.5rem] font-[600] capitalize">{title}</h3>
      <p className="text-[#8FADCC] mt-1">{subtitle}</p>
    </div>
  );
};

export default Title;
