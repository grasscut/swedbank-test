import React from 'react';
import Tabs from '../../components/Tabs/Tabs';
import PaymentForm from './PaymentForm';
import LoanCalculator from './LoanCalculator';

export default () => {
    const tabItems = [
        { id: 'payment', label: 'Payment', content: <PaymentForm /> },
        { id: 'calculator', label: 'Calculator', content: <LoanCalculator /> },
    ];

    return (
       <div>
           <h1 className="color-primary">Everyday banking</h1>
           <Tabs items={tabItems} />
       </div>
    );
};
