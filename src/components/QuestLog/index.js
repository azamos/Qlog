import React,{useState} from "react";
import Quest from "../Quest";

const quest1 = {
    'src':'frontend.png',
    'name':'Candy of the eyes',
    'shortDsctpn':'Create the frontend for the app',
    'difficulty':'Ultimate',
    
};
const quest2 = {
    'src':'server.png',
    'name':'The unsung heroes',
    'shortDsctpn':'Create the frontend for the app',
    'difficulty':'Ultimate'
};

const QuestLog = () => {
    const [questsList,updateQuestsList] = useState([quest1,quest2]);
    return (
        <div className="QuestLog">
            {questsList && questsList.map(q=><Quest name={q.name} shortDsctpn={q.shortDsctpn} difficulty={q.difficulty} src={q.src} />)}
        </div>
    );
};

export default QuestLog;