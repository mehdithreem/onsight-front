import { OnsightFrontPage } from './app.po';

describe('onsight-front App', function() {
  let page: OnsightFrontPage;

  beforeEach(() => {
    page = new OnsightFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
