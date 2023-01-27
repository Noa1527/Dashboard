import React, { useContext } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import { MdOutlineWidgets } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { UidContext } from '../Hook/AppContext';

const Sidebar = () => {
   
    const uid = useContext(UidContext);
    
    return (
        <div className="sidebar-content">
            <div className="header">
                <h1>MENUS</h1>
            </div>

            {uid
                ?
                <>
                    <div className="profile">
                        <p className='name'>noa</p>
                        <p className='email'>noa@gmail.com</p>
                    </div>
                    <div className="menu">
                        <ul>
                            <li>
                                <MdOutlineWidgets />
                                <NavLink to={'/widget'}>list des widget</NavLink>
                            </li>
                            <li>
                                <FaUserCircle />
                                <NavLink to={'/user'}>profile</NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </>
                :
null
            }

        </div >
    );
};

export default Sidebar;