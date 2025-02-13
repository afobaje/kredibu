import { ChangeEvent, useState } from "react";


export function useInputValue() {
    const [state, setState] = useState('');

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setState(e.target.value);
    }
    return [state, handleChange] as const;
}