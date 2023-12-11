import '../components/ToggleButton.css'
import { useRef } from "react";

const ToggleButon=({buttonClick})=>{
    const butRef = useRef();

	const handleClick = () => {
		butRef.current.classList.toggle("movebutton");
        buttonClick();
	};

    return (
        <div>
            <div className="space" onClick={handleClick} >
                <div ref={butRef} className="button">
                </div>
            </div>
        </div>
    )
}

export default ToggleButon