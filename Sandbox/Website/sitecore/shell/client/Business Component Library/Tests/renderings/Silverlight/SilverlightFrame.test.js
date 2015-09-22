require(["jasmineEnv", "/-/speak/v1/business/SilverlightFrame.js"], function (jasmineEnv) {
  var setupTests = function (testAreaEl) {
    "use strict";

    describe("Given an SilverlightFrame Control", function () {
        var model;
        var $element;

        it("it should create the SilverlightFrame when I execute Run", function () {
          var silverlightFrameArea = _sc.Factories.createApp(testAreaEl.attr("id"));
          expect(silverlightFrameArea.SilverilghtFrame1).toBeDefined();

          model = silverlightFrameArea.SilverilghtFrame1;
          $element = testAreaEl.find(".sc-silverlightframe");
        });        
      });
  };

  runTests(jasmineEnv, setupTests, "SilverlightFrame.html");
});