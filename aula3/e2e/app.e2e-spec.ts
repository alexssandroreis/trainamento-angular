import { Aula3Page } from './app.po';

describe('aula3 App', () => {
  let page: Aula3Page;

  beforeEach(() => {
    page = new Aula3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
