import { ZooTrackerPage } from './app.po';

describe('zoo-tracker App', () => {
  let page: ZooTrackerPage;

  beforeEach(() => {
    page = new ZooTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
