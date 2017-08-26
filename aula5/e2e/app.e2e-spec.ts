import { Aula5Page } from './app.po';

describe('aula5 App', () => {
  let page: Aula5Page;

  beforeEach(() => {
    page = new Aula5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
