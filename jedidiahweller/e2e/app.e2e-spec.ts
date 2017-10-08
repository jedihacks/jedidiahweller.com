import { JedidiahwellerPage } from './app.po';

describe('jedidiahweller App', () => {
  let page: JedidiahwellerPage;

  beforeEach(() => {
    page = new JedidiahwellerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
