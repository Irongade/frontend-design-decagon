import { render, screen } from '@testing-library/react';
import App from '../App';

const mockFetchPromise = Promise.resolve({
    json: () =>
      Promise.resolve([{
        name: {
            first: "Test",
            last: "Testing"
        },
        location: {
            street: {
                name: "Test street",
                number: "00000000"
            },
            city: "Test City",
            state: "Test state",
            country: "Test Country"
        }, 
        email: "testtesting@gmail.com", 
        cell: "000000000000", 
        picture: "Test.jpg",
        registered: {
            date: "2020-11-10"
        },
        phone: "00000000000"
    }]),
  });

  describe("App Component", () => {
    test("renders properly", async () => {
      jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
      render(
          <App />
      );

      // Before users data
      expect(screen.getByText("Hello,")).toBeInTheDocument(); // renders the heading
      expect(screen.getByText("Emerald")).toBeInTheDocument();
      
      // after users data
      expect(await screen.findByTestId("usersList")).toBeInTheDocument();
      
      // clear
      global.fetch.mockClear();
    });
  });
