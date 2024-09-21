'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "53eab3dc4b7a0721e1b39960125366dc",
"assets/AssetManifest.bin.json": "66c114ce6b1ccfb6119cd4ee035e9f7b",
"assets/AssetManifest.json": "2d0b11a7fb45fd91e7bdd0026cedd0fb",
"assets/assets/cv/Vinayak%2520B%2520.pdf": "17b3e1fc5a8c06754ef60b66ef19d4c4",
"assets/assets/fonts/amoneon-amoneon-regular-400.ttf": "e043733a92717ff0547a5b0a5682523d",
"assets/assets/fonts/DMSans-Regular.ttf": "916f3ae325c2bcd71bec9b469c6a6aa0",
"assets/assets/fonts/Inter_28pt-Regular.ttf": "fc20e0880f7747bb39b85f2a0722b371",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/10210182191579517842-128.png": "ccb5842595c64d22d33c22a63d0e7870",
"assets/assets/images/11755973651551952107-128.png": "171c861e84fe6fb7d884378cc8b03489",
"assets/assets/images/13691885491579517854-128.png": "1e2065e7b80a38f0e354777cf46072ac",
"assets/assets/images/14178750871552037061-128.png": "eadce6217711ccb2cbc1fb81edc313e9",
"assets/assets/images/17985894551536211770-128.png": "e90bf31c3c99fd28fe3e55fc055f29ce",
"assets/assets/images/19218518301553750371-128.png": "ee9338f4e8e56fdc7b8ce4eca7e06d35",
"assets/assets/images/378554371540553613-128.png": "2e2e2a4641db051e69bddc2c33686b12",
"assets/assets/images/3842828341530103314-128.png": "74fc8ee3f99f00fa5a2b5d46a36fc205",
"assets/assets/images/6247864081536298180-128.png": "ed320961f84f67529fda90f0a6b56761",
"assets/assets/images/632690741557997006-128.png": "dbcfb8a9e6f0cfd5b209b287f1df6145",
"assets/assets/images/8804286661557996995-128.png": "39eb2f31b3ffae2c726324609de779cb",
"assets/assets/images/9374299221540553610-128.png": "65630fe85c0b017b6da2e9da77ee85f6",
"assets/assets/images/app-development_10245981.png": "0305aade56c8d0eb15cd372fe4f23004",
"assets/assets/images/coding_2010990.png": "6c73ade4a8ebd8e571dadca0bb6434c8",
"assets/assets/images/database_11921716.png": "ef2acd36af81da45ff010150b947bf9f",
"assets/assets/images/developer-activity-concept-illustration.png": "7d386f54e395c2ce24aba8c048366fe1",
"assets/assets/images/digital-marketing_7008393.png": "c5fffefe1812a528d9c38f1227a8f448",
"assets/assets/images/github_2504911.png": "3d4c7482f267f5accbb7461766f3f790",
"assets/assets/images/instagram_2111463.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/images/linkedin_2504923.png": "d604727cedcd27fcc981ffdb1f318a66",
"assets/assets/images/movieticketapi.png": "606093ae5f6a6afd0f450a790b210488",
"assets/assets/images/Screenshot%25202024-08-23%2520144130.png": "1e403889fe2b28db057506fe6c2e9adc",
"assets/assets/images/Screenshot%25202024-08-23%2520144340.png": "ac0d8aa1bc42c7aa61d37dce81e286c6",
"assets/assets/images/Screenshot%25202024-09-21%2520191119.png": "a062a00a4a6fbd29525500b209b3cbdd",
"assets/assets/images/world-wide-web_1927656.png": "eef835e665ab4c33e663fc97654bf9b8",
"assets/assets/lottie/Animation%2520-%25201724317668666.json": "0ca30bb038076956c720de0b6e978da6",
"assets/FontManifest.json": "c3adadb6f7a4bd865423a3c91f108b76",
"assets/fonts/MaterialIcons-Regular.otf": "943d9c759d8926281ec804871e48c38a",
"assets/NOTICES": "c1941c143d6d1e231bac28d701bae4df",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "21133bf7a4e623b6151a331546a0f38c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "69680cc9dce264cb945d95f034c501ec",
"/": "69680cc9dce264cb945d95f034c501ec",
"main.dart.js": "642dd9b36cd20a0380b3b46b9d4b72bb",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"man_4140048.png": "b907dc756c5ac066437b40a2dd900187",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
