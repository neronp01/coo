import { CooPage } from './app.po';

describe('coo App', () => {
  let page: CooPage;

  beforeEach(() => {
    page = new CooPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
