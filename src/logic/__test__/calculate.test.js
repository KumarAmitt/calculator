import calculate from '../calculate';

describe('successfully constructs the first and next numbers', () => {
  it('Appends all the button response before an operator button  and form a single number', () => {
    let data = { total: '0', next: '', operation: '' };
    data = calculate(data, '5');
    expect(data).toEqual({ total: '5', next: '', operation: '' });
    data = calculate(data, '2');
    expect(data).toEqual({ total: '52', next: '', operation: '' });
  });

  it('Appends all the button response after an operator button  and form a single number before it finds an assignment operator =', () => {
    let data = { total: '72', next: '', operation: '+' };
    data = calculate(data, '2');
    expect(data).toEqual({ total: '72', next: '2', operation: '+' });
    data = calculate(data, '3');
    expect(data).toEqual({ total: '72', next: '23', operation: '+' });
  });
});

describe('AC button Resets the calculator to default', () => {
  it('Clears the data when only first operand is present', () => {
    let data = { total: '72', next: '', operation: '' };
    data = calculate(data, 'AC');
    expect(data).toEqual({ total: '0', next: '', operation: '' });
  });

  it('Clears the data when only first operand and the operator is present', () => {
    let data = { total: '72', next: '', operation: 'x' };
    data = calculate(data, 'AC');
    expect(data).toEqual({ total: '0', next: '', operation: '' });
  });

  it('Clears the data when both the operand and operator are present', () => {
    let data = { total: '72', next: '108', operation: '-' };
    data = calculate(data, 'AC');
    expect(data).toEqual({ total: '0', next: '', operation: '' });
  });
});

describe('+/- button negates the value of operand', () => {
  it('negates the value of LHS operand', () => {
    expect(calculate({ total: '72', next: '', operation: '' }, '+/-')).toEqual({ total: '-72', next: '', operation: '' });
  });

  it('negates the value of RHS operand', () => {
    expect(calculate({ total: '72', next: '-4', operation: '+' }, '+/-')).toEqual({ total: '72', next: '4', operation: '+' });
  });

  it('negates a positive value', () => {
    expect(calculate({ total: '72', next: '8', operation: '+' }, '+/-')).toEqual({ total: '72', next: '-8', operation: '+' });
  });

  it('negates a negative value', () => {
    expect(calculate({ total: '-8', next: '', operation: '' }, '+/-')).toEqual({ total: '8', next: '', operation: '' });
  });

  it('negates a decimal value', () => {
    expect(calculate({ total: '-8.71', next: '', operation: '' }, '+/-')).toEqual({ total: '8.71', next: '', operation: '' });
  });
});

describe('performs operation when detects the click of = button', () => {
  it('successfully performs an addition operation', () => {
    let data = { total: '5', next: '3', operation: '+' };
    data = calculate(data, '=');
    expect(data).toEqual({ total: '8', next: '', operation: '=' });
  });

  it('successfully performs a subtraction operation', () => {
    let data = { total: '5', next: '7', operation: '-' };
    data = calculate(data, '=');
    expect(data).toEqual({ total: '-2', next: '', operation: '=' });
  });

  it('successfully performs a multiplication operation', () => {
    let data = { total: '5', next: '-7', operation: 'x' };
    data = calculate(data, '=');
    expect(data).toEqual({ total: '-35', next: '', operation: '=' });
  });

  it('successfully performs a division operation', () => {
    let data = { total: '22', next: '11', operation: '÷' };
    data = calculate(data, '=');
    expect(data).toEqual({ total: '2', next: '', operation: '=' });
  });

  it('Results O when O is divided by any valid number', () => {
    let data = { total: '0', next: '11', operation: '÷' };
    data = calculate(data, '=');
    expect(data).toEqual({ total: '0', next: '', operation: '=' });
  });

  it('Displays Can\'t divide by O when a number is divided by 0', () => {
    let data = { total: '33', next: '0', operation: '÷' };
    data = calculate(data, '=');
    expect(data).toEqual({ total: 'Can\'t divide by 0', next: '', operation: '=' });
  });

  it('calculates the percentage', () => {
    let data = { total: '33', next: '', operation: '' };
    data = calculate(data, '%');
    expect(data).toEqual({ total: '0.33', next: '', operation: '' });
  });
});

describe('displays INVALID NUMBER when invalid operation are carried out', () => {
  it('when . is treated as a number', () => {
    let data = { total: '33', next: '.', operation: '+' };
    data = calculate(data, '=');
    expect(data).toEqual({ total: 'Invalid Number', next: '', operation: '=' });
  });
});
