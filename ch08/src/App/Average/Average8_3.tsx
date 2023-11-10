import React, {useCallback, useMemo, useState} from "react";

const getAverage = (numbers : number[]) => {
    if(numbers.length === 0) return;
    const sum : number = numbers.reduce((a : number, b : number) => a + b);
    return sum / numbers.length;
}

const Average8_3 = () => {
    const [numbers, setNumbers] = useState<number[]>([]);
    const [strNumber, setStrNumber] = useState<string>('');

    const onChange = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        setStrNumber(e.target.value);
    }, []);
    const onClick = useCallback(() => {
        const nextNumbers = numbers.concat(parseInt(strNumber));
        setStrNumber('');
        setNumbers(nextNumbers);
    }, [numbers, strNumber]);
    const onEnterInsert = useCallback((e : React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key !== 'Enter') return;
        const nextNumbers : number[] = numbers.concat(parseInt(strNumber));
        setStrNumber('');
        setNumbers(nextNumbers);
    }, [numbers, strNumber]);
    const onRemoveClick = useCallback((index : number) => {
        const nextNumbers = numbers.filter((number : number, i: number) => i !== index);
        setNumbers(nextNumbers);
    }, [numbers]);

    const getAvg : number = useMemo(() => getAverage(numbers), [numbers])!;

    return (
        <div>
            <div>
                <input value={strNumber} onChange={onChange} onKeyPress={onEnterInsert}/>
                <button onClick={onClick}>입력</button>
            </div>
            <div>
                <ul>
                    {numbers.map(
                        (number : number, index : number) => <li key={index} onDoubleClick={() => onRemoveClick(index)}>{number}</li>
                    )}
                </ul>
            </div>
            <div>
                <b>Average : </b>{getAvg}
            </div>
        </div>
    )
}
export default Average8_3;