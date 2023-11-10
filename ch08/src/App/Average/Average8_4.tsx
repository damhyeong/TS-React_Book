import React, {useCallback, useMemo, useRef, useState} from "react";

const getAverage = (numbers : number[]) => {
    if(numbers.length === 0) return;
    const sum : number = numbers.reduce((a : number, b : number) => a + b);
    return sum / numbers.length;
}

const Average8_4 = () => {
    const [numbers, setNumbers] = useState<number[]>([]);
    const [strNumber, setStrNumber] = useState<string>('');
    const inputEl = useRef<HTMLInputElement>(null);

    const onChange = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        setStrNumber(e.target.value);
    }, [])
    const onInsert = useCallback(() => {
        if(isNaN(parseInt(strNumber))) return;
        const nextNumbers = numbers.concat(parseInt(strNumber));
        setStrNumber('');
        setNumbers(nextNumbers);
        inputEl.current?.focus(); // if(inputEl.current){ ... } 로 치환이 가능하다.
    }, [strNumber, numbers]);
    const onEnterInsert = useCallback((e : React.KeyboardEvent<HTMLInputElement>) => {
        if(isNaN(parseInt(strNumber))) return;
        if(e.key !== 'Enter') return;
        const nextNumbers = numbers.concat(parseInt(strNumber));
        setStrNumber('');
        setNumbers(nextNumbers);
    }, [numbers, strNumber]);
    const onRemoveClick = useCallback((id : number) =>  {
        const filterNumbers = numbers.filter((number : number, index : number) => id !== index);
        setNumbers(filterNumbers);
    }, [numbers]);

    const getAvg = useMemo(() => getAverage(numbers), [numbers]);

    return (
        <div>
            <div>
                <input value={strNumber} onChange={onChange} onKeyPress={onEnterInsert} ref={inputEl}/>
                <button onClick={onInsert}>Insert</button>
            </div>
            <div>
                <ul>
                    {numbers.map(
                        (number : number, index : number) => <li key={index} onDoubleClick={() => onRemoveClick}>{number}</li>
                    )}
                </ul>
            </div>
            <div>
                <b>Average : </b> {getAvg}
            </div>
        </div>
    )
}
export default Average8_4;