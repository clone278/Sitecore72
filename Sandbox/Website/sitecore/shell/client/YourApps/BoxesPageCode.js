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

    updateDisplay: function() {
      var cb_si_dfn = this.ComboBox1.get("selectedItem") ? this.ComboBox1.get("selectedItem")[this.ComboBox1.get("displayFieldName")] : 'null';
      var cb_si_vfn = this.ComboBox1.get("selectedItem") ? this.ComboBox1.get("selectedItem")[this.ComboBox1.get("valueFieldName")]: 'null';
      var cb_sv = this.ComboBox1.get("selectedValue") ? this.ComboBox1.get("selectedValue"): 'null';

      var lb_si_dfn = this.ListBox1.get("selectedItem") ? this.ListBox1.get("selectedItem")[this.ListBox1.get("displayFieldName")] : 'null';
      var lb_si_vfn = this.ListBox1.get("selectedItem") ? this.ListBox1.get("selectedItem")[this.ListBox1.get("valueFieldName")]: 'null';
      var lb_sv = this.ListBox1.get("selectedValue") ? this.ListBox1.get("selectedValue"): 'null';

      var lb_sis = this.ListBox1.get("selectedItems").toString();
      var lb_svs = this.ListBox1.get("selectedValues").toString();
  
      $("[data-sc-id='Text1']").text('this.ComboBox1.get("selectedItem")[this.ComboBox1.get("displayFieldName")] === ' + cb_si_dfn);
      $("[data-sc-id='Text2']").text('this.ComboBox1.get("selectedItem")[this.ComboBox1.get("valueFieldName")] === ' + cb_si_vfn);
      $("[data-sc-id='Text3']").text('this.ComboBox1.get("selectedValue") === ' + cb_sv);

      $("[data-sc-id='Text4']").text('this.ListBox1.get("selectedItem")[this.ListBox1.get("displayFieldName")] === ' + lb_si_dfn);
      $("[data-sc-id='Text5']").text('this.ListBox1.get("selectedItem")[this.ListBox1.get("valueFieldName")] === ' + lb_si_vfn);
      $("[data-sc-id='Text6']").text('this.ListBox1.get("selectedValue") === ' + lb_sv);

      $("[data-sc-id='Text7']").text('this.ListBox1.get("selectedItems").toString() === ' + lb_sis);
      $("[data-sc-id='Text8']").text('this.ListBox1.get("selectedValues").toString() === ' + lb_svs);

    },

    button1: function () {
      this.ComboBox1.viewModel.rebind(items, null, null, "displayName", "itemName");
      this.ListBox1.viewModel.rebind(items, null, null, "displayName", "itemName");
      this.updateDisplay();
    },
    button2: function () {
       this.ComboBox1.viewModel.rebind(items, { displayName: "Second displayName", itemName: "Second itemName" }, "Third itemName", "displayName", "itemName");
       this.ListBox1.viewModel.rebind(items, { displayName: "Second displayName", itemName: "Second itemName" }, "Third itemName", "displayName", "itemName");
       this.updateDisplay();
    },
    button3: function () {
      this.ComboBox1.viewModel.rebind(items, { displayName: "Second displayName", itemName: "Second itemName" }, null, "displayName", "itemName");
      this.ListBox1.viewModel.rebind(items, { displayName: "Second displayName", itemName: "Second itemName" }, null, "displayName", "itemName");
      this.updateDisplay();
    },
    button4: function () {
      this.ComboBox1.viewModel.rebind(items, null, "Third itemName", "displayName", "itemName");
      this.ListBox1.viewModel.rebind(items, null, "Third itemName", "displayName", "itemName");
      this.updateDisplay();
    },
  button5: function () {
    this.ComboBox1.set("items", [{displayName: "oFirst displayName", itemName: "oFirst itemName"},{displayName: "oSecond displayName", itemName: "oSecond itemName"}]); 
    this.ListBox1.set("items", [{ displayName: "oFirst displayName", itemName: "oFirst itemName" }, { displayName: "oSecond displayName", itemName: "oSecond itemName" }]);
    this.updateDisplay();
  },
    /*
  button6: function () {
    this.updateDisplay();
    // alert(this.ComboBox1.get("items")[0][this.ComboBox1.get("displayFieldName")]);
    // alert(this.ListBox1.get("items")[0][this.ListBox1.get("displayFieldName")]);
  },
    button7: function () {
      alert(this.ComboBox1.get("selectedItem")[this.ComboBox1.get("displayFieldName")]);
      alert(this.ListBox1.get("selectedItem")[this.ListBox1.get("displayFieldName")]);
    },
    button8: function () {
      alert(this.ComboBox1.get("selectedItem")[this.ComboBox1.get("valueFieldName")]);
      alert(this.ListBox1.get("selectedItem")[this.ListBox1.get("valueFieldName")]);
    },
    button9: function () {
      alert(this.ComboBox1.get("selectedValue"));
      alert(this.ListBox1.get("selectedValue"));
    }, */
    button10: function () {
      this.ComboBox1.set("selectedItems", [{ displayName: "Third displayName", itemName: "Third itemName" }]);
      this.ListBox1.set("selectedItems", [{ displayName: "Third displayName", itemName: "Third itemName" }]);
      this.updateDisplay();
    },
    button11: function () {
      this.ComboBox1.set("selectedValue", "Third itemName");
      this.ListBox1.set("selectedValue", "Third itemName");
      this.updateDisplay();
    },
    button12: function () {
      this.ComboBox1.set("selectedItem", { displayName: "Third displayName", itemName: "Third itemName" });
      this.ListBox1.set("selectedItem", { displayName: "Third displayName", itemName: "Third itemName" });
      this.updateDisplay();
    },
    //ListBox only
    button13: function () {
      this.ListBox1.viewModel.rebind(items, null, "Third itemName", "displayName", "itemName", [{ displayName: "First displayName", itemName: "First itemName" }, { displayName: "Third displayName", itemName: "Third itemName" }]);
      this.updateDisplay();
    },
    button14: function () {
      this.ListBox1.viewModel.rebind(items, null, "Third itemName", "displayName", "itemName", null, ["First itemName", "Second itemName"]);
      this.updateDisplay();
    }



    
  });

  return App;
});