define(["sitecore"], function (_sc) {
  var items = [
    {
      displayName: "First displayName",
      itemName: "First itemName"
    },
    {
      displayName: "Second displayName",
      itemName: "Second itemName"
    },
    {
      displayName: "Third displayName",
      itemName: "Third itemName"
    }
  ];
  var App = _sc.Definitions.App.extend({
    initialize: function () {
    },

    button1: function () {
      this.ListBox1.viewModel.rebind(items, null, null, "displayName", "itemName");
    },
    button2: function () {
      this.ListBox1.viewModel.rebind(items, { displayName: "Second displayName", itemName: "Second itemName" }, "Third itemName", "displayName", "itemName");
    },
    button3: function () {
      this.ListBox1.viewModel.rebind(items, { displayName: "Second displayName", itemName: "Second itemName" }, null, "displayName", "itemName");
    },
    button4: function () {
      this.ListBox1.viewModel.rebind(items, null, "Third itemName", "displayName", "itemName");
    },
    button5: function () {
      this.ListBox1.set("items", [{ displayName: "oFirst displayName", itemName: "oFirst itemName" }, { displayName: "oSecond displayName", itemName: "oSecond itemName" }]);
    },
    button6: function () {
      alert(this.ListBox1.get("items")[0][this.ListBox1.get("displayFieldName")]);
    },
    button7: function () {
      alert(this.ListBox1.get("selectedItem")[this.ListBox1.get("displayFieldName")]);
    },
    button8: function () {
      alert(this.ListBox1.get("selectedItem")[this.ListBox1.get("valueFieldName")]);
    },
    button9: function () {
      alert(this.ListBox1.get("selectedValue"));
    },
    button10: function () {
      this.ListBox1.set("selectedItems", [{ displayName: "Third displayName", itemName: "Third itemName" }]);
    },
    button11: function () {
      this.ListBox1.set("selectedValue", "Third itemName");
    },
    button12: function () {
      this.ListBox1.set("selectedItem", { displayName: "Third displayName", itemName: "Third itemName" });
    },
    //ListBox only
    button13: function () {
    this.ListBox1.viewModel.rebind(items, null, "Third itemName", "displayName", "itemName", [ { displayName: "First displayName", itemName: "First itemName" }, { displayName: "Third displayName", itemName: "Third itemName" } ] );
    },
    button14: function () {
      this.ListBox1.viewModel.rebind(items, null, "Third itemName", "displayName", "itemName", null, [ "First itemName" , "Second itemName"]);
    }
  });

  return App;
});