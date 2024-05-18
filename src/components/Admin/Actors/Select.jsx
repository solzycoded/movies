import { useEffect, useState } from "react";
import Select from "../Input/Select";
import FetchRequest from "../../../assets/js/request/fetch";
import PropTypes from "prop-types";

function SelectActor({ selectedActors }){
    const [actors, setActors] = useState([]);

    let selectedOptions = [];

    useEffect(() => {
        // Function to run when the component loads
        allActors();
        getSelectedActors();
    }, []); // Empty dependency selectedOptionsay ensures it runs only once on mount

    const allActors = () => {
        const success = (data) => {
            setActors(data);
        }

        const failure = (data) => {
            setActors(data);
        }

        (new FetchRequest("GET", "actors")).send(success, failure);
    }

    const getSelectedActors = () => {
        if(selectedActors){
            selectedActors.forEach(item => {
                selectedOptions.push(item.actor._id);
            });
        }
    }

    return (
        <>
            <Select id="actor" title="Select Actor(s)" selectedDefault="Select a actor" options={actors} selectedOptions={selectedOptions} />
        </>
    )
}

SelectActor.propTypes = {
    selectedActors: PropTypes.array
}

export default SelectActor;