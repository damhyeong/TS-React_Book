import React, {useState} from "react";

const getAverage = (numbers : number[]) => {
    if(numbers.length === 0) return 0;
    const sum : number = numbers.reduce((a : number, b : number) => a + b);
    return sum / numbers.length;
}

const Average8_1 = () => {
    const [numbers, setNumbers] = useState<number[]>([]);
    const [number, setNumber] = useState<string>('');

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value);
    }
    const onClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        const nextNumbers = numbers.concat(parseInt(number));

        setNumber('');
        setNumbers(nextNumbers);
    }
    const onRemoveClick = (index : number) => {
        const nextNumbers = numbers.filter((number : number, i : number) => i !== index)
        setNumbers(nextNumbers);
    }
    const onEnterPress = (e : React.KeyboardEvent) => {
        if(e.key !== 'Enter') return;

        const nextNumber : number[] = numbers.concat(parseInt(number));
        setNumber('');
        setNumbers(nextNumber);
    }

    return (
        <div>
            <div>
                <input value={number} onChange={onChange} onKeyPress={onEnterPress}/>
                <button onClick={onClick}>등록</button>
            </div>
            <ul>
                {numbers.map((number : number, index : number) => (
                    <li key={index} onDoubleClick={() => onRemoveClick(index)}>{number}</li>
                ))}
            </ul>
            <div>
                <b>Average : </b> {getAverage(numbers)}
            </div>
        </div>
    );
};
export default Average8_1;