import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const FilterPage = () => {
    const cars = localStorage.getItem('cars') ? JSON.parse(localStorage.getItem('cars')) : [];
    const [filteredCar, setFilteredCar] = useState([]);
    const [year, setYear] = useState(0);
    const [mile, setMile] = useState(0);

    const navigate = useNavigate();

    const handleClick = () => {
        const filtercar = cars.filter((car) => {
            return parseInt(car.year) >= parseInt(year) && parseInt(car.mile) <= parseInt(mile);
        });
        setFilteredCar(filtercar);
        localStorage.setItem('filteredCar', JSON.stringify(filtercar));
        navigate('/result');
    };
    return (
        <div>
            <h1>Filter DATA</h1>
            <input
                type='text'
                name='year'
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder='year'
            />
            <br />
            <br />
            <input
                type='text'
                name='mile'
                value={mile}
                onChange={(e) => setMile(e.target.value)}
                placeholder='mile'
            />
            <br />
            <br />
            <button onClick={handleClick}>Filter</button>
        </div>
    );
};

export default FilterPage;
