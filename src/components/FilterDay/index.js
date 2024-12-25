import './FilterDay.scss';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function FilterDay({ onFilter, onReset }) {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const handleFilterClick = () => {
        onFilter(fromDate, toDate);
    };

    const handleResetClick = () => {
        setFromDate('');
        setToDate('');
        onReset();
    };

    return (
        <div className="filter">
            <h3>Bộ lọc</h3>
            <div className="filter__item">
                <p>Từ ngày: </p>
                <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
            </div>
            <div className="filter__item">
                <p>Đến ngày: </p>
                <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
            </div>
            {/* <Button className="filter__btn" variant="primary" onClick={handleResetClick}>
                Cài lại
            </Button>
            <Button className="filter__btn" variant="primary" onClick={handleFilterClick}>
                Lọc
            </Button> */}
            <button className="btn btn-sm bg-primary-light filter__btn" onClick={handleResetClick}>
                Cài lại
            </button>
            <button className="btn btn-sm bg-primary-light filter__btn" onClick={handleFilterClick}>
                Lọc
            </button>
        </div>
    );
}

export default FilterDay;
