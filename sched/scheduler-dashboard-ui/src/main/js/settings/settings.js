var settings = {
  clientId: require('./clientId'),
  clientName: require('./clientName'),
  createdBy: require('./createdBy'),
  distributionFormat: require('./distributionFormat'),
  distributionList: require('./distributionList'),
  frequency: require('./frequency'),
  lastExecution: require('./lastExecution'),
  modifiedBy: require('./modifiedBy'),
  reportExpiry: require('./reportExpiry'),
  reportName: require('./reportName'),
  reportOwner: require('./reportOwner'),
  reportType: require('./reportType'),
  trigger: require('./trigger'),
  defaults: function () {
    return [
      new this.clientId(),
      new this.clientName(),
      new this.createdBy(),
      new this.distributionFormat(),
      new this.distributionList(),
      new this.frequency(),
      new this.lastExecution(),
      new this.modifiedBy(),
      new this.reportExpiry(),
      new this.reportName(),
      new this.reportOwner(),
      new this.reportType(),
      new this.trigger()
    ];
  }
};

module.exports = settings;
