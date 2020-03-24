// Core
import React, { FC, useState, useCallback, useRef } from 'react';
import produce from 'immer';

// Components
import { ErrorBoundary } from '../../components';
import { TableRow } from './TableRow';

// Assets
import * as S from './styles';

type Props = {}

const scanCoordinates = [
    // X   Y
    [ -1, -1 ],
    [ -1,  0 ],
    [ -1,  1 ],
    [  0, -1 ],
    [  0,  1 ],
    [  1, -1 ],
    [  1,  0 ],
    [  1,  1 ],
];

const updateCellState = (gameState: number[][], rowIdx: number, colIdx: number) => produce(gameState, (draft) => {
    draft[ rowIdx ][ colIdx ] = gameState[ rowIdx ][ colIdx ] === 0 ? 1 : 0;
});

const generateGameState = (rows: number, columns: number): number[][] => Array(rows).fill(Array(columns).fill(0));

const Game:FC<Props> = () => {
    // =============================================================================================
    // State
    // =============================================================================================
    const [ running, setRunning ] = useState(false);

    const runningRef = useRef(running);
    runningRef.current = running;

    const [ simulationPeriod, setsimulationPeriod ] = useState(200);
    const [ ROWS, setRows ] = useState(50);
    const [ COLUMNS, setColumns ] = useState(50);
    const [ gameState, setGameState ] = useState(() => generateGameState(ROWS, COLUMNS));

    const toggleCell = useCallback((rowIdx: number, colIdx: number) => {
        console.log('"|_(ʘ_ʘ)_/" =>: toggleCell -> toggleCell created');

        setGameState((state) => updateCellState(state, rowIdx, colIdx));
    }, []);

    const simulateNewGameState = useCallback((gameState: number[][]) => gameState.map((row, i) => row.map((cell, j) => {
        let neighbors = 0;

        scanCoordinates.forEach(([ x, y ]) => {
            const newRowIdx = i + x;
            const newColIdx = j + y;

            if (newRowIdx >= 0 && newRowIdx < ROWS && newColIdx >= 0 && newColIdx < COLUMNS) {
                neighbors += gameState[ newRowIdx ][ newColIdx ];
            }
        });

        if (neighbors < 2 || neighbors > 3) {
            return 0;
        } else if (gameState[ i ][ j ] === 0 && neighbors === 3) {
            return 1;
        }

        return cell;
    })), [ ROWS, COLUMNS ]);

    const renderRows = (rows:number[][]) => {
        return rows.map((row, i) => (
            <TableRow
                key = { i }
                row = { row }
                rowIdx = { i }
                simulationPeriod = { simulationPeriod }
                toggleCell = { toggleCell }
            />
        ));
    };

    const runSimulation = () => {
        if (!runningRef.current) {
            return;
        }

        setGameState((state) => simulateNewGameState(state));

        setTimeout(runSimulation, simulationPeriod);
    };


    return (
        <div style = {{ display: 'flex', justifyContent: 'space-around' }}>
            <S.ControlPanel>
                <h2>Game of Life</h2>
                <div style = {{ display: 'flex' }}>
                    <span>Rows</span>
                    <input
                        disabled = { running }
                        type = 'number'
                        value = { ROWS }
                        onChange = { ((event) => setRows(Number(event.target.value))) }
                    />
                </div>
                <div style = {{ display: 'flex' }}>
                    <span>Columns</span>
                    <input
                        disabled = { running }
                        type = 'number'
                        value = { COLUMNS }
                        onChange = { ((event) => setColumns(Number(event.target.value))) }
                    />
                </div>
                <div style = {{ display: 'flex' }}>
                    <span>Period</span>
                    <input
                        disabled = { running }
                        type = 'number'
                        value = { simulationPeriod }
                        onChange = { ((event) => setsimulationPeriod(Number(event.target.value))) }
                    />
                </div>
                <button onClick = { () => setGameState(generateGameState(ROWS, COLUMNS)) }>
                    apply changes OR CRASH
                </button>
                <button onClick = { () => {
                    setRunning(!running);
                    if (!running) {
                        runningRef.current = true;
                        runSimulation();
                    }
                } }>{running ? 'Stop' : 'Start'}
                </button>
            </S.ControlPanel>
            <S.Table>
                <tbody>
                    {renderRows(gameState)}
                </tbody>
            </S.Table>
        </div>
    );
};

export default () => (
    <ErrorBoundary>
        <Game />
    </ErrorBoundary>
);
