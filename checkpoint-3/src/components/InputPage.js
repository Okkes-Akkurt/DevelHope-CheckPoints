import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const InputPage = () => {
    const [cars, setCars] = useState([]);
    const [inputValue, setInputValue] = useState({
        model: '',
        year: '',
        mile: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputValue({
            [e.target.name]: e.target.value,
        });
    };

    const handleClick = () => {
        setCars({...cars, inputValue});
        localStorage.setItem('cars', JSON.stringify(cars));
        alert('Added new car.');
        setInputValue({
            model: '',
            year: '',
            mile: '',
        });
    };

    return (
        <div>
            <h1>ENTER DATA</h1>
            <input
                type='text'
                name='model'
                value={inputValue.model}
                onChange={handleChange}
                placeholder='model'
            />
            <br />
            <br />
            <input
                type='text'
                name='year'
                value={inputValue.year}
                onChange={handleChange}
                placeholder='year'
            />
            <br />
            <br />
            <input
                type='text'
                name='mile'
                value={inputValue.mile}
                onChange={handleChange}
                placeholder='mile'
            />
            <br />
            <br />
            <button onClick={handleClick}>ADD</button>
            <br />
            <br />
            <button onClick={() => navigate('/filter')}>Go Filter Page</button>
        </div>
    );
};

export default InputPage;
