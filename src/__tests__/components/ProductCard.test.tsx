import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { ProductCard } from '@/components/ProductCard';
import { Provider } from 'react-redux';
import { store } from '@/store';

const mockProduct = {
  id: 1,
  name: 'Produto Teste',
  brand: 'Marca',
  description: 'Desc',
  image: '/img.png',
  price: 100.00,
};

describe('Component: ProductCard', () => {
  it('deve renderizar o nome e o preço do produto', () => {
    const onAddToCartMock = jest.fn();

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ProductCard 
            product={mockProduct} 
            onAddToCart={onAddToCartMock} 
          />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByText('Produto Teste')).toBeInTheDocument();
    expect(screen.getByText(/100/)).toBeInTheDocument();
  });

  it('deve chamar a função onAddToCart ao clicar no botão comprar', () => {
    const onAddToCartMock = jest.fn();

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ProductCard 
            product={mockProduct} 
            onAddToCart={onAddToCartMock} 
          />
        </ThemeProvider>
      </Provider>
    );

    const buyButton = screen.getByRole('button', { name: /comprar/i });
    fireEvent.click(buyButton);

    expect(onAddToCartMock).toHaveBeenCalledTimes(1);
    expect(onAddToCartMock).toHaveBeenCalledWith(mockProduct);
  });
});