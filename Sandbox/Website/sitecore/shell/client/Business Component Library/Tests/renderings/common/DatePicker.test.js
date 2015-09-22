require(["jasmineEnv", "/-/speak/v1/business/datepicker.js"], function (jasmineEnv) {
  var setupTests = function (testAreaEl) {
    "use strict";

    describe("Given a DatePicker model", function () {
      var datePicker = new Sitecore.Definitions.Models.DatePicker();

      describe("when I create a DatePicker model", function () {
        it("it should have isVisible property", function () {
          expect(datePicker.get("isVisible")).toBeDefined();
        });

        it("it should set isVisible to true by default", function () {
          expect(datePicker.get("isVisible")).toBe(true);
        });
        
        it("it should have isEnabled property", function () {
          expect(datePicker.get("isEnabled")).toBeDefined();
        });

        it("it should set isEnabled to true by default", function () {
          expect(datePicker.get("isEnabled")).toBe(true);
        });
        
        it("it should have isReadOnly property", function () {
          expect(datePicker.get("isReadOnly")).toBeDefined();
        });

        it("it should set isReadOnly to false by default", function () {
          expect(datePicker.get("isReadOnly")).toBe(false);
        });
        
        it("it should have showOtherMonths property", function () {
          expect(datePicker.get("showOtherMonths")).toBeDefined();
        });

        it("it should set showOtherMonths to false by default", function () {
          expect(datePicker.get("showOtherMonths")).toBe(false);
        });
        
        it("it should have dateFormat property", function () {
          expect(datePicker.get("dateFormat")).toBeDefined();
        });

        it("it should set dateFormat to null by default", function () {
          expect(datePicker.get("dateFormat")).toBeNull();
        });
        
        it("it should have formattedDate property", function () {
          expect(datePicker.get("formattedDate")).toBeDefined();
        });

        it("it should set formattedDate to null by default", function () {
          expect(datePicker.get("formattedDate")).toBeNull();
        });
        
        it("it should have date property", function () {
          expect(datePicker.get("date")).toBeDefined();
        });

        it("it should set date to null by default", function () {
          expect(datePicker.get("date")).toBeNull();
        });
        
        it("it should have firstDay property", function () {
          expect(datePicker.get("firstDay")).toBeDefined();
        });

        it("it should set firstDay to 1 by default", function () {
          expect(datePicker.get("firstDay")).toBe(1);
        });

      });


      describe("Given a DatePicker Control", function () {
        var model1, model2,
            $element1, $element2,
            testAreaApp,
            app,
            appNumber = 0,
            nodeApp;

        beforeEach(function () {
          nodeApp = testAreaEl.clone(true);
          nodeApp.attr("id", testAreaEl.attr("id") + appNumber);

          nodeApp.appendTo($("body"));
          testAreaApp = _sc.Factories.createApp(testAreaEl.attr("id") + appNumber);
          appNumber++;

          model1 = testAreaApp.DatePickerTest1;
          model2 = testAreaApp.DatePickerTest2;

          $element1 = nodeApp.find('[data-sc-id="DatePickerTest1"]');
          $element2 = nodeApp.find('[data-sc-id="DatePickerTest2"]');

          app = testAreaApp;
        });

        afterEach(function () {
          nodeApp.hide();
        });

        it("it should create the control when I execute Run", function () {
          expect(app.DatePickerTest1).toBeDefined();
          expect(app.DatePickerTest2).toBeDefined();
          expect($(".ui-datepicker").hasClass("sc-datepicker-dropdown")).toBe(true);
        });

        it("it should have the viewModel to be defined inside the model", function () {
          expect(model1.viewModel).toBeDefined();
          expect(model2.viewModel).toBeDefined();
        });

        it("it should be disabled when I set isEnabled to false", function () {
          expect(model1.get("isEnabled")).toEqual(true);
          expect($element1.is(":disabled")).toEqual(false);
          model1.set("isEnabled", false);
          expect(model1.get("isEnabled")).toEqual(false);
          expect($element1.is(":disabled")).toEqual(true);
        });

        it("it shouldn't appear when I set isVisible property to false", function () {
          expect(model1.get("isVisible")).toEqual(true);
          expect($element1.is(":visible")).toEqual(true);
          model1.set("isVisible", false);
          expect($element1.is(":visible")).toEqual(false);
        });

        it("it should be isReadOnly when I set isReadOnly to true", function () {
          expect(model1.get("isReadOnly")).toEqual(false);
          expect($element1.is(":read-only")).toEqual(false);
          model1.set("isReadOnly", true);
          expect(model1.get("isReadOnly")).toEqual(true);
          expect($element1.is(":read-only")).toEqual(true);
        });

        it("it should change showOtherMonths property when I set it to true", function () {
          expect($element2.data("showothermonths")).toEqual(true);
          model2.set("showOtherMonths", false);
          expect(model2.get("showOtherMonths")).toEqual(false);
        });

        it("it should change firstDay property  when I set it to 1", function () {
          expect(model2.get("firstDay")).toEqual(3);
          model2.set("firstDay", 1);
          expect(model2.get("firstDay")).toEqual(1);
        });

        it("it should change formattedDate property  when I set it to 10/10/2013", function () {
          expect(model2.get("formattedDate")).toEqual("9/11/2010");
          model2.set("formattedDate", "10/10/2013");
          expect(model2.get("formattedDate")).toEqual("10/10/2013");
          expect($(".ui-datepicker").find('.ui-datepicker-current-day a').html()).toBe("10");
          expect($(".ui-datepicker").find('.ui-datepicker-year').html()).toBe("2013");
        });
        
        it("it should change formattedDate and date property when I set formattedDate to 03/02/2014", function () {
          model2.viewModel.setDateFormat("dd/mm/yyyy");
          model2.set("formattedDate", "10/10/2013");
          expect(model2.get("formattedDate")).toEqual("10/10/2013");
          expect(model2.get("date")).toEqual("20131010T000000");
          model2.set("formattedDate", "03/02/2014");
          expect(model2.get("date")).toEqual("20140203T000000");
          expect(model2.get("formattedDate")).toEqual("03/02/2014");
        });
        
        it("it should change date property  when I set it to 20140203", function () {
          model2.viewModel.setDateFormat("dd/mm/yyyy");
          model2.set("formattedDate", "10/10/2013");
          expect(model2.get("formattedDate")).toEqual("10/10/2013");
          model2.set("date", "20140203");
          expect(model2.get("formattedDate")).toEqual("03/02/2014");
          expect($(".ui-datepicker").find('.ui-datepicker-current-day a').html()).toBe("3");
          expect($(".ui-datepicker").find('.ui-datepicker-year').html()).toBe("2014");
        });
        
        it("it should change date and formattedDate property when I set date to 20140203", function () {
          model2.viewModel.setDateFormat("dd/mm/yyyy");
          model2.set("formattedDate", "10/10/2013");
          expect(model2.get("formattedDate")).toEqual("10/10/2013");
          expect(model2.get("date")).toEqual("20131010T000000");
          model2.set("date", "20140203");
          expect(model2.get("date")).toEqual("20140203T000000");
          expect(model2.get("formattedDate")).toEqual("03/02/2014");
        });

        it("it should change dateFormat property  when I set it to dd-mm-yyyy", function () {
          expect(model2.get("dateFormat")).toEqual("d/mm/yy");
          model2.set("dateFormat", "dd-mm-yy");
          expect(model2.get("dateFormat")).toEqual("dd-mm-yy");
        });

        it("it should have the show method to be defined inside viewModel", function () {
          model1.viewModel.show();
          expect($(".ui-datepicker").is(":visible")).toEqual(true);
        });

        it("it should have the hide method to be defined inside viewModel", function () {
          model1.viewModel.show();
          model1.viewModel.hide();
          expect($(".ui-datepicker").is(":visible")).toEqual(false);
        });

        it("it should have the isDisabled method to be defined inside viewModel, which determines whether a date picker has been disabled", function () {
          expect(model1.viewModel.isDisabled()).toBe(false);
          expect(model2.viewModel.isDisabled()).toBe(false);
        });

        it("it should have the dialog method to be defined inside viewModel, which should open datepicker dialog window with date 1/1/2014 inside", function () {
          model1.viewModel.dialog("1/1/2014");
          expect($(".ui-datepicker").is(":visible")).toEqual(true);

          $element1.focus(); // hide input element generated by jquery ui
          model1.viewModel.hide();
          $(".ui-datepicker").hide();
        });
        
        it("it should have the getDate method to be defined inside viewModel, which should have year = 2010, day = 10, month = 8", function () {
          var date = new Date(model2.viewModel.getDate());
          expect(date).not.toBe(null);    
          expect(date.getFullYear()).toBe(2010);
          expect(date.getMonth()).toBe(10);
          expect(date.getUTCDate()).toBe(8);
        });
       
        it("it should have the setDate method to be defined inside viewModel, which should change year to 2014, day to 0, month to 0", function () {
          var date = new Date(model2.viewModel.getDate());
          expect(date).not.toBe(null);

          date.setFullYear(2014);
          date.setUTCDate(1);
          date.setMonth(1);

          expect(date.getFullYear()).toBe(2014);
          expect(date.getUTCDate()).toBe(1);
          expect(date.getMonth()).toBe(1);
          model2.viewModel.setDate("1/1/2014");
          expect(model2.viewModel.setDate("1/1/2014"));
        });
        
        it("it should have the widget method to be defined inside viewModel, which should return a jQuery object containing the datepicker", function () {
          var wg = model1.viewModel.widget();
          expect(wg.$el.hasClass("sc-datepicker")).toBe(true);
        });
        
        it("it should have the onSelect method, which should change date property", function () {
          var date = "1/01/2014";
          $element2.val(date);
          model2.viewModel.onSelect();
          expect($element2.val()).toBe(date);
        });
        
        it("it should have the setFormattedDateAttribute method, which should change the 'formattedDate' property", function () {
          var expectedFormatedDate = "20/02/2014";

          expect(model2.viewModel.setFormattedDateAttribute).toBeDefined();

          model2.set("date", "20140220T000000");
          model2.viewModel.setFormattedDateAttribute();

          expect(model2.get("formattedDate")).toBe(expectedFormatedDate);
          expect($element2.val()).toBe(expectedFormatedDate);
        });
        
        it("it should have the setDateAttribute method, which should change the 'date' if the element value differs", function () {
          expect(model2.viewModel.setDateAttribute).toBeDefined();

          var originalDate = model2.viewModel.getDate();

          model2.viewModel.setDateAttribute();

          expect(model2.get("date")).toBe(model2.viewModel.convertToISODate(originalDate));

          $element2.val("25/03/2014");

          model2.viewModel.setDateAttribute();

          expect(model2.get("date")).toBe("20140325T000000");
        });
        
        it("it should have the removeTicks method, which should return '20140131T075138' given the parameter '20140131T075138:635267514980943182'", function () {
          expect(model2.viewModel.removeTicks).toBeDefined();
          expect(model2.viewModel.removeTicks("20140131T075138:635267514980943182")).toBe("20140131T075138");
        });
        
        it("it should have the convertDate method, which should return '31/01/2014' given the parameters '20140131T075138', 'dd/mm/yyyy'", function () {
          expect(model2.viewModel.convertDate).toBeDefined();
          expect(model2.viewModel.convertDate("20140131T075138", "dd/mm/yyyy")).toBe("31/01/2014");
        });
        
        it("it should have the convertToISODate method, which should return '20140303T000000' when giving a Date(2014, 1, 31) object", function () {
          expect(model2.viewModel.convertToISODate).toBeDefined();
          expect(model2.viewModel.convertToISODate(new Date(2014, 1, 31))).toBe("20140303T000000");
        });
        
        it("it should have the setLocalization method, which adds a 'jasmineTest' property to the model when the data-localization attribute on the element has a JSON object with a 'jasmineTest' property", function () {
          expect(model2.viewModel.setLocalization).toBeDefined();

          $element2.attr("data-localization", JSON.stringify({ jasmineTest: true }));
          model2.viewModel.setLocalization();

          expect(model2.get("jasmineTest")).toBeDefined();
        });
        
        it("it should have the overWriteSetDateMethod method, which updates the 'formattedDate' property and executes the original 'setDate' method", function () {
          expect(model2.viewModel.overWriteSetDateMethod).toBeDefined();

          model2.viewModel.setDate("04/02/2014");
          
          expect(model2.get("formattedDate")).toBe("4/02/2014");
        });
        
        describe("it should have the setDateFormat method", function () {
          it("to be defined inside Viewmodel", function () {
            expect(model2.viewModel.setDateFormat).toBeDefined();
          });

          it("which sets dateFormat to yy/mm/dd using the parameter yyyy/mm/dd", function () {
            model2.viewModel.setDateFormat("yyyy/mm/dd");
            expect(model2.get("dateFormat")).toBe("yy/mm/dd");
          });

          it("which sets dateFormat to y/mm/dd using the parameter yy/mm/dd", function () {
            model2.viewModel.setDateFormat("yy/mm/dd");
            expect(model2.get("dateFormat")).toBe("y/mm/dd");
          });
        });
        
      });
    });
  };

  runTests(jasmineEnv, setupTests, "DatePicker.htm");
});


