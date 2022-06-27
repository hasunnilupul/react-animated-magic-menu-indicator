import React, {useRef} from 'react';

import NavItem from "./components/NavItem";
import './App.scss';

function App() {
    const mainElement = useRef(null);

    const handleMouseHover = (color) => mainElement.current.style.backgroundColor = color;

    return (<main ref={mainElement} className="flex justify-center items-center min-h-screen w-screen bg-yellow-500">
        <div className="navigation">
            <ul>
                <NavItem link="#home" title="Home"
                         icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                                    fill="currentColor">
                             <path
                                 d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                         </svg>} hoverBgClass="pink-500" hoverBgColor="rgb(236, 72, 153)" onHover={handleMouseHover}/>

                <NavItem link="#profile" title="Profile"
                         icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                                    fill="currentColor">
                             <path fillRule="evenodd"
                                   d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                   clipRule="evenodd"/>
                         </svg>} hoverBgClass="indigo-500" hoverBgColor="rgb(99, 102, 241)" onHover={handleMouseHover}/>

                <NavItem link="#message" title="Message"
                         icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                                    fill="currentColor">
                             <path fillRule="evenodd"
                                   d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                   clipRule="evenodd"/>
                         </svg>}
                         hoverBgClass="emerald-500" hoverBgColor="rgb(16, 185, 129)" onHover={handleMouseHover}/>

                <NavItem link="#help" title="Help"
                         icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                                    fill="currentColor">
                             <path fillRule="evenodd"
                                   d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                   clipRule="evenodd"/>
                         </svg>}
                         hoverBgClass="sky-500" hoverBgColor="rgb(14, 165, 233)" onHover={handleMouseHover}/>

                <NavItem className="nav-link hover:bg-yellow-400" link="#settings" title="Settings"
                         icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                                    fill="currentColor">
                             <path fillRule="evenodd"
                                   d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                   clipRule="evenodd"/>
                         </svg>}
                         hoverBgClass="yellow-400" hoverBgColor="rgb(250, 204, 21)" onHover={handleMouseHover}/>
            </ul>
        </div>
    </main>);
}

export default App;
