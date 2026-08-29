import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Home from "../components/Home";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../api/baseUrl";
import { ToastContainer } from "react-toastify";
import React from "react";

// Mock axios
jest.mock("axios");

describe("Home Component", () => {
  const mockUsers = [
    {
      _id: "1",
      title: "User One",
      description: "This is user one",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAU",
    },
    {
      _id: "2",
      title: "User Two",
      description: "This is user two",
      image: null,
    },
  ];

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockUsers });
  });

  test("renders user details correctly", async () => {
    render(
      <MemoryRouter>
        <ToastContainer />
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText("User Details")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("User One")).toBeInTheDocument();
      expect(screen.getByText("This is user one")).toBeInTheDocument();
      expect(screen.getByText("User Two")).toBeInTheDocument();
      expect(screen.getByText("This is user two")).toBeInTheDocument();
    });

    expect(screen.getAllByRole("img").length).toBe(1); // Only 1 user has an image
  });

  test("displays error message on API failure", async () => {
    axios.get.mockRejectedValue(new Error("Failed to fetch"));

    render(
      <MemoryRouter>
        <ToastContainer />
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Failed to fetch user details.")).toBeInTheDocument();
    });
  });

  test("navigates to edit page when clicking edit", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      const editButton = screen.getAllByText(/Edit/i)[0];
      fireEvent.click(editButton);
    });

    expect(window.location.pathname).toBe("/create-user"); // React Router Mock
  });

  test("calls delete function when clicking delete", async () => {
    window.confirm = jest.fn(() => true);
    axios.delete = jest.fn().mockResolvedValue({});

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      const deleteButton = screen.getAllByText(/Delete/i)[0];
      fireEvent.click(deleteButton);
    });

    expect(axios.delete).toHaveBeenCalledWith(`${baseURL}/api/users/deleteUser/1`);
  });
});
