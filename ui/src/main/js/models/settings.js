var settings = {
  // TODO - hide these
  client: require('./client'),
  createdBy: require('./criterionUser'),
  distributionFormat: require('./distributionFormat'),
  distributionList: require('./distributionList'),
  frequency: require('./frequency'),
  lastExecution: require('./lastExecution'),
  modifiedBy: require('./criterionUser'),
  reportExpiry: require('./reportExpiry'),
  reportName: require('./reportName'),
  reportOwner: require('./criterionUser'),
  reportType: require('./reportType'),
  trigger: require('./trigger'),
  defaults: function () {
    return [
      new this.client({
        'id': 'client',
        'title': 'Client',
        'displayOrder': 10,
        'groupOrder': 1
      }),
      new this.createdBy({
        'id': 'createdBy',
        'title': 'Created by',
        'displayOrder': 2
      }),
      new this.distributionFormat({
        'id': 'distributionFormat',
        'title': 'Distribution format',
        'displayOrder': 9
      }),
      new this.distributionList({
        'id': 'distributionList',
        'title': 'Distribution list',
        'displayOrder': 7
      }),
      new this.frequency({
        'id': 'frequency',
        'title': 'Frequency',
        'displayOrder': 5
      }),
      new this.lastExecution({
        'id': 'lastExecution',
        'title': 'Last execution',
        'displayOrder': 8
      }),
      new this.modifiedBy({
        'id': 'modifiedBy',
        'title': 'Modified by',
        'displayOrder': 4
      }),
      new this.reportExpiry({
        'id': 'reportExpiry',
        'title': 'Report expiry',
        'displayOrder': 11
      }),
      new this.reportName({
        'id': 'reportName',
        'title': 'Report name',
        'displayOrder': 0
      }),
      new this.reportOwner({
        'id': 'reportOwner',
        'title': 'Report owner',
        'displayOrder': 3
      }),
      new this.reportType({
        'id': 'reportType',
        'title': 'Report type',
        'displayOrder': 1
      }),
      new this.trigger({
        'id': 'trigger',
        'title': 'Trigger',
        'displayOrder': 6
      })
    ];
  }
};

module.exports = settings;
