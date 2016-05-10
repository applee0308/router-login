/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */
(function(f){function A(a,b,d){var c=a[0],g=/er/.test(d)?_indeterminate:/bl/.test(d)?n:k,e=d==_update?{checked:c[k],disabled:c[n],indeterminate:"true"==a.attr(_indeterminate)||"false"==a.attr(_determinate)}:c[g];if(/^(ch|di|in)/.test(d)&&!e)x(a,g);else if(/^(un|en|de)/.test(d)&&e)q(a,g);else if(d==_update)for(var f in e)e[f]?x(a,f,!0):q(a,f,!0);else if(!b||"toggle"==d){if(!b)a[_callback]("ifClicked");e?c[_type]!==r&&q(a,g):x(a,g)}}function x(a,b,d){var c=a[0],g=a.parent(),e=b==k,u=b==_indeterminate,
v=b==n,s=u?_determinate:e?y:"enabled",F=l(a,s+t(c[_type])),B=l(a,b+t(c[_type]));if(!0!==c[b]){if(!d&&b==k&&c[_type]==r&&c.name){var w=a.closest("form"),p='input[name="'+c.name+'"]',p=w.length?w.find(p):f(p);p.each(function(){this!==c&&f(this).data(m)&&q(f(this),b)})}u?(c[b]=!0,c[k]&&q(a,k,"force")):(d||(c[b]=!0),e&&c[_indeterminate]&&q(a,_indeterminate,!1));D(a,e,b,d)}c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"default");g[_add](B||l(a,b)||"");g.attr("role")&&!u&&g.attr("aria-"+(v?n:k),"true");
g[_remove](F||l(a,s)||"")}function q(a,b,d){var c=a[0],g=a.parent(),e=b==k,f=b==_indeterminate,m=b==n,s=f?_determinate:e?y:"enabled",q=l(a,s+t(c[_type])),r=l(a,b+t(c[_type]));if(!1!==c[b]){if(f||!d||"force"==d)c[b]=!1;D(a,e,s,d)}!c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"pointer");g[_remove](r||l(a,b)||"");g.attr("role")&&!f&&g.attr("aria-"+(m?n:k),"false");g[_add](q||l(a,s)||"")}function E(a,b){if(a.data(m)){a.parent().html(a.attr("style",a.data(m).s||""));if(b)a[_callback](b);a.off(".i").unwrap();
f(_label+'[for="'+a[0].id+'"]').add(a.closest(_label)).off(".i")}}function l(a,b,f){if(a.data(m))return a.data(m).o[b+(f?"":"Class")]}function t(a){return a.charAt(0).toUpperCase()+a.slice(1)}function D(a,b,f,c){if(!c){if(b)a[_callback]("ifToggled");a[_callback]("ifChanged")[_callback]("if"+t(f))}}var m="iCheck",C=m+"-helper",r="radio",k="checked",y="un"+k,n="disabled";_determinate="determinate";_indeterminate="in"+_determinate;_update="update";_type="type";_click="click";_touch="touchbegin.i touchend.i";
_add="addClass";_remove="removeClass";_callback="trigger";_label="label";_cursor="cursor";_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);f.fn[m]=function(a,b){var d='input[type="checkbox"], input[type="'+r+'"]',c=f(),g=function(a){a.each(function(){var a=f(this);c=a.is(d)?c.add(a):c.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),g(this),c.each(function(){var c=
f(this);"destroy"==a?E(c,"ifDestroyed"):A(c,!0,a);f.isFunction(b)&&b()});if("object"!=typeof a&&a)return this;var e=f.extend({checkedClass:k,disabledClass:n,indeterminateClass:_indeterminate,labelHover:!0},a),l=e.handle,v=e.hoverClass||"hover",s=e.focusClass||"focus",t=e.activeClass||"active",B=!!e.labelHover,w=e.labelHoverClass||"hover",p=(""+e.increaseArea).replace("%","")|0;if("checkbox"==l||l==r)d='input[type="'+l+'"]';-50>p&&(p=-50);g(this);return c.each(function(){var a=f(this);E(a);var c=this,
b=c.id,g=-p+"%",d=100+2*p+"%",d={position:"absolute",top:g,left:g,display:"block",width:d,height:d,margin:0,padding:0,background:"#fff",border:0,opacity:0},g=_mobile?{position:"absolute",visibility:"hidden"}:p?d:{position:"absolute",opacity:0},l="checkbox"==c[_type]?e.checkboxClass||"icheckbox":e.radioClass||"i"+r,z=f(_label+'[for="'+b+'"]').add(a.closest(_label)),u=!!e.aria,y=m+"-"+Math.random().toString(36).substr(2,6),h='<div class="'+l+'" '+(u?'role="'+c[_type]+'" ':"");u&&z.each(function(){h+=
'aria-labelledby="';this.id?h+=this.id:(this.id=y,h+=y);h+='"'});h=a.wrap(h+"/>")[_callback]("ifCreated").parent().append(e.insert);d=f('<ins class="'+C+'"/>').css(d).appendTo(h);a.data(m,{o:e,s:a.attr("style")}).css(g);e.inheritClass&&h[_add](c.className||"");e.inheritID&&b&&h.attr("id",m+"-"+b);"static"==h.css("position")&&h.css("position","relative");A(a,!0,_update);if(z.length)z.on(_click+".i mouseover.i mouseout.i "+_touch,function(b){var d=b[_type],e=f(this);if(!c[n]){if(d==_click){if(f(b.target).is("a"))return;
A(a,!1,!0)}else B&&(/ut|nd/.test(d)?(h[_remove](v),e[_remove](w)):(h[_add](v),e[_add](w)));if(_mobile)b.stopPropagation();else return!1}});a.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(b){var d=b[_type];b=b.keyCode;if(d==_click)return!1;if("keydown"==d&&32==b)return c[_type]==r&&c[k]||(c[k]?q(a,k):x(a,k)),!1;if("keyup"==d&&c[_type]==r)!c[k]&&x(a,k);else if(/us|ur/.test(d))h["blur"==d?_remove:_add](s)});d.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(b){var d=
b[_type],e=/wn|up/.test(d)?t:v;if(!c[n]){if(d==_click)A(a,!1,!0);else{if(/wn|er|in/.test(d))h[_add](e);else h[_remove](e+" "+t);if(z.length&&B&&e==v)z[/ut|nd/.test(d)?_remove:_add](w)}if(_mobile)b.stopPropagation();else return!1}})})}})(window.jQuery||window.Zepto);


'use strict';
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Router",[],t):"object"==typeof exports?exports.Router=t():e.Router=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),a=o(s),u=function(){function e(t){r(this,e),this._options={container:"#container",enter:"enter",enterTimeout:0,leave:"leave",leaveTimeout:0},this._index=1,this._$container=null,this._routes=[],this._default=null,this._options=a.extend(this._options,t),this._$container=document.querySelector(this._options.container)}return i(e,[{key:"init",value:function(){var e=this;window.addEventListener("hashchange",function(t){var n=a.getHash(t.newURL),o=history.state||{};e.go(n,o._index<=e._index)},!1),history.state&&history.state._index&&(this._index=history.state._index),this._index--;var t=a.getHash(location.href),n=this._getRoute(t);return this.go(n?t:this._default),this}},{key:"push",value:function(e){return e=a.extend({url:"*",className:"",render:a.noop,bind:a.noop},e),this._routes.push(e),this}},{key:"setDefault",value:function(e){return this._default=e,this}},{key:"go",value:function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],o=this._getRoute(e);if(!o)throw new Error("url "+e+" was not found");return!function(){var r="function"==typeof o.render?o.render(o.params):"",i=t._$container.hasChildNodes();i&&!function(){var e=t._$container.childNodes[0];n&&e.classList.add(t._options.leave),t._options.leaveTimeout>0?setTimeout(function(){e.parentNode.removeChild(e)},t._options.leaveTimeout):e.parentNode.removeChild(e)}();var s=document.createElement("div");o.className&&s.classList.add(o.className),s.innerHTML=r,t._$container.appendChild(s),!n&&t._options.enter&&i&&s.classList.add(t._options.enter),t._options.enterTimeout>0?setTimeout(function(){s.classList.remove(t._options.enter)},t._options.enterTimeout):s.classList.remove(t._options.enter),location.hash="#"+e;try{n?t._index--:t._index++,history.replaceState&&history.replaceState({_index:t._index},"",location.href)}catch(a){}"function"!=typeof o.bind||o.__isBind||(o.bind.call(s),o.__isBind=!0)}(),this}},{key:"_getRoute",value:function(e){for(var t=0,n=this._routes.length;n>t;t++){var o=this._routes[t],r=a.getRegExp(o.url),i=a.getParams(o.url),s=r.exec(e);if(s){o.params={};for(var u=0,c=i.length;c>u;u++){var l=i[u];o.params[l]=s[u+1]}return o}}return null}}]),e}();t["default"]=u,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){for(var n in t)e[n]=t[n];return e}function o(e){return-1!==e.indexOf("#")?e.substring(e.indexOf("#")+1):"/"}function r(){}function i(e){var t=/\((.*?)\)/g,n=/(\(\?)?:\w+/g,o=/\*\w+/g,r=/[\-{}\[\]+?.,\\\^$|#\s]/g;return e=e.replace(r,"\\$&").replace(t,"(?:$1)?").replace(n,function(e,t){return t?e:"([^/?]+)"}).replace(o,"([^?]*?)"),new RegExp("^"+e+"(?:\\?([\\s\\S]*))?$")}function s(e){for(var t=/:(\w+)/g,n=[],o=void 0;null!==(o=t.exec(e));)n.push(o[1]);return n}Object.defineProperty(t,"__esModule",{value:!0}),t.extend=n,t.getHash=o,t.noop=r,t.getRegExp=i,t.getParams=s}])});


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


