import React,{useState} from 'react'


export const AddCategory = ({setCategories}) => {

const [inputValue, setInputValue] = useState('');

const handleInputChange = (e) => {
     setInputValue(e.target.value);
}

const handleSubmit = (e) => {
e.preventDefault();
 
if(inputValue.trim().length >2){
    setCategories(date => [inputValue,...date]);
    setInputValue('');
}
 
}
console.log(inputValue);
    return (
        <>
            <h2>Categories Add</h2>

            <form  onSubmit={handleSubmit}>
            <input  type="text" 
            value={inputValue}
            onChange={handleInputChange} 
             />
            </form>
        </>
    )
}

