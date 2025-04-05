import Presentation from "../Presentation/Presentation";
import React from 'react'
import { NavLink } from "react-router-dom";

const Navigation = ({props}) => {
    // Destructuring props
    // const { Menu_1, Menu_2, Menu_3 } = props;
    
    return (
        <> 
        <nav>
            <div className='nav-list'>
                <ul>
                    {props.items.map((item, index) => <NavLink to={item.link} key={index}> {item.title} </NavLink> )}
                    {/* <li>
                        <a href="#">{props.Menu_1}</a>
                    </li> */}
                </ul>
            </div>
        </nav>
        </>
    );
};

export default Navigation