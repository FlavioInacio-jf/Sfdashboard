import { FC, ReactElement } from 'react';
interface StatisticItemProps {
  title: string;
  value: number;
  icon: ReactElement;
}

export const StatisticItem: FC<StatisticItemProps> = ({ title, icon, value }) => {
  return (
    <li className="flex justify-start items-center mb-[1.6rem] last:mb-0 even:bg-[#3d3d3d] p-[1.6rem] rounded-xl">
      <span className="flex items-center justify-center flex-0 text-[3.6rem] bg-[#1F1F1F] p-[0.8rem] rounded-lg mr-[1.6rem]">
        {icon}
      </span>
      <div className="flex-1 flex justify-between text-[1.2rem]">
        <span className="text-[1.6rem] text-white font-semibold">{title}</span>
        <span className="text-white">{value}</span>
      </div>
    </li>
  );
};
