/*
 AutobahnJS - http://autobahn.ws

 Copyright 2011, 2012 Tavendo GmbH.
 Licensed under the MIT License.
 See license text at http://www.opensource.org/licenses/mit-license.php

 AutobahnJS includes code from:

 when - http://cujojs.com

 (c) copyright B Cavalier & J Hann
 Licensed under the MIT License at:
 http://www.opensource.org/licenses/mit-license.php

 Crypto-JS - http://code.google.com/p/crypto-js/

 (c) 2009-2012 by Jeff Mott. All rights reserved.
 Licensed under the New BSD License at:
 http://code.google.com/p/crypto-js/wiki/License

 console-normalizer - https://github.com/Zenovations/console-normalizer

 (c) 2012 by Zenovations.
 Licensed under the MIT License at:
 http://www.opensource.org/licenses/mit-license.php

*/
window.define||(window.define=function(a){try{delete window.define}catch(b){window.define=void 0}window.when=a()},window.define.amd={});(function(a){a||(a=window.console={log:function(){},info:function(){},warn:function(){},error:function(){}});Function.prototype.bind||(Function.prototype.bind=function(a){var d=this,e=Array.prototype.slice.call(arguments,1);return function(){return d.apply(a,Array.prototype.concat.apply(e,arguments))}});"object"===typeof a.log&&(a.log=Function.prototype.call.bind(a.log,a),a.info=Function.prototype.call.bind(a.info,a),a.warn=Function.prototype.call.bind(a.warn,a),a.error=Function.prototype.call.bind(a.error,
    a));"group"in a||(a.group=function(b){a.info("\n--- "+b+" ---\n")});"groupEnd"in a||(a.groupEnd=function(){a.log("\n")});"time"in a||function(){var b={};a.time=function(a){b[a]=(new Date).getTime()};a.timeEnd=function(d){var e=(new Date).getTime();a.info(d+": "+(d in b?e-b[d]:0)+"ms")}}()})(window.console);/*
     MIT License (c) copyright 2011-2013 original author or authors */
    (function(a,b){a(function(){function a(b,d,e,h){return c(b).then(d,e,h)}function e(a,c){this.then=a;this.inspect=c}function c(a){return f(function(c){c(a)})}function f(a){return g(a,A.PromiseStatus&&A.PromiseStatus())}function g(a,c){function b(a){n&&(p=j(a),r(n,p),n=v,c&&p.then(function(){c.fulfilled()},function(a){c.rejected(a)}))}function d(a){b(m(a))}function h(a){n&&r(n,i(a))}var f,p,n=[];f=new e(function(a,b,d){return g(function(c,e,h){function f(s){s.then(a,b,d).then(c,e,h)}n?n.push(f):w(function(){f(p)})},
    c&&c.observed())},function(){return p?p.inspect():{state:"pending"}});try{a(b,d,h)}catch(k){d(k)}return f}function j(a){return a instanceof e?a:!(a===Object(a)&&"then"in a)?l(a):f(function(c,b,d){w(function(){try{var e=a.then;"function"===typeof e?B(e,a,c,b,d):c(l(a))}catch(h){b(h)}})})}function l(a){var c=new e(function(b){try{return"function"==typeof b?j(b(a)):c}catch(d){return m(d)}},function(){return k(a)});return c}function m(a){var c=new e(function(b,d){try{return"function"==typeof d?j(d(a)):
    c}catch(e){return m(e)}},function(){return u(a)});return c}function i(a){var c=new e(function(b,d,e){try{return"function"==typeof e?i(e(a)):c}catch(h){return i(h)}});return c}function r(a,c){w(function(){for(var b,d=0;b=a[d++];)b(c)})}function h(c,b,e,h,p){return a(c,function(c){return f(function(e,h,f){function p(a){j(a)}function n(a){l(a)}var g,k,s,i,l,j,m,r;m=c.length>>>0;g=Math.max(0,Math.min(b,m));s=[];k=m-g+1;i=[];if(g){j=function(a){i.push(a);--k||(l=j=o,h(i))};l=function(a){s.push(a);--g||
    (l=j=o,e(s))};for(r=0;r<m;++r)r in c&&a(c[r],n,p,f)}else e(s)}).then(e,h,p)})}function p(a,c,b,d){return n(a,o).then(c,b,d)}function n(c,b,e){return a(c,function(c){return f(function(h,f,p){function n(c,s){a(c,b,e).then(function(a){g[s]=a;--k||h(g)},f,p)}var g,i,k,s;k=i=c.length>>>0;g=[];if(k)for(s=0;s<i;s++)s in c?n(c[s],s):--k;else h(g)})})}function k(a){return{state:"fulfilled",value:a}}function u(a){return{state:"rejected",reason:a}}function w(a){1===z.push(a)&&D(x)}function x(){for(var a,c=0;a=
    z[c++];)a();z=[]}function o(a){return a}a.promise=f;a.resolve=c;a.reject=function(c){return a(c,m)};a.defer=function(){var a,b,d;a={promise:v,resolve:v,reject:v,notify:v,resolver:{resolve:v,reject:v,notify:v}};a.promise=b=f(function(e,h,f){a.resolve=a.resolver.resolve=function(a){if(d)return c(a);d=!0;e(a);return b};a.reject=a.resolver.reject=function(a){if(d)return c(m(a));d=!0;h(a);return b};a.notify=a.resolver.notify=function(a){f(a);return a}});return a};a.join=function(){return n(arguments,o)};
    a.all=p;a.map=function(a,c){return n(a,c)};a.reduce=function(c,b){var e=B(q,arguments,1);return a(c,function(c){var h;h=c.length;e[0]=function(c,e,f){return a(c,function(c){return a(e,function(a){return b(c,a,f,h)})})};return t.apply(c,e)})};a.settle=function(a){return n(a,k,u)};a.any=function(a,c,b,e){return h(a,1,function(a){return c?c(a[0]):a[0]},b,e)};a.some=h;a.isPromise=function(a){return a&&"function"===typeof a.then};e.prototype={otherwise:function(a){return this.then(v,a)},ensure:function(a){function b(){return c(a())}
    return this.then(b,b).yield(this)},yield:function(a){return this.then(function(){return a})},spread:function(a){return this.then(function(c){return p(c,function(c){return a.apply(v,c)})})},always:function(a,c){return this.then(a,a,c)}};var t,q,B,D,z,E,y,C,A,v;z=[];A="undefined"!=typeof console?console:a;E=b.setTimeout;D="function"===typeof setImmediate?setImmediate.bind(b):"object"===typeof process&&process.nextTick?process.nextTick:"object"===typeof vertx?vertx.runOnLoop:function(a){E(a,0)};y=Function.prototype;
    C=y.call;B=y.bind?C.bind(C):function(a,c){return a.apply(c,q.call(arguments,2))};y=[];q=y.slice;t=y.reduce||function(a){var c,b,e,d,h;h=0;c=Object(this);d=c.length>>>0;b=arguments;if(1>=b.length)for(;;){if(h in c){e=c[h++];break}if(++h>=d)throw new TypeError;}else e=b[1];for(;h<d;++h)h in c&&(e=a(e,c[h],h,c));return e};return a})})("function"===typeof define&&define.amd?define:function(a){module.exports=a()},this);var CryptoJS=CryptoJS||function(a,b){var d={},e=d.lib={},c=e.Base=function(){function a(){}return{extend:function(c){a.prototype=this;var b=new a;c&&b.mixIn(c);b.hasOwnProperty("init")||(b.init=function(){b.$super.init.apply(this,arguments)});b.init.prototype=b;b.$super=this;return b},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},
    clone:function(){return this.init.prototype.extend(this)}}}(),f=e.WordArray=c.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=b?c:4*a.length},toString:function(a){return(a||j).stringify(this)},concat:function(a){var c=this.words,b=a.words,e=this.sigBytes,a=a.sigBytes;this.clamp();if(e%4)for(var d=0;d<a;d++)c[e+d>>>2]|=(b[d>>>2]>>>24-8*(d%4)&255)<<24-8*((e+d)%4);else if(65535<b.length)for(d=0;d<a;d+=4)c[e+d>>>2]=b[d>>>2];else c.push.apply(c,b);this.sigBytes+=a;return this},clamp:function(){var c=
    this.words,b=this.sigBytes;c[b>>>2]&=4294967295<<32-8*(b%4);c.length=a.ceil(b/4)},clone:function(){var a=c.clone.call(this);a.words=this.words.slice(0);return a},random:function(c){for(var b=[],d=0;d<c;d+=4)b.push(4294967296*a.random()|0);return new f.init(b,c)}}),g=d.enc={},j=g.Hex={stringify:function(a){for(var c=a.words,a=a.sigBytes,b=[],d=0;d<a;d++){var e=c[d>>>2]>>>24-8*(d%4)&255;b.push((e>>>4).toString(16));b.push((e&15).toString(16))}return b.join("")},parse:function(a){for(var c=a.length,
    b=[],d=0;d<c;d+=2)b[d>>>3]|=parseInt(a.substr(d,2),16)<<24-4*(d%8);return new f.init(b,c/2)}},l=g.Latin1={stringify:function(a){for(var c=a.words,a=a.sigBytes,b=[],d=0;d<a;d++)b.push(String.fromCharCode(c[d>>>2]>>>24-8*(d%4)&255));return b.join("")},parse:function(a){for(var c=a.length,b=[],d=0;d<c;d++)b[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return new f.init(b,c)}},m=g.Utf8={stringify:function(a){try{return decodeURIComponent(escape(l.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");
    }},parse:function(a){return l.parse(unescape(encodeURIComponent(a)))}},i=e.BufferedBlockAlgorithm=c.extend({reset:function(){this._data=new f.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=m.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(c){var b=this._data,d=b.words,e=b.sigBytes,g=this.blockSize,i=e/(4*g),i=c?a.ceil(i):a.max((i|0)-this._minBufferSize,0),c=i*g,e=a.min(4*c,e);if(c){for(var l=0;l<c;l+=g)this._doProcessBlock(d,l);l=d.splice(0,c);b.sigBytes-=
    e}return new f.init(l,e)},clone:function(){var a=c.clone.call(this);a._data=this._data.clone();return a},_minBufferSize:0});e.Hasher=i.extend({cfg:c.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){i.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,b){return(new a.init(b)).finalize(c)}},_createHmacHelper:function(a){return function(c,
    b){return(new r.HMAC.init(a,b)).finalize(c)}}});var r=d.algo={};return d}(Math);(function(){var a=CryptoJS,b=a.lib.WordArray;a.enc.Base64={stringify:function(a){var b=a.words,c=a.sigBytes,f=this._map;a.clamp();for(var a=[],g=0;g<c;g+=3)for(var j=(b[g>>>2]>>>24-8*(g%4)&255)<<16|(b[g+1>>>2]>>>24-8*((g+1)%4)&255)<<8|b[g+2>>>2]>>>24-8*((g+2)%4)&255,l=0;4>l&&g+0.75*l<c;l++)a.push(f.charAt(j>>>6*(3-l)&63));if(b=f.charAt(64))for(;a.length%4;)a.push(b);return a.join("")},parse:function(a){var e=a.length,c=this._map,f=c.charAt(64);f&&(f=a.indexOf(f),-1!=f&&(e=f));for(var f=[],g=0,j=0;j<
    e;j++)if(j%4){var l=c.indexOf(a.charAt(j-1))<<2*(j%4),m=c.indexOf(a.charAt(j))>>>6-2*(j%4);f[g>>>2]|=(l|m)<<24-8*(g%4);g++}return b.create(f,g)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();(function(){var a=CryptoJS,b=a.enc.Utf8;a.algo.HMAC=a.lib.Base.extend({init:function(a,e){a=this._hasher=new a.init;"string"==typeof e&&(e=b.parse(e));var c=a.blockSize,f=4*c;e.sigBytes>f&&(e=a.finalize(e));e.clamp();for(var g=this._oKey=e.clone(),j=this._iKey=e.clone(),l=g.words,m=j.words,i=0;i<c;i++)l[i]^=1549556828,m[i]^=909522486;g.sigBytes=j.sigBytes=f;this.reset()},reset:function(){var a=this._hasher;a.reset();a.update(this._iKey)},update:function(a){this._hasher.update(a);return this},finalize:function(a){var b=
    this._hasher,a=b.finalize(a);b.reset();return b.finalize(this._oKey.clone().concat(a))}})})();(function(a){var b=CryptoJS,d=b.lib,e=d.WordArray,c=d.Hasher,d=b.algo,f=[],g=[];(function(){function c(b){for(var d=a.sqrt(b),e=2;e<=d;e++)if(!(b%e))return!1;return!0}function b(a){return 4294967296*(a-(a|0))|0}for(var d=2,e=0;64>e;)c(d)&&(8>e&&(f[e]=b(a.pow(d,0.5))),g[e]=b(a.pow(d,1/3)),e++),d++})();var j=[],d=d.SHA256=c.extend({_doReset:function(){this._hash=new e.init(f.slice(0))},_doProcessBlock:function(a,c){for(var b=this._hash.words,d=b[0],e=b[1],f=b[2],n=b[3],k=b[4],u=b[5],w=b[6],x=b[7],o=
    0;64>o;o++){if(16>o)j[o]=a[c+o]|0;else{var t=j[o-15],q=j[o-2];j[o]=((t<<25|t>>>7)^(t<<14|t>>>18)^t>>>3)+j[o-7]+((q<<15|q>>>17)^(q<<13|q>>>19)^q>>>10)+j[o-16]}t=x+((k<<26|k>>>6)^(k<<21|k>>>11)^(k<<7|k>>>25))+(k&u^~k&w)+g[o]+j[o];q=((d<<30|d>>>2)^(d<<19|d>>>13)^(d<<10|d>>>22))+(d&e^d&f^e&f);x=w;w=u;u=k;k=n+t|0;n=f;f=e;e=d;d=t+q|0}b[0]=b[0]+d|0;b[1]=b[1]+e|0;b[2]=b[2]+f|0;b[3]=b[3]+n|0;b[4]=b[4]+k|0;b[5]=b[5]+u|0;b[6]=b[6]+w|0;b[7]=b[7]+x|0},_doFinalize:function(){var c=this._data,b=c.words,d=8*this._nDataBytes,
    e=8*c.sigBytes;b[e>>>5]|=128<<24-e%32;b[(e+64>>>9<<4)+14]=a.floor(d/4294967296);b[(e+64>>>9<<4)+15]=d;c.sigBytes=4*b.length;this._process();return this._hash},clone:function(){var a=c.clone.call(this);a._hash=this._hash.clone();return a}});b.SHA256=c._createHelper(d);b.HmacSHA256=c._createHmacHelper(d)})(Math);(function(){var a=CryptoJS,b=a.lib,d=b.Base,e=b.WordArray,b=a.algo,c=b.HMAC,f=b.PBKDF2=d.extend({cfg:d.extend({keySize:4,hasher:b.SHA1,iterations:1}),init:function(a){this.cfg=this.cfg.extend(a)},compute:function(a,b){for(var d=this.cfg,f=c.create(d.hasher,a),i=e.create(),r=e.create([1]),h=i.words,p=r.words,n=d.keySize,d=d.iterations;h.length<n;){var k=f.update(b).finalize(r);f.reset();for(var u=k.words,w=u.length,x=k,o=1;o<d;o++){x=f.finalize(x);f.reset();for(var t=x.words,q=0;q<w;q++)u[q]^=t[q]}i.concat(k);
    p[0]++}i.sigBytes=4*n;return i}});a.PBKDF2=function(a,c,b){return f.create(b).compute(a,c)}})();/*
     MIT License (c) 2011-2013 Copyright Tavendo GmbH. */
    var AUTOBAHNJS_VERSION="0.7.9",AUTOBAHNJS_DEBUG=!1,ab=window.ab={};ab._version=AUTOBAHNJS_VERSION;
    (function(){Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null===this)throw new TypeError;var b=Object(this),d=b.length>>>0;if(0===d)return-1;var e=0;0<arguments.length&&(e=Number(arguments[1]),e!==e?e=0:0!==e&&Infinity!==e&&-Infinity!==e&&(e=(0<e||-1)*Math.floor(Math.abs(e))));if(e>=d)return-1;for(e=0<=e?e:Math.max(d-Math.abs(e),0);e<d;e++)if(e in b&&b[e]===a)return e;return-1});Array.prototype.forEach||(Array.prototype.forEach=function(a,b){var d,e;if(this===null)throw new TypeError(" this is null or not defined");
    var c=Object(this),f=c.length>>>0;if({}.toString.call(a)!=="[object Function]")throw new TypeError(a+" is not a function");b&&(d=b);for(e=0;e<f;){var g;if(e in c){g=c[e];a.call(d,g,e,c)}e++}})})();ab._sliceUserAgent=function(a,b,d){var e=[],c=navigator.userAgent,a=c.indexOf(a),b=c.indexOf(b,a);0>b&&(b=c.length);d=c.slice(a,b).split(d);c=d[1].split(".");for(b=0;b<c.length;++b)e.push(parseInt(c[b],10));return{name:d[0],version:e}};
    ab.getBrowser=function(){var a=navigator.userAgent;return-1<a.indexOf("Chrome")?ab._sliceUserAgent("Chrome"," ","/"):-1<a.indexOf("Safari")?ab._sliceUserAgent("Safari"," ","/"):-1<a.indexOf("Firefox")?ab._sliceUserAgent("Firefox"," ","/"):-1<a.indexOf("MSIE")?ab._sliceUserAgent("MSIE",";"," "):null};
    ab.getServerUrl=function(a,b){return"file:"===window.location.protocol?b?b:"ws://127.0.0.1/ws":("https:"===window.location.protocol?"wss://":"ws://")+window.location.hostname+(""!==window.location.port?":"+window.location.port:"")+"/"+(a?a:"ws")};ab.browserNotSupportedMessage="Browser does not support WebSockets (RFC6455)";
    ab.deriveKey=function(a,b){return b&&b.salt?CryptoJS.PBKDF2(a,b.salt,{keySize:(b.keylen||32)/4,iterations:b.iterations||1E4,hasher:CryptoJS.algo.SHA256}).toString(CryptoJS.enc.Base64):a};ab._idchars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";ab._idlen=16;ab._subprotocol="wamp";ab._newid=function(){for(var a="",b=0;b<ab._idlen;b+=1)a+=ab._idchars.charAt(Math.floor(Math.random()*ab._idchars.length));return a};ab._newidFast=function(){return Math.random().toString(36)};
    ab.log=function(){if(1<arguments.length){console.group("Log Item");for(var a=0;a<arguments.length;a+=1)console.log(arguments[a]);console.groupEnd()}else console.log(arguments[0])};ab._debugrpc=!1;ab._debugpubsub=!1;ab._debugws=!1;ab._debugconnect=!1;ab.debug=function(a,b,d){if("console"in window)ab._debugrpc=a,ab._debugpubsub=a,ab._debugws=b,ab._debugconnect=d;else throw"browser does not support console object";};ab.version=function(){return ab._version};
    ab.PrefixMap=function(){this._index={};this._rindex={}};ab.PrefixMap.prototype.get=function(a){return this._index[a]};ab.PrefixMap.prototype.set=function(a,b){this._index[a]=b;this._rindex[b]=a};ab.PrefixMap.prototype.setDefault=function(a){this._index[""]=a;this._rindex[a]=""};ab.PrefixMap.prototype.remove=function(a){var b=this._index[a];b&&(delete this._index[a],delete this._rindex[b])};
    ab.PrefixMap.prototype.resolve=function(a,b){var d=a.indexOf(":");if(0<=d){var e=a.substring(0,d);if(this._index[e])return this._index[e]+a.substring(d+1)}return!0===b?a:null};ab.PrefixMap.prototype.shrink=function(a,b){for(var d=a.length;0<d;d-=1){var e=this._rindex[a.substring(0,d)];if(e)return e+":"+a.substring(d)}return!0===b?a:null};ab._MESSAGE_TYPEID_WELCOME=0;ab._MESSAGE_TYPEID_PREFIX=1;ab._MESSAGE_TYPEID_CALL=2;ab._MESSAGE_TYPEID_CALL_RESULT=3;ab._MESSAGE_TYPEID_CALL_ERROR=4;
    ab._MESSAGE_TYPEID_SUBSCRIBE=5;ab._MESSAGE_TYPEID_UNSUBSCRIBE=6;ab._MESSAGE_TYPEID_PUBLISH=7;ab._MESSAGE_TYPEID_EVENT=8;ab.CONNECTION_CLOSED=0;ab.CONNECTION_LOST=1;ab.CONNECTION_RETRIES_EXCEEDED=2;ab.CONNECTION_UNREACHABLE=3;ab.CONNECTION_UNSUPPORTED=4;ab.CONNECTION_UNREACHABLE_SCHEDULED_RECONNECT=5;ab.CONNECTION_LOST_SCHEDULED_RECONNECT=6;ab.Deferred=when.defer;
    ab._construct=function(a,b){return"WebSocket"in window?b?new WebSocket(a,b):new WebSocket(a):"MozWebSocket"in window?b?new MozWebSocket(a,b):new MozWebSocket(a):null};
    ab.Session=function(a,b,d,e){var c=this;c._wsuri=a;c._options=e;c._websocket_onopen=b;c._websocket_onclose=d;c._websocket=null;c._websocket_connected=!1;c._session_id=null;c._wamp_version=null;c._server=null;c._calls={};c._subscriptions={};c._prefixes=new ab.PrefixMap;c._txcnt=0;c._rxcnt=0;c._websocket=c._options&&c._options.skipSubprotocolAnnounce?ab._construct(c._wsuri):ab._construct(c._wsuri,[ab._subprotocol]);if(!c._websocket){if(void 0!==d){d(ab.CONNECTION_UNSUPPORTED);return}throw ab.browserNotSupportedMessage;
    }c._websocket.onmessage=function(a){ab._debugws&&(c._rxcnt+=1,console.group("WS Receive"),console.info(c._wsuri+"  ["+c._session_id+"]"),console.log(c._rxcnt),console.log(a.data),console.groupEnd());a=JSON.parse(a.data);if(a[1]in c._calls){if(a[0]===ab._MESSAGE_TYPEID_CALL_RESULT){var b=c._calls[a[1]],d=a[2];if(ab._debugrpc&&void 0!==b._ab_callobj){console.group("WAMP Call",b._ab_callobj[2]);console.timeEnd(b._ab_tid);console.group("Arguments");for(var e=3;e<b._ab_callobj.length;e+=1){var m=b._ab_callobj[e];
    if(void 0!==m)console.log(m);else break}console.groupEnd();console.group("Result");console.log(d);console.groupEnd();console.groupEnd()}b.resolve(d)}else if(a[0]===ab._MESSAGE_TYPEID_CALL_ERROR){b=c._calls[a[1]];d=a[2];e=a[3];m=a[4];if(ab._debugrpc&&void 0!==b._ab_callobj){console.group("WAMP Call",b._ab_callobj[2]);console.timeEnd(b._ab_tid);console.group("Arguments");for(var i=3;i<b._ab_callobj.length;i+=1){var r=b._ab_callobj[i];if(void 0!==r)console.log(r);else break}console.groupEnd();console.group("Error");
    console.log(d);console.log(e);void 0!==m&&console.log(m);console.groupEnd();console.groupEnd()}void 0!==m?b.reject({uri:d,desc:e,detail:m}):b.reject({uri:d,desc:e})}delete c._calls[a[1]]}else if(a[0]===ab._MESSAGE_TYPEID_EVENT){if(b=c._prefixes.resolve(a[1],!0),b in c._subscriptions){var h=a[1],p=a[2];ab._debugpubsub&&(console.group("WAMP Event"),console.info(c._wsuri+"  ["+c._session_id+"]"),console.log(h),console.log(p),console.groupEnd());c._subscriptions[b].forEach(function(a){a(h,p)})}}else if(a[0]===
    ab._MESSAGE_TYPEID_WELCOME)if(null===c._session_id){c._session_id=a[1];c._wamp_version=a[2];c._server=a[3];if(ab._debugrpc||ab._debugpubsub)console.group("WAMP Welcome"),console.info(c._wsuri+"  ["+c._session_id+"]"),console.log(c._wamp_version),console.log(c._server),console.groupEnd();null!==c._websocket_onopen&&c._websocket_onopen()}else throw"protocol error (welcome message received more than once)";};c._websocket.onopen=function(){if(c._websocket.protocol!==ab._subprotocol)if("undefined"===typeof c._websocket.protocol)ab._debugws&&
    (console.group("WS Warning"),console.info(c._wsuri),console.log("WebSocket object has no protocol attribute: WAMP subprotocol check skipped!"),console.groupEnd());else if(c._options&&c._options.skipSubprotocolCheck)ab._debugws&&(console.group("WS Warning"),console.info(c._wsuri),console.log("Server does not speak WAMP, but subprotocol check disabled by option!"),console.log(c._websocket.protocol),console.groupEnd());else throw c._websocket.close(1E3,"server does not speak WAMP"),"server does not speak WAMP (but '"+
    c._websocket.protocol+"' !)";ab._debugws&&(console.group("WAMP Connect"),console.info(c._wsuri),console.log(c._websocket.protocol),console.groupEnd());c._websocket_connected=!0};c._websocket.onerror=function(){};c._websocket.onclose=function(a){ab._debugws&&(c._websocket_connected?console.log("Autobahn connection to "+c._wsuri+" lost (code "+a.code+", reason '"+a.reason+"', wasClean "+a.wasClean+")."):console.log("Autobahn could not connect to "+c._wsuri+" (code "+a.code+", reason '"+a.reason+"', wasClean "+
    a.wasClean+")."));void 0!==c._websocket_onclose&&(c._websocket_connected?a.wasClean?c._websocket_onclose(ab.CONNECTION_CLOSED,"WS-"+a.code+": "+a.reason):c._websocket_onclose(ab.CONNECTION_LOST):c._websocket_onclose(ab.CONNECTION_UNREACHABLE));c._websocket_connected=!1;c._wsuri=null;c._websocket_onopen=null;c._websocket_onclose=null;c._websocket=null};c.log=function(){c._options&&"sessionIdent"in c._options?console.group("WAMP Session '"+c._options.sessionIdent+"' ["+c._session_id+"]"):console.group("WAMP Session ["+
    c._session_id+"]");for(var a=0;a<arguments.length;++a)console.log(arguments[a]);console.groupEnd()}};
    ab.Session.prototype._send=function(a){if(!this._websocket_connected)throw"Autobahn not connected";switch(!0){case window.Prototype&&"undefined"===typeof top.window.__prototype_deleted:case "function"===typeof a.toJSON:a=a.toJSON();break;default:a=JSON.stringify(a)}this._websocket.send(a);this._txcnt+=1;ab._debugws&&(console.group("WS Send"),console.info(this._wsuri+"  ["+this._session_id+"]"),console.log(this._txcnt),console.log(a),console.groupEnd())};
    ab.Session.prototype.close=function(){this._websocket_connected&&this._websocket.close()};ab.Session.prototype.sessionid=function(){return this._session_id};ab.Session.prototype.wsuri=function(){return this._wsuri};ab.Session.prototype.shrink=function(a,b){void 0===b&&(b=!0);return this._prefixes.shrink(a,b)};ab.Session.prototype.resolve=function(a,b){void 0===b&&(b=!0);return this._prefixes.resolve(a,b)};
    ab.Session.prototype.prefix=function(a,b){this._prefixes.set(a,b);if(ab._debugrpc||ab._debugpubsub)console.group("WAMP Prefix"),console.info(this._wsuri+"  ["+this._session_id+"]"),console.log(a),console.log(b),console.groupEnd();this._send([ab._MESSAGE_TYPEID_PREFIX,a,b])};
    ab.Session.prototype.call=function(){for(var a=new ab.Deferred,b;!(b=ab._newidFast(),!(b in this._calls)););this._calls[b]=a;for(var d=this._prefixes.shrink(arguments[0],!0),d=[ab._MESSAGE_TYPEID_CALL,b,d],e=1;e<arguments.length;e+=1)d.push(arguments[e]);this._send(d);ab._debugrpc&&(a._ab_callobj=d,a._ab_tid=this._wsuri+"  ["+this._session_id+"]["+b+"]",console.time(a._ab_tid),console.info());return a.promise.then?a.promise:a};
    ab.Session.prototype.subscribe=function(a,b){var d=this._prefixes.resolve(a,!0);d in this._subscriptions||(ab._debugpubsub&&(console.group("WAMP Subscribe"),console.info(this._wsuri+"  ["+this._session_id+"]"),console.log(a),console.log(b),console.groupEnd()),this._send([ab._MESSAGE_TYPEID_SUBSCRIBE,a]),this._subscriptions[d]=[]);if(-1===this._subscriptions[d].indexOf(b))this._subscriptions[d].push(b);else throw"callback "+b+" already subscribed for topic "+d;};
    ab.Session.prototype.unsubscribe=function(a,b){var d=this._prefixes.resolve(a,!0);if(d in this._subscriptions){var e;if(void 0!==b){var c=this._subscriptions[d].indexOf(b);if(-1!==c)e=b,this._subscriptions[d].splice(c,1);else throw"no callback "+b+" subscribed on topic "+d;}else e=this._subscriptions[d].slice(),this._subscriptions[d]=[];0===this._subscriptions[d].length&&(delete this._subscriptions[d],ab._debugpubsub&&(console.group("WAMP Unsubscribe"),console.info(this._wsuri+"  ["+this._session_id+
    "]"),console.log(a),console.log(e),console.groupEnd()),this._send([ab._MESSAGE_TYPEID_UNSUBSCRIBE,a]))}else throw"not subscribed to topic "+d;};
    ab.Session.prototype.publish=function(){var a=arguments[0],b=arguments[1],d=null,e=null,c=null,f=null;if(3<arguments.length){if(!(arguments[2]instanceof Array))throw"invalid argument type(s)";if(!(arguments[3]instanceof Array))throw"invalid argument type(s)";e=arguments[2];c=arguments[3];f=[ab._MESSAGE_TYPEID_PUBLISH,a,b,e,c]}else if(2<arguments.length)if("boolean"===typeof arguments[2])d=arguments[2],f=[ab._MESSAGE_TYPEID_PUBLISH,a,b,d];else if(arguments[2]instanceof Array)e=arguments[2],f=[ab._MESSAGE_TYPEID_PUBLISH,
    a,b,e];else throw"invalid argument type(s)";else f=[ab._MESSAGE_TYPEID_PUBLISH,a,b];ab._debugpubsub&&(console.group("WAMP Publish"),console.info(this._wsuri+"  ["+this._session_id+"]"),console.log(a),console.log(b),null!==d?console.log(d):null!==e&&(console.log(e),null!==c&&console.log(c)),console.groupEnd());this._send(f)};ab.Session.prototype.authreq=function(a,b){return this.call("http://api.wamp.ws/procedure#authreq",a,b)};
    ab.Session.prototype.authsign=function(a,b){b||(b="");return CryptoJS.HmacSHA256(a,b).toString(CryptoJS.enc.Base64)};ab.Session.prototype.auth=function(a){return this.call("http://api.wamp.ws/procedure#auth",a)};
    ab._connect=function(a){var b=new ab.Session(a.wsuri,function(){a.connects+=1;a.retryCount=0;a.onConnect(b)},function(b,e){var c=null;switch(b){case ab.CONNECTION_CLOSED:a.onHangup(b,"Connection was closed properly ["+e+"]");break;case ab.CONNECTION_UNSUPPORTED:a.onHangup(b,"Browser does not support WebSocket.");break;case ab.CONNECTION_UNREACHABLE:a.retryCount+=1;if(0===a.connects)a.onHangup(b,"Connection could not be established.");else if(a.retryCount<=a.options.maxRetries)(c=a.onHangup(ab.CONNECTION_UNREACHABLE_SCHEDULED_RECONNECT,
    "Connection unreachable - scheduled "+a.retryCount+"th reconnect to occur in "+a.options.retryDelay/1E3+" second(s).",{delay:a.options.retryDelay,retries:a.retryCount,maxretries:a.options.maxRetries}))?(ab._debugconnect&&console.log("Connection unreachable - retrying stopped by app"),a.onHangup(ab.CONNECTION_RETRIES_EXCEEDED,"Number of connection retries exceeded.")):(ab._debugconnect&&console.log("Connection unreachable - retrying ("+a.retryCount+") .."),window.setTimeout(ab._connect,a.options.retryDelay,
    a));else a.onHangup(ab.CONNECTION_RETRIES_EXCEEDED,"Number of connection retries exceeded.");break;case ab.CONNECTION_LOST:a.retryCount+=1;if(a.retryCount<=a.options.maxRetries)(c=a.onHangup(ab.CONNECTION_LOST_SCHEDULED_RECONNECT,"Connection lost - scheduled "+a.retryCount+"th reconnect to occur in "+a.options.retryDelay/1E3+" second(s).",{delay:a.options.retryDelay,retries:a.retryCount,maxretries:a.options.maxRetries}))?(ab._debugconnect&&console.log("Connection lost - retrying stopped by app"),
    a.onHangup(ab.CONNECTION_RETRIES_EXCEEDED,"Connection lost.")):(ab._debugconnect&&console.log("Connection lost - retrying ("+a.retryCount+") .."),window.setTimeout(ab._connect,a.options.retryDelay,a));else a.onHangup(ab.CONNECTION_RETRIES_EXCEEDED,"Connection lost.");break;default:throw"unhandled close code in ab._connect";}},a.options)};
    ab.connect=function(a,b,d,e){var c={};c.wsuri=a;c.options=e?e:{};void 0===c.options.retryDelay&&(c.options.retryDelay=5E3);void 0===c.options.maxRetries&&(c.options.maxRetries=10);void 0===c.options.skipSubprotocolCheck&&(c.options.skipSubprotocolCheck=!1);void 0===c.options.skipSubprotocolAnnounce&&(c.options.skipSubprotocolAnnounce=!1);if(b)c.onConnect=b;else throw"onConnect handler required!";c.onHangup=d?d:function(a,b,c){ab._debugconnect&&console.log(a,b,c)};c.connects=0;c.retryCount=0;ab._connect(c)};
    ab.launch=function(a,b,d){ab.connect(a.wsuri,function(d){!a.appkey||""===a.appkey?d.authreq().then(function(){d.auth().then(function(){b?b(d):ab._debugconnect&&d.log("Session opened.")},d.log)},d.log):d.authreq(a.appkey,a.appextra).then(function(c){var f=null;"function"===typeof a.appsecret?f=a.appsecret(c):(f=ab.deriveKey(a.appsecret,JSON.parse(c).authextra),f=d.authsign(c,f));d.auth(f).then(function(){b?b(d):ab._debugconnect&&d.log("Session opened.")},d.log)},d.log)},function(a,b,f){d?d(a,b,f):
    ab._debugconnect&&ab.log("Session closed.",a,b,f)},a.sessionConfig)};ab._UA_FIREFOX=/.*Firefox\/([0-9+]*).*/;ab._UA_CHROME=/.*Chrome\/([0-9+]*).*/;ab._UA_CHROMEFRAME=/.*chromeframe\/([0-9]*).*/;ab._UA_WEBKIT=/.*AppleWebKit\/([0-9+.]*)w*.*/;ab._UA_WEBOS=/.*webOS\/([0-9+.]*)w*.*/;ab._matchRegex=function(a,b){var d=b.exec(a);return d?d[1]:d};
    ab.lookupWsSupport=function(){var a=navigator.userAgent;if(-1<a.indexOf("MSIE")){if(-1<a.indexOf("MSIE 10"))return[!0,!0,!0];if(-1<a.indexOf("chromeframe")){var b=parseInt(ab._matchRegex(a,ab._UA_CHROMEFRAME));return 14<=b?[!0,!1,!0]:[!1,!1,!1]}if(-1<a.indexOf("MSIE 8")||-1<a.indexOf("MSIE 9"))return[!0,!0,!0]}else{if(-1<a.indexOf("Firefox")){if(b=parseInt(ab._matchRegex(a,ab._UA_FIREFOX))){if(7<=b)return[!0,!1,!0];if(3<=b)return[!0,!0,!0]}return[!1,!1,!0]}if(-1<a.indexOf("Safari")&&-1==a.indexOf("Chrome")){if(b=
    ab._matchRegex(a,ab._UA_WEBKIT))return-1<a.indexOf("Windows")&&"534+"==b||-1<a.indexOf("Macintosh")&&(b=b.replace("+","").split("."),535==parseInt(b[0])&&24<=parseInt(b[1])||535<parseInt(b[0]))?[!0,!1,!0]:-1<a.indexOf("webOS")?(b=ab._matchRegex(a,ab._UA_WEBOS).split("."),2==parseInt(b[0])?[!1,!0,!0]:[!1,!1,!1]):[!0,!0,!0]}else if(-1<a.indexOf("Chrome")){if(b=parseInt(ab._matchRegex(a,ab._UA_CHROME)))return 14<=b?[!0,!1,!0]:4<=b?[!0,!0,!0]:[!1,!1,!0]}else if(-1<a.indexOf("Android")){if(-1<a.indexOf("Firefox")||
    -1<a.indexOf("CrMo"))return[!0,!1,!0];if(-1<a.indexOf("Opera"))return[!1,!1,!0];if(-1<a.indexOf("CrMo"))return[!0,!0,!0]}else if(-1<a.indexOf("iPhone")||-1<a.indexOf("iPad")||-1<a.indexOf("iPod"))return[!1,!1,!0]}return[!1,!1,!1]};