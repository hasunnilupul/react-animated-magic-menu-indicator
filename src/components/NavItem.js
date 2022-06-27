import React from 'react';

import './NavItem.scss';

const NavItem = ({link, title, icon, hoverBgClass, hoverBgColor, onHover}) => {
    return (
        <>
            <li className={`nav-link hover:bg-${hoverBgClass}`}
                onMouseOver={()=>onHover(hoverBgColor)}>
                <a href={link}>
                    <span className="title">{title}</span>
                    <span className="icon">{icon}</span>
                </a>
            </li>
        </>
    );
};

export default NavItem;
