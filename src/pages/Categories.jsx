import { useState, useEffect } from "react"
import FetchRequest from "../assets/js/request/fetch"
import CategorySection from "../components/Categories/Section";
import BreadCrumb from "../components/Breadcrumb/Section";

function Categories(){
    const [categories, setCategories] = useState([]);
    const currentUrl                  = window.location.href;

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
            <BreadCrumb currentUrl={ currentUrl } />
            <section>
                {
                    categories.map((category, i) => {
                        return <CategorySection category={ category } currentUrl={ currentUrl } key={ i } />
                    })
                }
            </section>
        </>
    )
}

export default Categories;