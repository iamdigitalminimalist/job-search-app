import { links } from '../../utils/links';
import { NavLink } from 'react-router-dom';
import { MouseEventHandler } from 'react';

/* eslint-disable-next-line */
export interface NavLinksProps {
  toggleSidebar?:
    | MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    | undefined;
}

export const NavLinks = (props: NavLinksProps) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        return (
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            key={link.id}
            onClick={props.toggleSidebar}
          >
            <span className="icon">
              <link.icon />
            </span>
            {link.text}
          </NavLink>
        );
      })}
    </div>
  );
};
