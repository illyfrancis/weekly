/*global sinon*/
var Frequency = require('../../../../../src/main/js/models/criteria/frequency');
var FrequencyFilter = require('../../../../../src/main/js/views/filters/frequencyFilter');

var assert = require('assert');

describe('FrequencyFilter', function () {

  var filter, frequency;

  beforeEach(function () {
    frequency = new Frequency({
      'id': 'frequency'
    });

    filter = new FrequencyFilter({
      model: frequency
    });
  });

  it('has selectable options', function () {
    assert.deepEqual(filter.selectionOptions(), ['Daily', 'Weekly', 'Monthly', 'Yearly', 'Trigger']);
  });

  it('uses selectable options when render', function () {
    sinon.spy(filter, 'selectionOptions');
    filter.render();

    assert(filter.selectionOptions.calledOnce);
    assert.deepEqual(filter.selectionOptions.returnValues[0], ['Daily', 'Weekly', 'Monthly', 'Yearly', 'Trigger']);
  });

  it('sets filter value when selection changes', function () {
    sinon.spy(frequency, 'setFilter');

    filter.render();
    filter.$('select').trigger('change');

    assert(frequency.setFilter.calledOnce);
  });

});
