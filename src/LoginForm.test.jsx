import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './src/LoginForm';

describe('LoginForm', () => {
  test('El botón está deshabilitado al iniciar', () => {
    render(<LoginForm onLogin={jest.fn()} />);
    const button = screen.getByRole('button', { name: /Iniciar sesión/i });
    expect(button).toBeDisabled();
  });

  test('El botón se habilita solo cuando los tres campos están completos', () => {
    render(<LoginForm onLogin={jest.fn()} />);

    fireEvent.change(screen.getByPlaceholderText(/Código de Cliente/i), { target: { value: '123' } });
    fireEvent.change(screen.getByPlaceholderText(/Usuario/i), { target: { value: 'juan' } });
    fireEvent.change(screen.getByPlaceholderText(/Contraseña/i), { target: { value: '123456' } });

    const button = screen.getByRole('button', { name: /Iniciar sesión/i });
    expect(button).toBeEnabled();
  });

  test('Al hacer clic se llama a onLogin con los valores correctos', () => {
    const mockLogin = jest.fn();
    render(<LoginForm onLogin={mockLogin} />);

    fireEvent.change(screen.getByPlaceholderText(/Código de Cliente/i), { target: { value: '123' } });
    fireEvent.change(screen.getByPlaceholderText(/Usuario/i), { target: { value: 'juan' } });
    fireEvent.change(screen.getByPlaceholderText(/Contraseña/i), { target: { value: '123456' } });

    fireEvent.click(screen.getByRole('button', { name: /Iniciar sesión/i }));

    expect(mockLogin).toHaveBeenCalledWith({
      codigoCliente: '123',
      usuario: 'juan',
      password: '123456'
    });
  });
});
