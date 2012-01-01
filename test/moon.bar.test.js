
var assert = require('assert');

var Chart = require('../lib/chart');

describe('BHS Chart', function() {
  var chart = new Chart('Bar');
  chart.setWidth(740);
  chart.setHeight(265)
  chart.setTitle('Clarion County Pennsylvania Census 2010 Race by Age');
  chart.setBarStacked();
  chart.setBarWidth(0);
  chart.setBarSpacing(6);
  chart.setLegendBottom();
  chart.setAutoScaling();

  chart.addData([1967,1941,2166,1429,1948,1157,1029,1831,1979,1827,2133,2362,2679,2875,2749,957,1337,744,1116,1611,1216,967,853], 'White', '76A4FB');
  chart.addData([4,3,2,3,0,0,3,4,2,2,3,4,5,6,2,0,3,3,6,2,0,0,1], 'AIAN', '0000FF');
  chart.addData([10,8,2,1,18,9,20,21,19,11,10,8,8,7,10,5,8,2,7,2,4,1,0], 'Asian', '008000');
  chart.addData([23,13,16,13,143,71,36,64,26,7,13,8,11,15,7,4,4,1,1,2,2,2,2], 'AfAm', '224499');
  chart.addData([1,0,0,1,2,1,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,0], 'NHOPN', '3072F3');
  chart.addData([3,7,4,3,8,2,2,7,5,5,5,3,1,0,0,2,1,0,1,0,0,0,0], 'Other', '3366CC');
  chart.addData([45,38,33,19,21,14,16,24,10,7,17,15,10,9,10,2,5,5,4,3,2,2,4], 'Two or more', '3399CC'); 

  chart.addAxisLabels('x', ['0-5','5-9','10-14','15-17','18-19','20','21','22-24','25-29','30-34','35-39','40-44','45-49','50-54','55-59','60-61','62-64','65-66','67-69','70-74','75-79','80-84','85+']);
  chart.addAxisLabels('y');

  describe('#getUrl()', function() {
    it('should return a url', function() {
      var url = chart.getUrl();
      assert.equal(typeof url, 'string');
      assert.ok(url.indexOf('http') === 0);
      assert.ok(url.indexOf('cht=bvs') > 0);
    });
  });
});