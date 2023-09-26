import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const FilterPage = () => {
    const cars = localStorage.getItem("cars") ? JSON.parse(localStorage.getItem("cars")) : [];
    const [filteredCar, setFilteredCar] = useState([]);
    const [inputValue, setInputValue] = useState({
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
        const filtercar = cars.filter(car => {
            if (inputValue.year && car.year !== inputValue.year.includes(car.year)) {
                return false;
            } else {
                const filteryear = Number(car.year).sort((a, b) => a - b)
                if (Number(car.year) > Number(inputValue.year)) {
                    setFilteredCar(filteryear);
                }
            }
            if (inputValue.mile && car.mile !== inputValue.mile.includes(car.mile)) {
                return false;
            } else {
                const filteryear = Number(car.mile).sort((a, b) => a - b);
                if (Number(car.mile) < Number(inputValue.mile)) {
                    setFilteredCar(filteryear);
                }
            } ;
            return true

        })
        localStorage.setItem('filteredCar', JSON.stringify(filteredCar));
        navigate('/result');
    };
    return (
        <div>
            <h1>Filter DATA</h1>
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
        </div>
    );
};

export default FilterPage;
