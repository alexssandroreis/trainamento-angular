import { Aula2Page } from './app.po';

describe('aula2 App', () => {
  let page: Aula2Page;

  beforeEach(() => {
    page = new Aula2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
