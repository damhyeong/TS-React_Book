import React, {useMemo, useState} from "react";


const getAverage = (numbers : number[]) => {
    if(numbers.length === 0) return;
    const sum : number = numbers.reduce((a : number, b : number) => a + b);
    return sum / numbers.length
}

const Average8_2 = () => {
    const [numbers, setNumbers] = useState<number[]>([]);
    const [strNumber, setStrNumber] = useState<string>('');

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setStrNumber(e.target.value);
    }
    const onClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        const nextNumbers : number[] = numbers.concat(parseInt(strNumber));
        setNumbers(nextNumbers);
        setStrNumber('');
    }
    const onDoubleClickRemove = (index : number) => {
        const nextNumbers : number[] = numbers.filter((number : number) => number !== index);
        setNumbers(nextNumbers);
    }
    const onEnterInsert = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key !== 'Enter') return;
        const nextNumbers : number[] = numbers.concat(parseInt(strNumber));
        setNumbers(nextNumbers);
        setStrNumber('');
    }

    const avg = useMemo(() => getAverage(numbers), [numbers]);

    return (
        <div>
            <div>
                <input value={strNumber} onChange={onChange} onKeyPress={onEnterInsert}/>
                <button onClick={onClick}>등록</button>
            </div>
            <ul>
                {numbers.map(
                    (number : number, index : number) => <li key={index} onDoubleClick={() => onDoubleClickRemove(index)}>{number}</li>
                )}
            </ul>
            <div>
                <b>Average Value : </b> {avg}
            </div>
        </div>
    );
};
export default Average8_2;