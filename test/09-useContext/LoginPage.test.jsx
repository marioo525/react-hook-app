import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("Pruebas en <LoginPage/>", () => {

  const user = {
    id: 123,
    name: "Juan",
    email: "juan@google.com",
  };

  const setUserMock = jest.fn();

  beforeEach( () => jest.clearAllMocks() );

  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("Debe de llamar el setUser cuando se hace click en el botón", () => {
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole("button", { name: "Establecer usuario" });
    fireEvent.click(button);
    
    expect(setUserMock).toHaveBeenCalledWith(user);
  });
});
