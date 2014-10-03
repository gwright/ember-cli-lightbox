eval("//# sourceURL=assets/ember-cli/loader.js");

;eval("define(\"dummy/Ember CLI QUnit/tests/Ember CLI QUnit/mixins/light-box.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - Ember CLI QUnit/mixins\');\n    test(\'Ember CLI QUnit/mixins/light-box.js should pass jshint\', function() { \n      ok(true, \'Ember CLI QUnit/mixins/light-box.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/Ember CLI QUnit/tests/Ember CLI QUnit/mixins/light-box.jshint.js");

;eval("define(\"dummy/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"dummy/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    var Resolver = __dependency2__[\"default\"];\n\n    var loadInitializers = __dependency3__[\"default\"];\n\n    var config = __dependency4__[\"default\"];\n\n    \r\n    Ember.MODEL_FACTORY_INJECTIONS = true;\r\n    \r\n    var App = Ember.Application.extend({\r\n      modulePrefix: config.modulePrefix,\r\n      podModulePrefix: config.podModulePrefix,\r\n      Resolver: Resolver\r\n    });\r\n    \r\n    loadInitializers(App, config.modulePrefix);\r\n    \r\n    __exports__[\"default\"] = App;\n  });//# sourceURL=dummy/app.js");

;eval("define(\"dummy/config/environment\", \n  [\"exports\"],\n  function(__exports__) {\n    \"use strict\";\n    __exports__[\"default\"] = {\"modulePrefix\":\"dummy\",\"environment\":\"development\",\"baseURL\":\"/\",\"locationType\":\"auto\",\"EmberENV\":{\"FEATURES\":{}},\"APP\":{\"LOG_ACTIVE_GENERATION\":true,\"LOG_VIEW_LOOKUPS\":true}};\n  });//# sourceURL=dummy/config/environment.js");

;eval("define(\"dummy/components/code-snippet\", \n  [\"ember\",\"dummy/snippets\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Snippets = __dependency2__[\"default\"];\n\n    /* global require */\n    var Highlight = require(\'highlight.js\');\n\n    __exports__[\"default\"] = Ember.Component.extend({\n      tagName: \'pre\',\n      classNameBindings: [\'language\'],\n      unindent: true,\n\n      _unindent: function(src) {\n        if (!this.get(\'unindent\')) {\n          return src;\n        }\n        var match, min, lines = src.split(\"\\n\");\n        for (var i = 0; i < lines.length; i++) {\n          match = /^\\s*/.exec(lines[i]);\n          if (match && (typeof min === \'undefined\' || min > match[0].length)) {\n            min = match[0].length;\n          }\n        }\n        if (typeof min !== \'undefined\' && min > 0) {\n          src = src.replace(new RegExp(\"(\\\\n|^)\\\\s{\" + min + \"}\", \'g\'), \"$1\");\n        }\n        return src;\n      },\n\n      source: function(){\n        return this._unindent(\n          (Snippets[this.get(\'name\')] || \"\")\n            .replace(/^(\\s*\\n)*/, \'\')\n            .replace(/\\s*$/, \'\')\n        );\n      }.property(\'name\'),\n\n      didInsertElement: function(){\n        Highlight.highlightBlock(this.get(\'element\'));\n      },\n\n      language: function(){\n        var m = /\\.(\\w+)$/i.exec(this.get(\'name\'));\n        if (m) {\n          switch (m[1].toLowerCase()) {\n          case \'js\':\n            return \'javascript\';\n          case \'hbs\':\n            return \'handlebars\';\n          }\n        }\n      }.property(\'name\')\n    });\n  });//# sourceURL=dummy/components/code-snippet.js");

;eval("define(\"dummy/snippets\", \n  [\"exports\"],\n  function(__exports__) {\n    \"use strict\";\n    __exports__[\"default\"] = { \"1.hbs\":\"{{light-box href=\\\"assets/images/1.jpg\\\" data-lightbox=\\\"cat-1\\\" data-title=\\\"Cat 1\\\"}}\\r\\n\\r\\n{{light-box href=\\\"assets/images/2.jpg\\\" data-lightbox=\\\"cat-2\\\" data-title=\\\"Cat 2\\\"}}\\r\\n\",\n      \"2.hbs\":\"{{#light-box href=\\\"assets/images/3.jpg\\\" data-lightbox=\\\"cat-3\\\" data-title=\\\"Cat 3\\\" inlineImage=false}}\\r\\n    Cat 4\\r\\n{{/light-box}}\\r\\n\\r\\n{{#light-box href=\\\"assets/images/4.jpg\\\" data-lightbox=\\\"cat-4\\\" data-title=\\\"Cat 4\\\" inlineImage=false}}\\r\\n    Cat5\\r\\n{{/light-box}}\\r\\n\",\n      usage:\"npm install ember-cli-lightbox --save\\r\\nember g ember-cli-lightbox\\r\\n\",\n      \"3.hbs\":\"{{light-box href=\\\"assets/images/5.jpg\\\" data-lightbox=\\\"cats-group\\\" data-title=\\\"Cat 5\\\"}}\\r\\n\\r\\n{{#light-box href=\\\"assets/images/6.jpg\\\" data-lightbox=\\\"cats-group\\\" data-title=\\\"Cat 6\\\" inlineImage=false}}\\r\\n    Cat 6\\r\\n{{/light-box}}\\r\\n\\r\\n{{light-box href=\\\"assets/images/7.jpg\\\" data-lightbox=\\\"cats-group\\\" data-title=\\\"Cat 7\\\"}}\\r\\n\\r\\n{{#light-box href=\\\"assets/images/8.jpg\\\" data-lightbox=\\\"cats-group\\\" data-title=\\\"Cat 8\\\" inlineImage=false}}\\r\\n    Cat 8\\r\\n{{/light-box}}\\r\\n\" };\n  });//# sourceURL=dummy/snippets.js");

;eval("define(\"dummy/components/light-box\", \n  [\"ember\",\"ember-cli-lightbox/mixins/light-box\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    var LightBoxMixin = __dependency2__[\"default\"];\n\n    \r\n    __exports__[\"default\"] = Ember.Component.extend(LightBoxMixin, {\r\n        \r\n    });\n  });//# sourceURL=dummy/components/light-box.js");

;eval("define(\"dummy/config/environments/development\", \n  [\"exports\"],\n  function(__exports__) {\n    \"use strict\";\n    __exports__[\"default\"] = {\"modulePrefix\":\"dummy\",\"environment\":\"development\",\"baseURL\":\"/\",\"locationType\":\"auto\",\"EmberENV\":{\"FEATURES\":{}},\"APP\":{\"LOG_ACTIVE_GENERATION\":true,\"LOG_VIEW_LOOKUPS\":true}};\n  });//# sourceURL=dummy/config/environments/development.js");

;eval("define(\"dummy/config/environments/test\", \n  [\"exports\"],\n  function(__exports__) {\n    \"use strict\";\n    __exports__[\"default\"] = {\"modulePrefix\":\"dummy\",\"environment\":\"test\",\"baseURL\":\"/\",\"locationType\":\"auto\",\"EmberENV\":{\"FEATURES\":{}},\"APP\":{\"LOG_ACTIVE_GENERATION\":false,\"LOG_VIEW_LOOKUPS\":false,\"rootElement\":\"#ember-testing\"}};\n  });//# sourceURL=dummy/config/environments/test.js");

;eval("define(\"dummy/ember-cli-lightbox/tests/ember-cli-lightbox/mixins/light-box.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - ember-cli-lightbox/mixins\');\n    test(\'ember-cli-lightbox/mixins/light-box.js should pass jshint\', function() { \n      ok(true, \'ember-cli-lightbox/mixins/light-box.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/ember-cli-lightbox/tests/ember-cli-lightbox/mixins/light-box.jshint.js");

;eval("define(\"dummy/ember-data/tests/ember-data/mixins/light-box.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - ember-data/mixins\');\n    test(\'ember-data/mixins/light-box.js should pass jshint\', function() { \n      ok(true, \'ember-data/mixins/light-box.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/ember-data/tests/ember-data/mixins/light-box.jshint.js");

;eval("define(\"dummy/live-reload-middleware/tests/live-reload-middleware/mixins/light-box.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - live-reload-middleware/mixins\');\n    test(\'live-reload-middleware/mixins/light-box.js should pass jshint\', function() { \n      ok(true, \'live-reload-middleware/mixins/light-box.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/live-reload-middleware/tests/live-reload-middleware/mixins/light-box.jshint.js");

;eval("define(\"dummy/router\", \n  [\"ember\",\"dummy/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    var config = __dependency2__[\"default\"];\n\n    \r\n    var Router = Ember.Router.extend({\r\n      location: config.locationType\r\n    });\r\n    \r\n    Router.map(function() {\r\n    });\r\n    \r\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=dummy/router.js");

;eval("define(\"dummy/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;\n\n    function program1(depth0,data) {\n      \n      \n      data.buffer.push(\"\\r\\n            Cat 4\\r\\n        \");\n      }\n\n    function program3(depth0,data) {\n      \n      \n      data.buffer.push(\"\\r\\n            Cat5\\r\\n        \");\n      }\n\n    function program5(depth0,data) {\n      \n      \n      data.buffer.push(\"\\r\\n            Cat 6\\r\\n        \");\n      }\n\n    function program7(depth0,data) {\n      \n      \n      data.buffer.push(\"\\r\\n            Cat 8\\r\\n        \");\n      }\n\n      data.buffer.push(\"<div class=\\\"github-fork-ribbon-wrapper right\\\">\\r\\n    <div class=\\\"github-fork-ribbon\\\">\\r\\n        <a href=\\\"https://github.com/ramybenaroya/ember-cli-lightbox\\\">Fork me on GitHub</a>\\r\\n    </div>\\r\\n</div>\\r\\n<h1>Ember CLI Addon for <a href=\\\"http://lokeshdhakar.com/projects/lightbox2/\\\">Lightbox2</a></h1>\\r\\n<section>\\r\\n    <h2>Installation</h2>\\r\\n    \");\n      data.buffer.push(escapeExpression((helper = helpers[\'code-snippet\'] || (depth0 && depth0[\'code-snippet\']),options={hash:{\n        \'name\': (\"usage\")\n      },hashTypes:{\'name\': \"STRING\"},hashContexts:{\'name\': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"code-snippet\", options))));\n      data.buffer.push(\"\\r\\n</section>\\r\\n<section>\\r\\n    <h2>Usage Examples</h2>\\r\\n    <section>\\r\\n        <h2>Individual Clickable Images</h2>\\r\\n        \");\n      data.buffer.push(escapeExpression((helper = helpers[\'light-box\'] || (depth0 && depth0[\'light-box\']),options={hash:{\n        \'href\': (\"assets/images/1.jpg\"),\n        \'data-lightbox\': (\"cat-1\"),\n        \'data-title\': (\"Cat 1\")\n      },hashTypes:{\'href\': \"STRING\",\'data-lightbox\': \"STRING\",\'data-title\': \"STRING\"},hashContexts:{\'href\': depth0,\'data-lightbox\': depth0,\'data-title\': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"light-box\", options))));\n      data.buffer.push(\"\\r\\n        \");\n      data.buffer.push(escapeExpression((helper = helpers[\'light-box\'] || (depth0 && depth0[\'light-box\']),options={hash:{\n        \'href\': (\"assets/images/2.jpg\"),\n        \'data-lightbox\': (\"cat-2\"),\n        \'data-title\': (\"Cat 2\")\n      },hashTypes:{\'href\': \"STRING\",\'data-lightbox\': \"STRING\",\'data-title\': \"STRING\"},hashContexts:{\'href\': depth0,\'data-lightbox\': depth0,\'data-title\': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"light-box\", options))));\n      data.buffer.push(\"\\r\\n        <hr/>\\r\\n        <h4>Code</h4>\\r\\n        \");\n      data.buffer.push(escapeExpression((helper = helpers[\'code-snippet\'] || (depth0 && depth0[\'code-snippet\']),options={hash:{\n        \'name\': (\"1.hbs\")\n      },hashTypes:{\'name\': \"STRING\"},hashContexts:{\'name\': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"code-snippet\", options))));\n      data.buffer.push(\"\\r\\n    </section>\\r\\n    <section>\\r\\n        <h2>Individual Clickable Links</h2>\\r\\n        \");\n      stack1 = (helper = helpers[\'light-box\'] || (depth0 && depth0[\'light-box\']),options={hash:{\n        \'href\': (\"assets/images/3.jpg\"),\n        \'data-lightbox\': (\"cat-3\"),\n        \'data-title\': (\"Cat 3\"),\n        \'inlineImage\': (false)\n      },hashTypes:{\'href\': \"STRING\",\'data-lightbox\': \"STRING\",\'data-title\': \"STRING\",\'inlineImage\': \"BOOLEAN\"},hashContexts:{\'href\': depth0,\'data-lightbox\': depth0,\'data-title\': depth0,\'inlineImage\': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"light-box\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\r\\n        \");\n      stack1 = (helper = helpers[\'light-box\'] || (depth0 && depth0[\'light-box\']),options={hash:{\n        \'href\': (\"assets/images/4.jpg\"),\n        \'data-lightbox\': (\"cat-4\"),\n        \'data-title\': (\"Cat 4\"),\n        \'inlineImage\': (false)\n      },hashTypes:{\'href\': \"STRING\",\'data-lightbox\': \"STRING\",\'data-title\': \"STRING\",\'inlineImage\': \"BOOLEAN\"},hashContexts:{\'href\': depth0,\'data-lightbox\': depth0,\'data-title\': depth0,\'inlineImage\': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"light-box\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\r\\n        <hr/>\\r\\n        <h4>Code</h4>\\r\\n        \");\n      data.buffer.push(escapeExpression((helper = helpers[\'code-snippet\'] || (depth0 && depth0[\'code-snippet\']),options={hash:{\n        \'name\': (\"2.hbs\")\n      },hashTypes:{\'name\': \"STRING\"},hashContexts:{\'name\': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"code-snippet\", options))));\n      data.buffer.push(\"\\r\\n    </section>\\r\\n    <section class=\'special\'>\\r\\n        <h2>Grouped Images & Links</h2>\\r\\n        \");\n      data.buffer.push(escapeExpression((helper = helpers[\'light-box\'] || (depth0 && depth0[\'light-box\']),options={hash:{\n        \'href\': (\"assets/images/5.jpg\"),\n        \'data-lightbox\': (\"cats-group\"),\n        \'data-title\': (\"Cat 5\")\n      },hashTypes:{\'href\': \"STRING\",\'data-lightbox\': \"STRING\",\'data-title\': \"STRING\"},hashContexts:{\'href\': depth0,\'data-lightbox\': depth0,\'data-title\': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"light-box\", options))));\n      data.buffer.push(\"\\r\\n        \");\n      stack1 = (helper = helpers[\'light-box\'] || (depth0 && depth0[\'light-box\']),options={hash:{\n        \'href\': (\"assets/images/6.jpg\"),\n        \'data-lightbox\': (\"cats-group\"),\n        \'data-title\': (\"Cat 6\"),\n        \'inlineImage\': (false)\n      },hashTypes:{\'href\': \"STRING\",\'data-lightbox\': \"STRING\",\'data-title\': \"STRING\",\'inlineImage\': \"BOOLEAN\"},hashContexts:{\'href\': depth0,\'data-lightbox\': depth0,\'data-title\': depth0,\'inlineImage\': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"light-box\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\r\\n        \");\n      data.buffer.push(escapeExpression((helper = helpers[\'light-box\'] || (depth0 && depth0[\'light-box\']),options={hash:{\n        \'href\': (\"assets/images/7.jpg\"),\n        \'data-lightbox\': (\"cats-group\"),\n        \'data-title\': (\"Cat 7\")\n      },hashTypes:{\'href\': \"STRING\",\'data-lightbox\': \"STRING\",\'data-title\': \"STRING\"},hashContexts:{\'href\': depth0,\'data-lightbox\': depth0,\'data-title\': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"light-box\", options))));\n      data.buffer.push(\"\\r\\n        \");\n      stack1 = (helper = helpers[\'light-box\'] || (depth0 && depth0[\'light-box\']),options={hash:{\n        \'href\': (\"assets/images/8.jpg\"),\n        \'data-lightbox\': (\"cats-group\"),\n        \'data-title\': (\"Cat 8\"),\n        \'inlineImage\': (false)\n      },hashTypes:{\'href\': \"STRING\",\'data-lightbox\': \"STRING\",\'data-title\': \"STRING\",\'inlineImage\': \"BOOLEAN\"},hashContexts:{\'href\': depth0,\'data-lightbox\': depth0,\'data-title\': depth0,\'inlineImage\': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"light-box\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\r\\n        <hr/>\\r\\n        <h4>Code</h4>\\r\\n        \");\n      data.buffer.push(escapeExpression((helper = helpers[\'code-snippet\'] || (depth0 && depth0[\'code-snippet\']),options={hash:{\n        \'name\': (\"3.hbs\")\n      },hashTypes:{\'name\': \"STRING\"},hashContexts:{\'name\': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"code-snippet\", options))));\n      data.buffer.push(\"\\r\\n    </section>\\r\\n</section>\\r\\n\\r\\n\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\r\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=dummy/templates/application.js");

;eval("define(\"dummy/templates/components/code-snippet\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      stack1 = helpers._triageMustache.call(depth0, \"source\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=dummy/templates/components/code-snippet.js");

;eval("define(\"dummy/templates/components/light-box\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, escapeExpression=this.escapeExpression, self=this;\n\n    function program1(depth0,data) {\n      \n      var buffer = \'\';\n      data.buffer.push(\"<img \");\n      data.buffer.push(escapeExpression(helpers[\'bind-attr\'].call(depth0, {hash:{\n        \'src\': (\"href\")\n      },hashTypes:{\'src\': \"ID\"},hashContexts:{\'src\': depth0},contexts:[],types:[],data:data})));\n      data.buffer.push(\" \");\n      data.buffer.push(escapeExpression(helpers[\'bind-attr\'].call(depth0, {hash:{\n        \'title\': (\"data-title\")\n      },hashTypes:{\'title\': \"ID\"},hashContexts:{\'title\': depth0},contexts:[],types:[],data:data})));\n      data.buffer.push(\"/>\");\n      return buffer;\n      }\n\n      stack1 = helpers[\'if\'].call(depth0, \"inlineImage\", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      stack1 = helpers._triageMustache.call(depth0, \"yield\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\r\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=dummy/templates/components/light-box.js");

;eval("define(\"dummy/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(true, \'app.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/tests/app.jshint.js");

;eval("define(\"dummy/tests/dummy/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - dummy/tests/helpers\');\n    test(\'dummy/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'dummy/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/tests/dummy/tests/helpers/resolver.jshint.js");

;eval("define(\"dummy/tests/dummy/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - dummy/tests/helpers\');\n    test(\'dummy/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'dummy/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/tests/dummy/tests/helpers/start-app.jshint.js");

;eval("define(\"dummy/tests/dummy/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - dummy/tests\');\n    test(\'dummy/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'dummy/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/tests/dummy/tests/test-helper.jshint.js");

;eval("define(\"dummy/tests/helpers/resolver\", \n  [\"ember/resolver\",\"dummy/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n\n    var config = __dependency2__[\"default\"];\n\n    \r\n    var resolver = Resolver.create();\r\n    \r\n    resolver.namespace = {\r\n      modulePrefix: config.modulePrefix,\r\n      podModulePrefix: config.podModulePrefix\r\n    };\r\n    \r\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=dummy/tests/helpers/resolver.js");

;eval("define(\"dummy/tests/helpers/start-app\", \n  [\"ember\",\"dummy/app\",\"dummy/router\",\"dummy/config/environments/test\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    var Application = __dependency2__[\"default\"];\n\n    var Router = __dependency3__[\"default\"];\n\n    var config = __dependency4__[\"default\"];\n\n    \r\n    __exports__[\"default\"] = function startApp(attrs) {\r\n      var App;\r\n    \r\n      var attributes = Ember.merge({}, config.APP);\r\n      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\r\n    \r\n      Router.reopen({\r\n        location: \'none\'\r\n      });\r\n    \r\n      Ember.run(function() {\r\n        App = Application.create(attributes);\r\n        App.setupForTesting();\r\n        App.injectTestHelpers();\r\n      });\r\n    \r\n      App.reset(); // this shouldn\'t be needed, i want to be able to \"start an app at a specific URL\"\r\n    \r\n      return App;\r\n    }\n  });//# sourceURL=dummy/tests/helpers/start-app.js");

;eval("define(\"dummy/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(true, \'router.js should pass jshint.\'); \n    });\n  });//# sourceURL=dummy/tests/router.jshint.js");

;eval("define(\"dummy/tests/test-helper\", \n  [\"dummy/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n\n    var setResolver = __dependency2__.setResolver;\n\n    \r\n    setResolver(resolver);\r\n    \r\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\r\n    \r\n    QUnit.config.urlConfig.push({ id: \'nocontainer\', label: \'Hide container\'});\r\n    if (QUnit.urlParams.nocontainer) {\r\n      document.getElementById(\'ember-testing-container\').style.visibility = \'hidden\';\r\n    } else {\r\n      document.getElementById(\'ember-testing-container\').style.visibility = \'visible\';\r\n    }\n  });//# sourceURL=dummy/tests/test-helper.js");
