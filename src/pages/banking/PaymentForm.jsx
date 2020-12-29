import React, { useState } from 'react';
import Dropdown from '../../components/InputFields/Dropdown';
import InputField from '../../components/InputFields/InputField';
import Button from '../../components/Button/Button';
import { accounts, savedPayments, currencies } from '../../assets/data';
import { isMobile } from '../../helpers';

export default () => {
    const [account, setAccount] = useState(accounts[0]);
    const [saved, setSaved] = useState(savedPayments[0].value);
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState(currencies[0].value);
    const [errors, setErrors] = useState({});

    const validate = () => {
        if (isNaN(amount)) {
            setErrors({...errors, amount: 'Amount accepts only numbers' });
        }

        return Object.keys(errors).length === 0;
    };

    const handlePayment = (ev) => {
        ev.preventDefault();
        setErrors({});
        validate();
    };

    return (
        <form name="payment" onSubmit={handlePayment}>
            <div style={{ maxWidth: 450, margin: '0 auto' }}>
                <Dropdown
                    name="account" label="Account" options={accounts}
                    onChange={(value) => setAccount(value)}
                />
                <Dropdown
                    name="saved" label="Saved payments" options={savedPayments}
                    onChange={(value) => setSaved(value)}
                />
                <div style={{ display: 'flex', flexDirection: isMobile() ? 'column' : 'row' }}>
                    <div className={isMobile() ? null : 'mr-2'} style={{ flex: 1 }}>
                        <InputField
                            name="amount" label="Amount"
                            onChange={(value) => setAmount(value)}
                            error={errors.amount}
                        />
                    </div>
                    <div>
                        <Dropdown name="currency" options={currencies} onChange={(value) => setCurrency(value)} />
                    </div>
                </div>
            </div>

            <div className="desktop-float-right">
                <Button>Save</Button>
                <Button type="submit" color="primary">Pay</Button>
            </div>
        </form>
    );
};
