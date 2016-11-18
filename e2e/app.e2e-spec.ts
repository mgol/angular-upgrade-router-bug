import { YgoFrontClientPage } from './app.po';

describe('ygo-front-client App', function() {
  let page: YgoFrontClientPage;

  beforeEach(() => {
    page = new YgoFrontClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('yg works!');
  });
});
