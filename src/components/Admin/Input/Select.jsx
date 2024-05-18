import PropTypes from "prop-types"
import { useEffect, useState } from "react"

function Select({ id, title, options, selectedDefault, selectedOptions }){
    const [selectValue, setSelectValue] = useState([]);

    useEffect(() => {
        // Function to run when the component loads
        setSelectValue(selectedOptions);
    }, []); // Empty dependency array ensures it runs only once on mount

    const appendSelectValue = (event) => {
        let selectedOptions = Array.from(event.target.selectedOptions).map(option => option.value);

        setSelectValue(selectedOptions);
    }

    return (
        <>
            <div className="form-group mb-3">
                <label htmlFor={id} className="mb-1">{ title }</label>
                <select className="form-select" id={id} multiple value={selectValue} onChange={appendSelectValue}>
                    {
                        selectedDefault && (<option disabled value="">{ selectedDefault }</option>)
                    }
                    {
                        options.map((option, i) => {
                            return <option key={ i } value={ option.id }>{ option.name }</option>
                        })
                    }
                </select>
            </div>
        </>
    )
}

Select.propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    selectedDefault: PropTypes.string,
    selectedOptions: PropTypes.array
}

export default Select;