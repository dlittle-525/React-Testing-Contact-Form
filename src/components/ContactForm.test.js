import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test("renders ContactForm component without errors", () => {
    render(<ContactForm />);
});

test("user can fill out and submit form", async () => {
    render(<ContactForm />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const button = screen.getByTestId('submit');
    

    userEvent.type(firstNameInput, "Douglas");
    const FirstName = await screen.getByText(/douglas/i);
    userEvent.type(lastNameInput, "Little");
    userEvent.type(emailInput, "douglas-little@lambdastudents.com");
    userEvent.type(messageInput, "This is a test message.");
    console.log(FirstName);

    waitFor(() => {
    userEvent.click(button);
    });

    const FirstName1 = await screen.getByText(/douglas/i);
    const LastName = await screen.getByText(/little/i);
    const Email = await screen.getByText(/douglas-little@lambdastudents.com/i);
    const Message = await screen.getByText(/this is a test message/i);
    screen.debug();
    expect(FirstName, LastName, Email, Message).toBeInTheDocument();

});