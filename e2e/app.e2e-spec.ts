import { Angular2AdminPage } from './app.po';

describe('angular2-admin App', () => {
  let page: Angular2AdminPage;

  beforeEach(() => {
    page = new Angular2AdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mh works!');
  });
});
