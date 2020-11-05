import * as React from 'react'

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

export function Hello({name, enthusiasmLevel = 1} : Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error("Try being more enthusiastic! XD");
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    )
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}