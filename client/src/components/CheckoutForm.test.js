import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);

    getByText(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
    let formDetails = {
        firstName: "Aaron",
        lastName: "Yates",
        address: "123 Main St",
        city: "Portland",
        state: "Oregan",
        zip: "12345"
    };    

    const { getByTestId, getByLabelText, getByText } = render(<CheckoutForm />);

    const checkBtn = getByText("Checkout");
    const inputFN = getByLabelText(/first name/i);
    const inputLN = getByLabelText(/last name/i);
    const inputAd = getByLabelText(/address/i);
    const inputCity = getByLabelText(/city/i);
    const inputSt = getByLabelText(/state/i);
    const inputZip = getByLabelText(/zip/i);

    fireEvent.change(inputFN, { target: {value: formDetails.firstName} });
    fireEvent.change(inputLN, { target: {value: formDetails.lastName} });
    fireEvent.change(inputAd, { target: {value: formDetails.address} });
    fireEvent.change(inputCity, { target: {value: formDetails.city} });
    fireEvent.change(inputSt, { target: {value: formDetails.state} });
    fireEvent.change(inputZip, { target: {value: formDetails.zip} });

    fireEvent.click(checkBtn);

    const success = getByTestId("successMessage");
});
