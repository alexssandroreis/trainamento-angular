import { Aula4Page } from './app.po';

describe('aula4 App', () => {
  let page: Aula4Page;

  beforeEach(() => {
    page = new Aula4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
