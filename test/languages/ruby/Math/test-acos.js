XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var acos = require('/Users/kvz/code/phpjs/src/ruby/Math/acos.js')

describe('ruby.Math.acos.js', function () {
  it('should pass example 1', function (done) {
    (acos(0.3) + '').substr(0, 17)
    var expected = "1.266103672779499"
    var result = (acos(0.3) + '').substr(0, 17)
    expect(result).to.deep.equal(expected)
    done()
  })
})