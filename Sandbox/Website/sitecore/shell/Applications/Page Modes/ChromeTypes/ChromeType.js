﻿if (typeof(Sitecore.PageModes) == "undefined") Sitecore.PageModes = new Object();
if (typeof(Sitecore.PageModes.ChromeTypes) == "undefined") Sitecore.PageModes.ChromeTypes = new Object();

Sitecore.PageModes.ChromeTypes.ChromeType = Base.extend({
  constructor: function() {
    this._isReadOnly = false;
  },

  controlId: function() {
    return this.chrome.element.attr("id");
  },
  
  dataNode: function(domElement) {
    if (!domElement) {
      console.warn("no dom element");
    }

    if (domElement.is("code[type='text/sitecore']")) {
      return domElement;
    }

    return domElement.children(".scChromeData");
  },

  elements: function(domElement) {
    return { opening: null, content: domElement, closing: null};
  },
   
  // Return values:
  // * null - the ribbon context item shouldn't be changed
  // * "" - the ribbon context item should be changed to the one of the whole page
  // * non-empty string - the context item should be changed to the one specified by the string uri 
  getContextItemUri: function () {
    var uri = this.chrome.data.contextItemUri;
    return uri == null ? "" : uri;
  },
      
  handleMessage: function(message, params, sender) {
  },

  delegateMessageHandling: function(sender, recipient, message, params)
  {
    if (recipient) {
      recipient.handleMessage(message, params, sender);
    }
    else {
      console.error("delegated message handler not found");
    }
  },
    
  icon: function() {
    return '/sitecore/shell/~/icon/ApplicationsV2/16x16/bullet_square_glass_blue.png.aspx';
  },

  isEnabled: function() {
    return this.chrome && this.chrome.hasDataNode;
  },

  isReadOnly: function() {
    return this._isReadOnly;
  },

  setReadOnly: function() {
    this._isReadOnly = true;
  },

  key: function() {
    return "override chrometype type key";
  },
    
  layoutRoot: function() {        
    return this.chrome.element;
  },

  onShow: function() {
  },

  onHide: function() {
  },
  
  onDelete: function(preserveData) {
    var childChromes = this.chrome.getChildChromes(function() { return this != null;});
    $sc.each(childChromes, function() { this.onDelete(preserveData); });
  },
  
  _getElementsBetweenScriptTags: function(openingScriptNode) {
    var result = new Array();

    var currentNode = openingScriptNode.next();
    
    while(currentNode && !currentNode.is("code[type='text/sitecore'][kind='close'][chromeType='" + this.key() + "']")) {      
      //field value inputs (with scFieldValue class) are moved from their original dom poisition into special "scFieldValue" container.
      //Considering them as part of chrome will cause problems with chrome hierarchies. 
      if (!currentNode.is("code[type='text/sitecore']") && !currentNode.hasClass("scFieldValue")) {
        result.push(currentNode.get(0));
      }

      currentNode = currentNode.next();

      if (currentNode.length == 0) {
        console.error("Malformed page editor <script></script> tags - closing tag not found. Opening tag:");
        console.log(openingScriptNode);
        throw "Failed to parse page editor element demarked by script tags";
      }
    }

    return { opening: openingScriptNode, content:$sc(result), closing: currentNode };
  }
});
