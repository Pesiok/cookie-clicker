"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/cookie-clicker/248d43dda2e2f708230f9b1c8eb6d659.svg","248d43dda2e2f708230f9b1c8eb6d659"],["/cookie-clicker/55121e8287c1d4e86ea8109851a1e5d8.svg","55121e8287c1d4e86ea8109851a1e5d8"],["/cookie-clicker/577f6bd6aeca6b201145f111de7ab28b.svg","577f6bd6aeca6b201145f111de7ab28b"],["/cookie-clicker/85b1777ba767a88605d9cfd9acda8455.svg","85b1777ba767a88605d9cfd9acda8455"],["/cookie-clicker/aa073a0fc198609c3d41a4991b6f127b.svg","aa073a0fc198609c3d41a4991b6f127b"],["/cookie-clicker/assets/favicon.ico","a4db8dfe4b6c6cb59a6f21db5c71d575"],["/cookie-clicker/assets/icons/android-chrome-128x128.png","f8f83d89c15b14d1b3466f0ff0be8771"],["/cookie-clicker/assets/icons/android-chrome-256x256.png","9cf5f6d244d7b896d4317d86ded25f25"],["/cookie-clicker/assets/icons/android-chrome-512x512.png","dcc81ae124a78573b1c8bae1586d4efe"],["/cookie-clicker/assets/icons/apple-touch-icon.png","f8f83d89c15b14d1b3466f0ff0be8771"],["/cookie-clicker/assets/icons/favicon-16x16.png","abba1cefd4c9ddb0cda41db609269f2b"],["/cookie-clicker/assets/icons/favicon-32x32.png","b79e3cfcbc6d457304c561b165c0421d"],["/cookie-clicker/assets/icons/mstile-150x150.png","4730014922cb739340522cba690a8157"],["/cookie-clicker/assets/images/buildings/cursor.svg","577f6bd6aeca6b201145f111de7ab28b"],["/cookie-clicker/assets/images/buildings/factory.svg","baffd8e5debad62df4b0a4560b2773d3"],["/cookie-clicker/assets/images/buildings/farm.svg","55121e8287c1d4e86ea8109851a1e5d8"],["/cookie-clicker/assets/images/buildings/grandma.svg","e20a4d9b92a07d26d50a01a5c3ba0430"],["/cookie-clicker/assets/images/buildings/mine.svg","85b1777ba767a88605d9cfd9acda8455"],["/cookie-clicker/assets/images/cookie.svg","aa073a0fc198609c3d41a4991b6f127b"],["/cookie-clicker/assets/images/github.svg","b70dd1fd28e8741745a24cbe43f85078"],["/cookie-clicker/assets/images/trash.svg","248d43dda2e2f708230f9b1c8eb6d659"],["/cookie-clicker/b70dd1fd28e8741745a24cbe43f85078.svg","b70dd1fd28e8741745a24cbe43f85078"],["/cookie-clicker/baffd8e5debad62df4b0a4560b2773d3.svg","baffd8e5debad62df4b0a4560b2773d3"],["/cookie-clicker/bundle.f9926.js","70328f07af50b09394c873698f627726"],["/cookie-clicker/e20a4d9b92a07d26d50a01a5c3ba0430.svg","e20a4d9b92a07d26d50a01a5c3ba0430"],["/cookie-clicker/favicon.ico","a4db8dfe4b6c6cb59a6f21db5c71d575"],["/cookie-clicker/index.html","b331acf221aabdd192f4e556a3a4279b"],["/cookie-clicker/manifest.json","0b3c5b34955bdde4a9b32becd2808c03"],["/cookie-clicker/style.56293.css","c8bcac26809b74e297b30064ba7c7a67"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=c),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(c){return new Response(c,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,c,a,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var a=new URL(c).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return c.every(function(c){return!c.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],a=e[1],n=new URL(c,self.location),s=createCacheKey(n,hashParamName,a,!1);return[n.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(c){if(!c.ok)throw new Error("Request for "+a+" returned a response with status "+c.status);return cleanResponse(c).then(function(c){return e.put(a,c)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!c.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var c,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(c=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),c=urlsToCacheKeys.has(a));var s="index.html";!c&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(s,self.location).toString(),c=urlsToCacheKeys.has(a)),c&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(c){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,c),fetch(e.request)}))}});