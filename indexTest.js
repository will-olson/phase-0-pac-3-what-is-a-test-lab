// test/indexTest.js

// Require the setup file
require('../test-setup-dir/test-setup');

const { expect } = require('chai');

describe('Index Test', () => {
  it('should pass this index test case', () => {
    const element = document.createElement('div');
    expect(element).to.be.an.instanceof(HTMLElement);
  });
});
