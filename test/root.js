// test/root.js

// Require the setup file
require('../test-setup'); // Adjust the path if necessary

const { expect } = require('chai');

describe('Root Test', () => {
  it('should pass this root test case', () => {
    const element = document.createElement('div');
    expect(element).to.be.an.instanceof(HTMLElement);
  });
});
