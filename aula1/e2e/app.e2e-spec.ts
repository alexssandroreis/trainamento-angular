import { Aula1Page } from './app.po';

describe('aula1 App', () => {
  let page: Aula1Page;

  beforeEach(() => {
    page = new Aula1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
