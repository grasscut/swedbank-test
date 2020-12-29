import React from 'react';
import { ReactComponent as PdfIcon } from '../../assets/icons/pdf.svg';
import Table from '../../components/Table/Table';
import { accountsData } from '../../assets/data';
import Card from '../../components/Card/Card';

export default () => {
    const tableHeaders = [
        { id: 'name', label: 'Account' },
        { id: 'balance', label: 'Available', align: 'right' }
    ];

    const total = accountsData
        .map(({ balance }) => balance)
        .reduce((total, balance) => total + balance);

    return (
        <Card>
            <div>
                <div  className="mb-4">
                    <h4>Your Swedbank overview</h4>
                    <span className="color-secondary float-right center-vertical">
                            <PdfIcon /><span className="ml-2">PDF</span>
                        </span>
                </div>

                <Table headers={tableHeaders} data={accountsData} />

                <div  className="mt-5">
                    <b>Total:</b>
                    <span className="float-right font-size-lg">{`${total} EUR`}</span>
                </div>
            </div>
        </Card>
    );
};
