/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4fecfb173c053a57b151958e19072dcf"
  },
  {
    "url": "assets/css/0.styles.423f2c29.css",
    "revision": "5e9ee275656071a87b54489a57d58421"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.133bf7e4.js",
    "revision": "39553a21a5fe311b4a70bb4daa3979e8"
  },
  {
    "url": "assets/js/11.9dc46745.js",
    "revision": "ff0092fdb23522eb2e75b102e98bf579"
  },
  {
    "url": "assets/js/12.8cbad238.js",
    "revision": "ba85235bd1256f1113d77e041208fb9e"
  },
  {
    "url": "assets/js/13.ab3cf34a.js",
    "revision": "5b0c575dfca2e4e470f65f308bd77344"
  },
  {
    "url": "assets/js/14.9c5d68cf.js",
    "revision": "fae8ac49934125e4aad6d93302fd4bae"
  },
  {
    "url": "assets/js/15.5e03c17e.js",
    "revision": "d2f71fbf755124b884f86d1c5fe0af37"
  },
  {
    "url": "assets/js/16.60c17705.js",
    "revision": "c3b17941c9ed2ac9316ec1f5683b0a43"
  },
  {
    "url": "assets/js/17.14d30dcd.js",
    "revision": "5c04944fd5c0e8dc39c3e42595f434f6"
  },
  {
    "url": "assets/js/18.218d190d.js",
    "revision": "2f3dba173922a6de8876d511ce50964d"
  },
  {
    "url": "assets/js/19.50badcf0.js",
    "revision": "bdbf07427b9603d9fe5528d876682293"
  },
  {
    "url": "assets/js/2.3401e4ec.js",
    "revision": "a9ac7875b56dbd23e51bd224cffc242f"
  },
  {
    "url": "assets/js/20.072b1917.js",
    "revision": "e7eb4a7c39b7a3cf3a8abb6275d1963b"
  },
  {
    "url": "assets/js/21.b193d180.js",
    "revision": "56a886769958c2e24b12e01c84bebf37"
  },
  {
    "url": "assets/js/22.17e88e0b.js",
    "revision": "1dd0e4aec20c16d5900068b81989c273"
  },
  {
    "url": "assets/js/23.ef7d42a5.js",
    "revision": "d52ba350089bd6c80751311b5c975491"
  },
  {
    "url": "assets/js/3.7fbcfaa7.js",
    "revision": "193c411481a5479f5ea32057790fc5e0"
  },
  {
    "url": "assets/js/4.accd6ce4.js",
    "revision": "30c93abeb6b9d3d274ec0758c6978944"
  },
  {
    "url": "assets/js/5.129be909.js",
    "revision": "c6727343dfa262a05beabe4df25bf880"
  },
  {
    "url": "assets/js/6.f2730b34.js",
    "revision": "77dabd62ef6e5b34089953f9b0e63093"
  },
  {
    "url": "assets/js/7.db5bc7c8.js",
    "revision": "2771a9df7a036d0591c32dd7b975dcd4"
  },
  {
    "url": "assets/js/8.169eede0.js",
    "revision": "b5d79e07154e5280280a45293cdbc05c"
  },
  {
    "url": "assets/js/9.9e50c9d5.js",
    "revision": "471ebe07e0752de6f0a71dcb7d2e6f56"
  },
  {
    "url": "assets/js/app.c4249286.js",
    "revision": "dc2df9af71d398f22141b0250800d922"
  },
  {
    "url": "google603171b62dec4aac.html",
    "revision": "31d70d981f06209ee337ed729ce7075d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6304a12922d80f8d7c9b7fe739013a9d"
  },
  {
    "url": "guide/index.html",
    "revision": "a1bd592e421e80840e16d5f17c14d70d"
  },
  {
    "url": "guide/locale.html",
    "revision": "381f3b8fbea0bd9347c351a3f94d1c98"
  },
  {
    "url": "guide/scoped-slot.html",
    "revision": "9ae1f530afef7ef10bd9400f0c7b5892"
  },
  {
    "url": "guide/slot.html",
    "revision": "f86f42ab39140b4d500b051a4ec80d5b"
  },
  {
    "url": "guide/utilities.html",
    "revision": "6ef147df9ea850c2dc804441e025c1e9"
  },
  {
    "url": "images/vue-pivottable-demo.gif",
    "revision": "dbf19b1e437a35f12467d5f38986f10d"
  },
  {
    "url": "index.html",
    "revision": "e7f54272dff62d0e196f84b5d98f51f2"
  },
  {
    "url": "ko/guide/data.html",
    "revision": "7cfced49f92750841bf001e87ec64630"
  },
  {
    "url": "ko/guide/getting-started.html",
    "revision": "d8001c7f4f23e9302ddf797ae54d4051"
  },
  {
    "url": "ko/guide/index.html",
    "revision": "eef7b78d32239460e08362bedd4f6205"
  },
  {
    "url": "ko/guide/props.html",
    "revision": "9a6505ab4979ff96c44bb258277702dd"
  },
  {
    "url": "ko/guide/style.html",
    "revision": "c36075e2eb74eed18d0cacde22fdc0fa"
  },
  {
    "url": "ko/index.html",
    "revision": "57a6d39a8e18cc52219afca777c69bd0"
  },
  {
    "url": "props/index.html",
    "revision": "c99a6c70ef9d261e084e8fa02c470144"
  },
  {
    "url": "styling/index.html",
    "revision": "42739166959c94dec70bd41fb09da76c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
