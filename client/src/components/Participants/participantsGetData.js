import React, {useState} from "react";
import axios from "axios";
import { getParticipants } from "../../store/types";
import { useDispatch } from "react-redux";
import App from "./participantsPage";



const ParticipantsGetData = () => {

    const dispath = useDispatch();

    const [dataIsReady, setData] = useState(false);

    axios.get('users/getParticipants')
        .then(res => {

            const participantsArray = res.data;
            dispath(getParticipants(participantsArray))
            setData(true)

        })
        .catch(err => {

            console.log(err);

        });

    return (
        dataIsReady && <App/>
    )

}

export default ParticipantsGetData