import { browser, by, element } from 'protractor';

export class Angular2AdminPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mh-root h1')).getText();
  }
}
