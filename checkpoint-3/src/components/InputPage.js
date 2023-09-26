import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const InputPage = () => {
    const [cars, setCars] = useState([]);
    const [model, setModel] = useState('');
    const [year, setYear] = useState(0);
    const [mile, setMile] = useState(0);
    const [inputValue, setInputValue] = useState({
        model: '',
        year: '',
        mile: '',
    });

    const navigate = useNavigate();

    const handleClick = () => {
        const carList = [...cars, {model: model, year: year, mile: mile}];
        setCars(carList);
        console.log({model: model, year: year, mile: mile});
        localStorage.setItem('cars', JSON.stringify(carList));
        alert('Added new car.');
        setModel('');
        setYear(0)
        setMile(0);
    };

    return (
        <div>
            <h1>ENTER DATA</h1>
            <input
                type='text'
                name='model'
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder='model'
            />
            <br />
            <br />
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
            <button onClick={handleClick}>ADD</button>
            <br />
            <br />
            <button onClick={() => navigate('/filter')}>Go Filter Page</button>
        </div>
    );
};

export default InputPage;
