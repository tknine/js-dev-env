import { expect } from 'chai';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', () => {

    return JSDOM.fromFile('./src/index.html').then(dom => {
      const h1 = dom.window.document.getElementsByTagName('h1')[0].innerHTML;
      expect(h1).to.equal("Hello World!");
      dom.window.close();
    });
  });
});
