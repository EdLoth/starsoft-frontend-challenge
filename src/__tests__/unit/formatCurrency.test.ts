export const formatPrice = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

describe('Utility: formatPrice', () => {
  it('deve formatar o número corretamente para Real', () => {
    expect(formatPrice(1000)).toContain('R$');
    expect(formatPrice(1000)).toContain('1.000,00');
  });
});