import React, { useState } from 'react';
import Slider from '../../components/Slider/Slider';
import Dropdown from '../../components/InputFields/Dropdown';
import Button from '../../components/Button/Button';
import { periods, interestRates } from '../../assets/data';
import './LoanCalculator.css';

export default () => {
    const [amount, setAmount] = useState(32000);
    const [period, setPeriod] = useState(periods[0].value);
    const [interestRate, setInterestRate] = useState(interestRates[0].value);

    const getMonthlyPayment = () => {
        const monthlyInterestRatePercentage = interestRate / 12 / 100;

        return Math.round(
            amount * monthlyInterestRatePercentage / (1 - Math.pow(1 + monthlyInterestRatePercentage, period * -12))
        );
    };

    return (
        <form name="loan" className="loanForm">
            <div className="loanForm__fields">
                <div>
                    <Slider
                        name="amount" label="Loan size"
                        min="32000" max="320000" step={1000}
                        onChange={(value) => setAmount(value)}
                    />
                    <Dropdown
                        name="period" label="Period" options={periods}
                        onChange={(value) => setPeriod(value)}
                    />
                    <Dropdown
                        name="interestRate" label="Interest" options={interestRates}
                        onChange={(value) => setInterestRate(value)}
                    />
                </div>
            </div>

            <div className="loanForm__submit">
                <div className="loanForm__total" >
                    <span>Monthly payment</span>
                    <span>
                        <span className="color-primary font-size-lg">
                            {getMonthlyPayment()}
                        </span>
                        <span> EUR</span>
                    </span>
                </div>

                <div className="float-right">
                    <Button type="submit" color="primary">Apply</Button>
                </div>
            </div>
        </form>
    );
};
