import { useEffect, useState } from "react";
import Select from "../Input/Select";
import FetchRequest from "../../../assets/js/request/fetch";

function SelectCategory(){
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Function to run when the component loads
        allCategories();
    }, []); // Empty dependency array ensures it runs only once on mount

    const allCategories = () => {
        const success = (data) => {
            setCategories(data);
        }

        const failure = (data) => {
            setCategories(data);
        }

        (new FetchRequest("GET", "categories")).send(success, failure);
    }

    return (
        <>
            <Select id="category" title="Select Categories" selectedDefault="Select a category" options={categories} />
        </>
    )
}

export default SelectCategory;