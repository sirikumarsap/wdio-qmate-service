"use strict";

const browser = require("../../../../reuse/modules/util/browser");
const {
  handleCookiesConsent
} = require("../../../helper/utils");

describe("Expect browser url to be equal with 'startUrl' after browser back", function () {
  it("Preparation", async function () {
    await common.navigation.navigateToUrl("https://sapui5.hana.ondemand.com/1.99.0/");
    await handleCookiesConsent();
    const selector = {
      "elementProperties": {
        "viewName": "sap.ui.documentation.sdk.view.App",
        "metadata": "sap.m.IconTabFilter",
        "text": [{
          "path": "i18n>APP_TABHEADER_ITEM_DOCUMENTATION"
        }]
      }
    };
    await ui5.userInteraction.click(selector);
  });

  it("Execution & Verification", async function () {
    await util.browser.back();
    const url = await util.browser.getCurrentUrl();
    util.console.log(`Current url is : ${url}`);
    const baseUrl = await util.browser.getBaseUrl();
    common.assertion.expectEqual(baseUrl, url);
  });

});