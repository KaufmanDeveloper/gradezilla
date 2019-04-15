'use strict';

define('gradezilla/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('application/adapter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/adapter.js should pass ESLint\n\n');
  });

  QUnit.test('assignment/model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'assignment/model.js should pass ESLint\n\n');
  });

  QUnit.test('assignments/assignment/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'assignments/assignment/route.js should pass ESLint\n\n');
  });

  QUnit.test('assignments/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'assignments/index/controller.js should pass ESLint\n\n');
  });

  QUnit.test('assignments/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'assignments/index/route.js should pass ESLint\n\n');
  });

  QUnit.test('assignments/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'assignments/route.js should pass ESLint\n\n');
  });

  QUnit.test('class/model.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'class/model.js should pass ESLint\n\n');
  });

  QUnit.test('class/service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'class/service.js should pass ESLint\n\n');
  });

  QUnit.test('components/assignment-create/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/assignment-create/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/assignment-list-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/assignment-list-item/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/assignment-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/assignment-list/component.js should pass ESLint\n\n');
  });

  QUnit.test('components/class-selector/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/class-selector/component.js should pass ESLint\n\n');
  });

  QUnit.test('index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'index/controller.js should pass ESLint\n\n');
  });

  QUnit.test('index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'index/route.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define('gradezilla/tests/helpers/ember-keyboard/register-test-helpers', ['exports', 'ember-keyboard', 'ember-keyboard/fixtures/modifiers-array', 'ember-keyboard/fixtures/mouse-buttons-array', 'ember-keyboard/utils/get-cmd-key'], function (exports, _emberKeyboard, _modifiersArray, _mouseButtonsArray, _getCmdKey) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    Ember.Test.registerAsyncHelper('keyDown', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keydown', element);
    });

    Ember.Test.registerAsyncHelper('keyUp', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keyup', element);
    });

    Ember.Test.registerAsyncHelper('keyPress', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keypress', element);
    });

    Ember.Test.registerAsyncHelper('mouseDown', function (app, attributes, element) {
      return keyEvent(app, attributes, 'mousedown', element);
    });

    Ember.Test.registerAsyncHelper('mouseUp', function (app, attributes, element) {
      return keyEvent(app, attributes, 'mouseup', element);
    });

    Ember.Test.registerAsyncHelper('touchStart', function (app, attributes, element) {
      return keyEvent(app, attributes, 'touchstart', element);
    });

    Ember.Test.registerAsyncHelper('touchEnd', function (app, attributes, element) {
      return keyEvent(app, attributes, 'touchend', element);
    });
  };

  const keyEvent = function keyEvent(app, attributes, type, element) {
    const event = (attributes || '').split('+').reduce((event, attribute) => {
      if (_modifiersArray.default.indexOf(attribute) > -1) {
        attribute = attribute === 'cmd' ? (0, _getCmdKey.default)() : attribute;
        event[`${attribute}Key`] = true;
      } else if (_mouseButtonsArray.default.indexOf(attribute) > -1) {
        event.button = (0, _emberKeyboard.getMouseCode)(attribute);
      } else {
        event.keyCode = (0, _emberKeyboard.getKeyCode)(attribute);
      }

      return event;
    }, {});

    return app.testHelpers.triggerEvent(element || document.body, type, event);
  };
});
define('gradezilla/tests/integration/components/assignment-create/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | assignment-create', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "0c+ERoXF",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"assignment-create\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.notEqual(this.element.textContent.trim(), '');
    });
  });
});
define('gradezilla/tests/integration/components/assignment-list-item/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | assignment-list-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "nqOhNTpU",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"assignment-list-item\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');
    });
  });
});
define('gradezilla/tests/integration/components/assignment-list/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | assignment-list', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ExSwnCRR",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"assignment-list\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'Please select a class');
    });
  });
});
define('gradezilla/tests/integration/components/class-selector/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | class-selector', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "lN6fSzrc",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"class-selector\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "khgazuP0",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"class-selector\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('gradezilla/tests/test-helper', ['gradezilla/app', 'gradezilla/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('gradezilla/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/assignment-create/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/assignment-create/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/assignment-list-item/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/assignment-list-item/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/assignment-list/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/assignment-list/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/class-selector/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/class-selector/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/application/adapter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/adapter-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/assignment/model-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/assignment/model-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/assignments/assignment/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/assignments/assignment/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/assignments/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/assignments/controller-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/assignments/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/assignments/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/class/model-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/class/model-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/class/service-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/class/service-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/index/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/index/route-test.js should pass ESLint\n\n');
  });
});
define('gradezilla/tests/unit/application/adapter-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define('gradezilla/tests/unit/assignment/model-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | assignment', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('assignment', {});
      assert.ok(model);
    });
  });
});
define('gradezilla/tests/unit/assignments/assignment/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | assignments/assignment', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:assignments/assignment');
      assert.ok(route);
    });
  });
});
define('gradezilla/tests/unit/assignments/controller-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | assignments', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:assignments');
      assert.ok(controller);
    });
  });
});
define('gradezilla/tests/unit/assignments/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | assignments', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:assignments');
      assert.ok(route);
    });
  });
});
define('gradezilla/tests/unit/class/model-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | class', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('class', {});
      assert.ok(model);
    });
  });
});
define('gradezilla/tests/unit/class/service-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | class', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:class');
      assert.ok(service);
    });
  });
});
define('gradezilla/tests/unit/index/route-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('gradezilla/config/environment', [], function() {
  var prefix = 'gradezilla';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('gradezilla/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
