import { FC } from 'react';
import { FcAssistant, FcBearish, FcBullish, FcBusinessman } from 'react-icons/fc';
import { StatisticItem } from './StatisticItem';
export const Profile: FC = () => {
  return (
    <div className="flex-1 bg-[#242424] p-[3.2rem]">
      <header className="flex">
        <div className="flex">
          <span className="flex items-center justify-center w-[6rem] h-[6rem] text-[3.2rem] bg-[#1F1F1F] text-white rounded-lg">
            <FcAssistant />
          </span>
          <span className="flex flex-col ml-[1.6rem]">
            <span className="block text-[2rem] font-semibold text-white mb-[0.8rem]">Nome</span>
            <span className="text-[1.4rem] font-medium text-green-600">Role</span>
          </span>
        </div>
      </header>
      <div className="border-b border-[#5f5f5f] my-[3.2rem]" />
      <div>
        <header className="flex justify-between items-center">
          <h3 className="text-white font-bold text-[2rem] mb-[3.2rem]">Minhas estatisticas</h3>
        </header>
        <ul className="flex flex-col">
          <StatisticItem icon={<FcBullish />} title="Minhas vendas" value={200} />
          <StatisticItem icon={<FcBearish />} title="Minhas Devoluções" value={200} />
          <StatisticItem icon={<FcBusinessman />} title="Cadastro de clientes" value={200} />
        </ul>
      </div>
    </div>
  );
};
