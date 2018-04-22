require('../index.html')
require('../css/package.scss')
var Zepto = require('zepto-modules')

/**
 * init
 */
function init() {
  console.log('init ok')
}
/**
 * start
 */
Zepto(function($){
  setTimeout(function(){
  	$('#good_loading').remove()
    $('#good_main').removeClass('hide')

    init()
  },1000)
  
})