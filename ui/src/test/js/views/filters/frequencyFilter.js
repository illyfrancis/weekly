/*global sinon*/
var Frequency = require('../../../../../src/main/js/models/criteria/frequency');
var FrequencyFilter = require('../../../../../src/main/js/views/filters/frequencyFilter');

var assert = require('assert');

describe('FrequencyFilter', function () {

  var filter, frequency;

  beforeEach(function () {

    sinon.stub(FrequencyFilter.prototype, 'renderSelected');
    sinon.spy(FrequencyFilter.prototype, 'selectionOptions');
    sinon.spy(Frequency.prototype, 'setFilter');

    frequency = new Frequency({
      'id': 'frequency'
    });

    filter = new FrequencyFilter({
      model: frequency
    });
  });

  afterEach(function () {
    FrequencyFilter.prototype.renderSelected.restore();
    FrequencyFilter.prototype.selectionOptions.restore();
    Frequency.prototype.setFilter.restore();
  });

  it('has selectable options', function () {
    assert.deepEqual(filter.selectionOptions(), ['Daily', 'Weekly', 'Monthly', 'Yearly', 'Trigger']);
  });

  it('uses selectable options when render', function () {
    filter.render();

    assert(filter.selectionOptions.calledOnce);
    assert.deepEqual(filter.selectionOptions.returnValues[0], ['Daily', 'Weekly', 'Monthly', 'Yearly', 'Trigger']);
  });

  it('sets filter value when selection changes', function () {

    filter.render();
    filter.$('select').trigger('change');

    assert(frequency.setFilter.calledOnce);
  });

});
