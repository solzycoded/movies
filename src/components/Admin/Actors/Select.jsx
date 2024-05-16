import { useEffect, useState } from "react";
import Select from "../Input/Select";
import FetchRequest from "../../../assets/js/request/fetch";

function SelectActor(){
    const [actors, setActors] = useState([]);

    useEffect(() => {
        // Function to run when the component loads
        allActors();
    }, []); // Empty dependency array ensures it runs only once on mount

    const allActors = () => {
        const success = (data) => {
            setActors(data);
        }

        const failure = (data) => {
            setActors(data);
        }

        (new FetchRequest("GET", "actors")).send(success, failure);
    }

    return (
        <>
            <Select id="actor" title="Select Actor" selectedDefault="Select a actor" options={actors} />
        </>
    )
}

export default SelectActor;