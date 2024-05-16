import PropTypes from "prop-types"
import { useState } from "react"

function Select({ id, title, options, selectedDefault }){
    const [selectValue, setSelectValue] = useState([]);

    const appendSelectValue = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions).map(option => option.value);

        setSelectValue(selectedOptions);
    }

    return (
        <>
            <div className="form-group mb-3">
                <label htmlFor={id}>{ title }</label>
                <select className="form-select" id={id} multiple  value={selectValue} onChange={appendSelectValue}>
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
}

export default Select;