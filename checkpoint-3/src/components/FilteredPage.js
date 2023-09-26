import React from 'react'

const FilteredPage = () => {
const filteredCar = localStorage.getItem('filteredCar')
    ? JSON.parse(localStorage.getItem('filteredCar'))
    : [];
    return <div>{filteredCar.map((car, i) => {
        <div key={i}>
            <div>Model: {car.year}</div>
            <div>Model: {car.mile}</div>
        </div>;
  })}</div>;
}

export default FilteredPage