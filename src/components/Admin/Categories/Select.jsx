import { useEffect, useState } from "react";
import Select from "../Input/Select";
import FetchRequest from "../../../assets/js/request/fetch";
import PropTypes from "prop-types";

function SelectCategory({ selectedCategories }){
    const [categories, setCategories] = useState([]);

    let selectedOptions = [];

    useEffect(() => {
        // Function to run when the component loads
        allCategories();
        getSelectedCategories();
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

    const getSelectedCategories = () => {
        if(selectedCategories){
            selectedCategories.forEach(item => {
                selectedOptions.push(item.category._id);
            });
        }
    }

    return (
        <>
            <Select id="category" title="Select Categories" selectedDefault="Select a category" options={categories} selectedOptions={selectedOptions} />
        </>
    )
}

SelectCategory.propTypes = {
    selectedCategories: PropTypes.array
}

export default SelectCategory;