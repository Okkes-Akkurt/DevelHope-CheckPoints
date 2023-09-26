import React from 'react';

const FilteredPage = () => {
    const filteredCar = localStorage.getItem('filteredCar')
        ? JSON.parse(localStorage.getItem('filteredCar'))
        : [];

    return (
        <div>
            {filteredCar.map((car, i) => (
                <ul key={i}>
                    <li>Model: {car.model}</li>
                    <li>Year: {car.year}</li>
                    <li>Mile: {car.mile}</li>
                </ul>
            ))}
        </div>
    );
};

export default FilteredPage;
