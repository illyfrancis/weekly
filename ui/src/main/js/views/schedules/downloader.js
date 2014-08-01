var Backbone = require('backbone');
var template = require('./templates/downloader.html');

var Downloader = Backbone.View.extend({

  initialize: function (options) {
    this.outputId = options.outputId;
  },

  render: function () {
    this.$el.html(template({
      downloadUrl: this.buildUrl(this.outputId)
    }));
    return this;
  },

  buildUrl: function () {
    var url = './reportoutput/{outputId}/file';
    return url.replace('{outputId}', this.outputId);
  }

});

module.exports = Downloader;
