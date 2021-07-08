import Big from 'big.js';
import operate from '../operate';

describe('performs mathematical operations', () => {
  it('performs the addition', () => {
    expect(operate(3, 4, '+')).toEqual(Big(7).toString());
  });

  it('performs the subtraction', () => {
    expect(operate(87, 100, '-')).toEqual(Big(-13).toString());
  });

  it('performs the multiplication', () => {
    expect(operate(4, 7, 'x')).toEqual(Big(28).toString());
  });

  it('performs the multiplication with negative numbers', () => {
    expect(operate(4, -7, 'x')).toEqual(Big(-28).toString());
  });

  it('performs the division operation', () => {
    expect(operate(45, 9, '÷')).toEqual(Big(5).toString());
  });

  it('returns Can\'t divide by O when attempted division by 0', () => {
    expect(operate(45, '0', '÷')).toEqual('Can\'t divide by 0');
  });

  it('multiplies the number times -1 when operator is +/-', () => {
    expect(operate(45, -1, '+/-')).toEqual(Big(-45).toString());
  });

  it('returns the number times 1/100 when operator is +/- ', () => {
    expect(operate(7, 7, '%')).toEqual(Big(0.49).toString());
  });

  it('returns INVALID NUMBER when an invalid operation is carried out', () => {
    expect(operate(7, '.', '+')).toEqual('Invalid Number');
  });

  it('returns INVALID NUMBER when a number is added to invalid number', () => {
    expect(operate('Invalid Number', '.', '+')).toEqual('Invalid Number');
  });

  it('returns 0 when first operand is empty', () => {
    expect(operate('', '3', '+')).toEqual('0');
  });

  it('returns 0 when second operand is empty', () => {
    expect(operate(7, '', '+')).toEqual('0');
  });

  it('returns 0 when operator is empty', () => {
    expect(operate(7, 7, '')).toEqual('0');
  });
});
