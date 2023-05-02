import React from "react";
import QuestLogo from '../../questlog.png';

const Quest = props => {
    return (
        <div className="Quest">
            <div className="FlexRow">
                <img src ={require(`./${props.src}`)} width={"100px"} alt="<Missing Icon>"/>
                <div>
                    <p><h1>{props.name}</h1></p>
                    <p><h2>{props.shortDsctpn}</h2></p>
                    <h3>{props.difficulty}</h3>
                </div>
                <img src={QuestLogo} className="Logo Right" alt="Quest Logo"/>
            </div>
        </div>
    );
};

export default Quest;