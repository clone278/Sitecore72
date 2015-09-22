/// <reference path="../../jasmine.ui.runner.test.js" />
/// <reference path="../../../Sitecore/Repository/Layouts/Renderings/Common/HyperlinkButtons/IconHyperlinkButton.js" />

require(["jasmineEnv", "/-/speak/v1/business/iconhyperlinkbutton.js"], function (jasmineEnv) {
  var setupTests = function (testAreaEl) {
    "use strict";

    describe("Given a IconHyperlinkButton model", function () {
      var iconHyperlinkButton = new Sitecore.Definitions.Models.IconHyperlinkButton();

      it("it should have a isEnabled property", function () {
        expect(iconHyperlinkButton.get("isEnabled")).toBeDefined();
      });

      it("it should have a isVisible property", function () {
        expect(iconHyperlinkButton.get("isVisible")).toBeDefined();
      });

      it("it should have a text property", function () {
        expect(iconHyperlinkButton.get("text")).toBeDefined();
      });

      it("it should have a navigateUrl property", function () {
        expect(iconHyperlinkButton.get("navigateUrl")).toBeDefined();
      });

      it("it should have a imageUrl property", function () {
        expect(iconHyperlinkButton.get("imageUrl")).toBeDefined();
      });

      it("it should have a backgroundPosition property", function () {
        expect(iconHyperlinkButton.get("backgroundPosition")).toBeDefined();
      });

      it("it should have a clickScript property", function () {
        expect(iconHyperlinkButton.get("clickScript")).toBeDefined();
      });

      it("it should have 'text' set to 'null' by default", function () {
        expect(iconHyperlinkButton.get("text")).toBeNull();
      });

    });

    describe("Given a IconHyperLinkButton Control", function () {
      var model,
          testAreaApp,
          $el;

      testAreaApp = _sc.Factories.createApp(testAreaEl.attr("id"));
      model = testAreaApp.IconHyperlinkButton1;
      $el = model.viewModel.$el;

      it("it should create the control when I execute Run", function () {
        expect(testAreaApp.IconHyperlinkButton1).toBeDefined();
      });

      it("it should have the viewModel to be defined inside the model", function () {
        expect(model.viewModel).toBeDefined();
      });

      it("it should have a 'preventIfDisable' method to be defined as a function", function () {
        expect(model.viewModel.preventIfDisable).toBeDefined();
        expect(typeof model.viewModel.preventIfDisable).toBe("function");
      });

      it("it should have a 'updateClickAttributes' method to be defined as a function", function () {
        expect(model.viewModel.updateClickAttributes).toBeDefined();
        expect(typeof model.viewModel.updateClickAttributes).toBe("function");
      });

      it("it should set the data-sc-click attribute to '' when navigateUrl property is set to a value", function () {
        model.set("navigateUrl", "somethingElse");
        expect($el.attr("data-sc-click")).toBe("");
      });

      it("it should set the data-sc-click attribute to 'javascript:alert(123);' when navigateUrl property is set to ''", function () {
        model.set("navigateUrl", "");
        expect($el.attr("data-sc-click")).toBe("javascript:alert(123);");
      });

      describe("when the click event is triggered", function () {
        var clickSpy = jasmine.createSpy();
        $el.on('click', function (e) {
          if (e.isDefaultPrevented()) {
            return;
          }
          clickSpy();
        });

        it("it should prevent default if 'isEnabled' is 'false'", function () {
          model.set('isEnabled', false);
          $el.trigger('click');
          expect(clickSpy.calls.length).toEqual(0);
        });

        it("the default behavior should be executed if 'isEnabled' is 'true'", function () {
          model.set('isEnabled', true);
          $el.trigger('click');
          expect(clickSpy).toHaveBeenCalled();
        });

      });
    });

  };

  runTests(jasmineEnv, setupTests, "IconHyperLinkButton.htm");
});