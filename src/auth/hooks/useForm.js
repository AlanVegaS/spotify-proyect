import { useState } from "react";

export const useForm = () => {

    const [formState, setFormState] = useState('');
    const [validState, setvalidState] = useState(true);

    const onInputChange = ({ target }) => {
        const { value } = target;
        setFormState(value);

        if (value.length === 0) setvalidState(false);
        if (value.length > 3) setvalidState(true);
    }

    return {
        onInputChange,
        formState,
        validState,
        setvalidState
    };
};