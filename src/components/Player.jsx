import {useState} from "react";

export default function Player() {
    const [nameInputValue, setNameInputValue] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleNameInputChange = (event) => {
        setButtonClicked(false);
        setNameInputValue(event.target.value);
    }
    const handleButtonClick = () => {
        setButtonClicked(true);
    }
    return (
        <section id="player">
            <h2>Welcome {buttonClicked ? nameInputValue : "unknown entity"} </h2>
            <p>
                <input type="text" onChange={handleNameInputChange} value={nameInputValue}/>
                <button onClick={handleButtonClick}>Set Name</button>
            </p>
        </section>
    );
}
