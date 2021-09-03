import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstName = screen.getByLabelText("First Name:");
  userEvent.type(firstName, "Michael");
  const lastName = screen.getByLabelText("Last Name:");
  userEvent.type(lastName, "Steiner");
  const address = screen.getByLabelText("Address:");
  userEvent.type(address, "42 Lambda Way");
  const city = screen.getByLabelText("City:");
  userEvent.type(city, "SLC");
  const state = screen.getByLabelText("State:");
  userEvent.type(state, "UT");
  const zipcode = screen.getByLabelText("Zip:");
  userEvent.type(zipcode, "84242");
  const checkoutButton = screen.queryByRole("button");
  userEvent.click(checkoutButton);

  await waitFor(() => {
    const successMessage = screen.queryByTestId("successMessage");
    expect(successMessage).toBeInTheDocument();
    expect(successMessage).toHaveTextContent(/michael/i);
    expect(successMessage).toHaveTextContent(/slc/i);
    expect(successMessage).toHaveTextContent(/lambda/i);
  });
});
