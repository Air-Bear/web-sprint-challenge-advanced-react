// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (bool, initialValue) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(bool);
    const [values, setValues] = useState(initialValue);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };
    
    return [showSuccessMessage, values, handleSubmit, handleChanges];
};