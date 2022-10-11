import { default as Link, default as NextLink } from 'next/link';
import Router, { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
import { FC, useCallback } from 'react';
import { BsBoxArrowRight } from 'react-icons/bs';
import { FaChartBar } from 'react-icons/fa';
import { LogoutMutation } from '../../../../mutations';
import { routes } from './routes';

export const signOut = () => {
  destroyCookie(undefined, 'SFDashboard.auth.token', { path: '/' });
  destroyCookie(undefined, 'SFDashboard.auth.refreshToken', { path: '/' });

  Router.push('/');
};

export const Sidebar: FC = () => {
  const { pathname } = useRouter();
  const { mutate: logoutMutate } = LogoutMutation();

  const isCurrentPage = useCallback(
    (page: string) => {
      return pathname === page;
    },
    [pathname]
  );
  const handleLogout = () => {
    logoutMutate();
  };
  return (
    <aside className="bg-[#242424] w-[9rem]">
      <nav className="flex flex-col h-full">
        <NextLink href="/">
          <a className="flex justify-center my-[3.2rem] text-[4.8rem] text-[#337CFF]">
            <FaChartBar />
          </a>
        </NextLink>

        <ul className="flex-1 h-full flex flex-col px-[1.6rem] mt-[4.8rem]">
          {routes.map(({ label, icon, href }) => {
            return (
              <li key={label} className="w-full mb-[1.6rem] last:mb-0">
                <Link href={href}>
                  <a
                    href={href}
                    className={` p-[1.2rem] flex justify-center text-center text-[2.4rem] rounded-xl ${
                      isCurrentPage(href)
                        ? 'bg-[#337CFF] text-white '
                        : 'bg-transparent text-[#c7c7c7] '
                    }`}>
                    {icon}
                    <span className="sr-only">{label}</span>
                  </a>
                </Link>
              </li>
            );
          })}

          <li className="mt-auto justify-end pb-[3.2rem]" onClick={handleLogout}>
            <a className="flex justify-center text-center text-[2.4rem] text-[#c7c7c7]">
              <BsBoxArrowRight />
              <span className="sr-only">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
