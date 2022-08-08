const chai = window.chai
const expect = chai.expect

describe('getSum', () => {
  it('Debe sumar 2 números', () => {
    expect(getSum(2,3)).to.deep.equal(5)
  })
})

describe('getSum', () => {
  it('Debe combertir una cadena', () => {
    expect(getSum("2",3)).to.deep.equal(5)
  })
})

describe('getSum', () => {
  it('Debe sumar decimales', () => {
    expect(getSum(2.5,2.5)).to.deep.equal(5)
  })
})

describe('getSum', () => {
  it('Debe sumar números negativos', () => {
    expect(getSum(-1,6)).to.deep.equal(5)
  })
})

describe('getSum', () => {
  it('Ingreso de letras', () => {
    expect(getSum("a",3)).to.deep.equal(5)
  })
})