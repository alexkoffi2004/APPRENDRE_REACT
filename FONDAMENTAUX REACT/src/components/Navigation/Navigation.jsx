import Presentation from "../Presentation/Presentation";

const Navigation = ({props}) => {
    // Destructuring props
    // const { Menu_1, Menu_2, Menu_3 } = props;
    
    return (
        <> 
        <nav>
            <div className='nav-list'>
                <ul>
                    <li>
                        <a href="#">{props.Menu_1}</a>
                    </li>
                    {/* <li>
                        <a href="#">{props.Menu_2} </a>
                    </li>
                    <li>
                        <a href="#"> {props.Menu_3} </a>
                    </li> */}
                </ul>
            </div>
        </nav>
        </>
    );
};

export default Navigation