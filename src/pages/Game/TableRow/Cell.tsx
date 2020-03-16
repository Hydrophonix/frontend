// Core
import React, { memo, FC } from 'react';

// Assets
import * as S from '../styles';

type Props = {
    rowIdx: number
    colIdx: number
    cellValue: number
    toggleCell: Function
    simulationPeriod: number
}

export const Cell: FC<Props>  = memo(({ rowIdx, colIdx, cellValue, toggleCell, simulationPeriod }) => {
    // console.log(`"|_(ʘ_ʘ)_/" =>: Cell -> rowIdx: ${rowIdx}, colIdx: ${colIdx}`);

    return (
        <S.Cell
            transition = { simulationPeriod / 2 }
            value = { cellValue }
            onClick = { () => toggleCell(rowIdx, colIdx) }
        />
    );
});
