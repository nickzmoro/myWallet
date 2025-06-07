const BalanceOverview = ({
  title,
  info,
  icon,
  balanceColor,
  infoColor,
  amount,
}) => {
  return (
    <div className="w-full border border-[#304D69] rounded-[8px] p-4 flex flex-col">
      <div className="flex items-center justify-between">
        <p className="text-[#8FADCC] font-[500]">{title}</p>
        {icon}
      </div>
      <div className="my-1">
        <span className={`text-[1.8rem] font-[700] ${balanceColor}`}>
          {amount}
        </span>
      </div>
      <div>
        <p className={`text-[0.9rem] ${infoColor}`}>{info}</p>
      </div>
    </div>
  );
};

export default BalanceOverview;
