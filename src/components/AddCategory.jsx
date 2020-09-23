import React, {useState} from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');//inicia como string vacío. Debemos asignarle un valor inicial, si no ponemos nada, es undefined.

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    //el prevent default previene la función por defecto del formulario. Es decir que ya no es necesario refrescar la página para que cambie
    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2) {
            setCategories( cats => [ inputValue, ...cats]);
            setInputValue('');
        }

        // console.log('Submit hecho')
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
               type= "text"
               value={ inputValue}
               onChange={ handleInputChange }
            />
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory