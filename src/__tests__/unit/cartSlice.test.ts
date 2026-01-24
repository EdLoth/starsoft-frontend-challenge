import cartReducer, { addToCart } from '@/store/cartSlice';

describe('Cart Reducer', () => {
  const mockProduct = { 
    id: 1, 
    name: 'Produto Teste', 
    price: 100.00, 
    photo: '', 
    description: '', 
    brand: '', 
    image: ''
  };

  it('deve iniciar com o carrinho vazio', () => {
    const state = cartReducer(undefined, { type: '' });
    expect(state.items).toHaveLength(0);
  });

  it('deve adicionar um item ao carrinho', () => {
    const state = cartReducer({ items: [], isCartOpen: false }, addToCart(mockProduct));
    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(1);
  });
});