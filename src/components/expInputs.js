import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from "baseui/datepicker";

const ExpInputs = ({ idx, expState, handleExpChange, removeExpFromList }) => {
    const expId = `name-${idx}`;
    const ageId = `age-${idx}`;
    const companyId = `company-${idx}`;
    const roleId = `role-${idx}`;
    const startDateId = `sdate-${idx}`;
    const endDateId = `edate-${idx}`;
    return (
        <div key={`exp-${idx}`}>
            <label htmlFor={companyId}>Company Name</label>
            <input
                type="text"
                name={companyId}
                data-idx={idx}
                id={companyId}
                className="company"
                value={expState[idx].company}
                onChange={handleExpChange}
            />
            <label htmlFor={ageId}>Role</label>
            <input
                type="text"
                name={roleId}
                data-idx={idx}
                id={roleId}
                className="role"
                value={expState[idx].role}
                onChange={handleExpChange}
            />
            <label htmlFor={startDateId}>Start Date</label>
            <input
                type="date"
                name={startDateId}
                data-idx={idx}
                id={startDateId}
                className="startDate"
                value={expState[idx].startDate}
                onChange={handleExpChange}
            />
            <label htmlFor={endDateId}>End Date</label>
            <input
                type="date"
                name={endDateId}
                data-idx={idx}
                id={endDateId}
                className="endDate"
                value={expState[idx].endDate}
                onChange={handleExpChange}
            />
            <input
                type="button"
                value="Remove"
                onClick={removeExpFromList}
                
            />
        </div>
    );
};

ExpInputs.propTypes = {
    idx: PropTypes.number,
    expState: PropTypes.array,
    handleExpChange: PropTypes.func,
};

export default ExpInputs;