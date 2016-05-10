// @codekit-prepend "./libs/icheck.js";
// @codekit-prepend "./libs/router.js";
var router = new Router({
    container: '#main'
});
var iCheck = function() {
    var _ichecked = $('.boarding-wraper').hasClass('ichecked') ? 0 : 1;

    function iCkeckInit() {
        $('input').iCheck({
            checkboxClass: 'icheckbox_square',
            radioClass: 'iradio_square',
            increaseArea: '-10%'
        });
    }

    if (_ichecked === 1) {
        $('.boarding-wraper').addClass('ichecked');
        iCkeckInit();
    }
};
var home = {
    url: '/',
    className: 'entry-wraper',
    render: function() {
        return document.querySelector('#tpl-entry').innerHTML;
    }
};
var boarding = {
    url: '/boarding',
    className: 'boarding-wraper',
    render: function() {
        return document.querySelector('#tpl-boarding').innerHTML;
    },
    bind: function() {
        setInterval(iCheck, 10);
    }
};
// setDefault('/boarding');
router.push(home).push(boarding).setDefault('/').init();
