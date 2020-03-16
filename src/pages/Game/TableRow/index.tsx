// React
import React, { FC } from 'react';

// Components
import { Cell } from './Cell';

type Props = {
    rowIdx: number
    row: number[]
    toggleCell: Function
    simulationPeriod: number
}

export const TableRow: FC<Props> = ({ rowIdx, row, toggleCell, simulationPeriod }) => {
    // console.log('"|_(ʘ_ʘ)_/" =>: rowIdx', rowIdx);

    return (
        <tr>
            {row.map((cell, i) => (
                <Cell
                    cellValue = { cell }
                    colIdx = { i }
                    key = { `${rowIdx} ${i}` }
                    rowIdx = { rowIdx }
                    simulationPeriod = { simulationPeriod }
                    toggleCell = { toggleCell }
                />
            ))}
        </tr>
    );
};
