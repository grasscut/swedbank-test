import React from 'react';
import './Table.css';

export default ({ headers, data }) => {
    return (
        <table className="table" cellSpacing={0} cellPadding={8}>
            <thead>
                <tr className="table__header">
                    {headers.map(({ id, label, align = 'left' }) => (
                        <th key={id} className={`text-align-${align}`}>{label}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map((dataRow) => (
                    <tr key={dataRow.id}>
                        {headers.map(({ id, align = 'left' }) => (
                            <td key={id} className={`table__cell text-align-${align}`}>
                                {dataRow[id]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
