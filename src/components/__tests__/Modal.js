import React from "react";
import Modal from "../Modal";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ContextProvider } from "../../Store";

describe("Modal Component", () => {
  it("should add a reminder correctly", async () => {
    /**
     * NOT testing implementation details since it goes goes
     * the principles of RTL. Since this component is mounted
     * dynamically, the most logical assertion was to test if the
     * onClose function was called, which means that the reminder
     * was added successfully
     */
    const onClose = jest.fn();
    const dispatch = jest.fn();
    const state = {};

    const { getAllByText, getByPlaceholderText, getByText } = render(
      <ContextProvider value={{ state, dispatch }}>
        <Modal onClose={onClose} />
      </ContextProvider>
    );

    getByText(/create a reminder/i);

    const descriptionField = getByPlaceholderText(/enter description here/i);
    fireEvent.change(descriptionField, { target: { value: "Hello World" } });

    const cityField = getByPlaceholderText(/enter city here/i);
    fireEvent.change(cityField, { target: { value: "Tokyo" } });

    const submitButton = getAllByText(/create/i)[1];
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(onClose).toHaveBeenCalled();
    });
  });
});
