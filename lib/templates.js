+function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['ember'], function(Ember) { return factory(Ember); });
  } else if (typeof exports === 'object') {
    factory(require('ember'));
  } else {
    factory(Ember);
  }
}(this, function(Ember) {

Ember.TEMPLATES["components/ic-menu-css"] = Ember.HTMLBars.template((function() {
  return {
    meta: {
      "revision": "Ember@1.13.0-beta.1+canary.a0ae04f7",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 54,
          "column": 0
        }
      }
    },
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createTextNode("ic-menu {\n  display: inline-block;\n}\n\nic-menu-list {\n  position: absolute;\n  display: none;\n}\n\nic-menu-list[aria-expanded=\"true\"] {\n  display: block;\n}\n\nic-menu-list {\n  outline: none;\n  background: #fff;\n  border: 1px solid #aaa;\n  border-radius: 3px;\n  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);\n  list-style-type: none;\n  padding: 2px 0px;\n  font-family: \"Lucida Grande\", \"Arial\", sans-serif;\n  font-size: 12px;\n}\n\nic-menu-item {\n  display: block;\n  padding: 4px 20px;\n  cursor: default;\n  white-space: nowrap;\n}\n\n\nic-menu-item:focus {\n  background: #3879D9;\n  color: #fff;\n  outline: none;\n}\n\nic-menu-item[aria-disabled=\"true\"] {\n  color: #999;\n}\n\nic-menu-item[aria-disabled=\"true\"]:focus {\n  background: #ccc;\n  color: #000;\n}\n\nic-menu-item a {\n  color: inherit;\n  text-decoration: none;\n}\n\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes() { return []; },
    statements: [

    ],
    locals: [],
    templates: []
  };
}()));

Ember.TEMPLATES["components/ic-menu-list"] = Ember.HTMLBars.template((function() {
  return {
    meta: {
      "revision": "Ember@1.13.0-beta.1+canary.a0ae04f7",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 2,
          "column": 0
        }
      }
    },
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["content","yield"]
    ],
    locals: [],
    templates: []
  };
}()));

Ember.TEMPLATES["components/ic-menu"] = Ember.HTMLBars.template((function() {
  return {
    meta: {
      "revision": "Ember@1.13.0-beta.1+canary.a0ae04f7",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 2,
          "column": 0
        }
      }
    },
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["content","yield"]
    ],
    locals: [],
    templates: []
  };
}()));

});