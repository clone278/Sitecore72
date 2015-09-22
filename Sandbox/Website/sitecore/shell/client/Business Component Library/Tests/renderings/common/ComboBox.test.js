require(["jasmineEnv", "/-/speak/v1/business/combobox.js"], function (jasmineEnv) {

  var setupTests = function (testAreaEl) {
    var descriptor = {
      attributes: [
        { name: "items", defaultValue: [], which: "which holds items in the list box" },
        { name: "selectedItem", defaultValue: null, which: "which holds the currently selected item" },
        { name: "selectedItems", defaultValue: [], which: "which holds an array of the currently selected items" },
        { name: "selectedItemId", defaultValue: null, which: "which holds the id of the currently selected item" },
        { name: "selectedValue", defaultValue: null, which: "which holds the value of selected item" },
        { name: "valueFieldName", defaultValue: null, which: "which holds the the name of the data field used as ComboBox option value" },
        { name: "displayFieldName", defaultValue: null, which: "which holds the the name of the data field used as ComboBox option text" }
      ]};

    describe("Given a ComboBox model", function () {
      var model;
      var $element;
      var items = [
        {
          $displayName: "1st displayName",
          id: 1,
          itemId: "1st itemId",
          name: "1st name"
        },
        {
          $displayName: "2nd displayName",
          id: 2,
          itemId: "2nd itemId",
          name: "2nd name"
        },
        {
          $displayName: "3rd displayName",
          id: 3,
          itemId: "3rd itemId",
          name: "3rd name"
        }
      ];

      var items2 = [
        {
          $displayName: "4th displayName",
          id: 4,
          itemId: "4th itemId",
          name: "4th name"
        },
        {
          $displayName: "5th displayName",
          id: 5,
          itemId: "5th itemId",
          name: "5th name"
        },
        {
          $displayName: "6th displayName",
          id: 6,
          itemId: "6th itemId",
          name: "6th name"
        }
      ];

      it("it should create the Control when I execute Run", function () {
        $element = testAreaEl.find(".sc-combobox");
        var testArea = _sc.Factories.createApp(testAreaEl.attr("id"));
        expect(testArea.ComboBox2).toBeDefined();
        model = testArea.ComboBox2;
      });

      it("it should create options when I set items", function () {
        model.set("items", items);
        expect($element.find("option").length).toBe(3);
      });

      it("it should has a selectedItem pointing to the 1st element of the array", function () {
        expect(model.get("selectedItem")).toBe(items[0]);
      });

      it("it should use the items's 'name' field as displayFieldName", function () {
        expect($element.find("option").eq(0).html()).toBe(items[0].$displayName);
      });

      it("it should use the items's 'itemId' field as defalut valueFieldName", function () {
        expect($element.find("option").eq(0).attr('value')).toBe(items[0].itemId);
      });

      it("it should have the selecetdValue of the 2nd item  when we set selectedItem to be the 2nd element in the options array", function () {
        model.set("selectedItem", {
          $displayName: "2nd displayName",
          id: 2,
          itemId: "2nd itemId",
          name: "2nd name"
          
        });
        expect(model.get("selectedValue")).toBe(items[1].itemId);
      });

      it("it should have the selecetdItem to be the 3rd item, when we set the selectedValue to be that of the 3rd element in the options array", function () {
        model.set("selectedValue", "3rd itemId");
        expect(model.get("selectedItem")).toBe(items[2]);
      });

      it("it should change the options collection and select the first item, when we call rebind(items2)", function () {
        model.viewModel.rebind(items2);
        expect($element.find("option").eq(0).attr('value')).toBe(items2[0].itemId.toString());
        expect(model.get("selectedItem")).toBe(items2[0]);
      });

      it("it should change the options Value and Text when we call rebind(null, null, null, 'name', 'id')", function () {
        model.viewModel.rebind(null, null, null, 'name', 'id');
        expect($element.find("option").eq(0).attr('value')).toBe(items2[0].id.toString());
        expect($element.find("option").eq(0).html()).toBe(items2[0].name);
      });

      it("it should change the options collection and the selectedItem when we call rebind(items, items[1])", function () {
        model.viewModel.rebind(items, items[1]);
        expect(model.get("selectedItem")).toBe(items[1]);
      });

      it("it should have the selecetdItem to be the 3rd item of items2 when we call rebind(null, null, items[2].id)", function () {
        model.viewModel.rebind(null, null, items[2].id);
        expect(model.get("selectedItem")).toBe(items[2]);
      });

    });
    
    runComponentTests("ComboBox", descriptor, "Control1");
  };
  
  runTests(jasmineEnv, setupTests, "ComboBox.htm");
});