'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a26851df55f43c422c89901c48f0b23b",
"index.html": "1949532a726ccb6ed70a9a457973337b",
"/": "1949532a726ccb6ed70a9a457973337b",
"main.dart.js": "683549473be6f35a259ca64b50d73442",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "176dab54a5d1223a976baecad3c9745b",
".git/config": "594e67e097510e6790516b085bedf52f",
".git/objects/6a/df711e7092be0735fcd4777ce05c38b0326ef3": "cc463ec7ddef05c45f8f00b2a47f4a5b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/182bd1caca4338c6c909ce33b09b564bfe1d3e": "5b34fc6c26450ecc22c30b22958a0ce5",
".git/objects/51/3ae6d73741c77744194d33a613be05c9467a38": "4e1a801c2f1775cd46aa8fa9f1570462",
".git/objects/34/faa0edc558301babb7a7a371aa162641f7f05c": "9c33089947c4abcfe5cf6a62f5f4e8d0",
".git/objects/05/89d6c3be7c2ee36ffd6f61c36701409b9e896c": "d055d92f3a91f23f6ca939073f01c972",
".git/objects/da/8f2032621d022edbedf3e7f2a81b9c5999a4f7": "d02bf7c87eeb57ea5d9ab8e419127771",
".git/objects/ae/215540ab4fa9a83fc157b43dee6959c6de34d9": "04b3c1c1b60c3fbd738e55a4f36803e7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/06fa734783b886e651621fe9d39b84c43dd85d": "54f4239fcb08aec5f840412954116923",
".git/objects/f4/63b0c6a6e63056faf56eef039b0617dca02752": "e05b01ba75bad29e029bdbb20575bb76",
".git/objects/c0/edb1bfaa588a872c49330fb22fea29a1fc92f7": "592904f1aae41aaa98b51ef30adb0f13",
".git/objects/e4/5bdea901afa4210cbe41b5c5e00758ef0f4791": "f4c134a8658fa6d916822c99ea17ab75",
".git/objects/ed/3b0ff2af0ffa064aeadf696429dd2b3688a455": "89ecece0c198a2d9b3f92b55622edd5e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/86869582906b1369644b58605796df9db3cda8": "7225b27efaa0fb61b4da1191b0676c07",
".git/objects/29/580e8ff7d04046facdfa2bbf82d54969d923a1": "a2ff203361cc5715941a32ceb568e613",
".git/objects/89/52616801bbcb9f14d0be18b54f7972f0b034db": "353cd784b627272c05b28be89bb668b0",
".git/objects/80/2068d9993dfcb1842535b7bbcef8db02efaf67": "972b770be8b2221ab252e9ef0bc5ed4a",
".git/objects/80/190eaa42b1fadf38289cbd68d77b3a53058b37": "26ba82101c3d1d6f2aa04c12f748fe6b",
".git/objects/17/836b0144c51981dba146f6298dbd4913f7c64a": "f473a97637c8d1be2aed6e9c8a964fde",
".git/objects/8f/533bab6d5d7209aedba8b52227ba86c1928d66": "c33aa2be2fec27a18897232d13c40e46",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/c73b5a84691639fd3d05e58999c2ca3818b117": "940cb5cd7190eae30062ff40ca7893f8",
".git/objects/86/1eae518305aff51728022afcb19ab5b76f2d30": "8a1f0b1f77031e6143f22a295be75b02",
".git/objects/2a/737c238a219d9ae3c0fd9a73a544710b8d12ee": "7b68f633660881c4b10501f68607e901",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/1f5507905df77b084b1d30b8c8775c423e97d0": "9054ef9df79c8fdb87ab1ad077bba96c",
".git/objects/36/17091a0faf607512f3a3df6cba0be23c536497": "837598d82e7adf8be4e715d002538203",
".git/objects/09/30435aef30efec021f53b471884c367e3f9514": "921c217e04fc2f9c77630b0f7183e201",
".git/objects/09/1a734c2c06ed2b33a33ee121d88941a24a1328": "d9a745a53e9b630513a6e14e5b7d7df6",
".git/objects/91/18edab9b9f05b17cdd59c049fbdc06eeed0c1d": "b91903c2bafa9f3251734886bbe5542c",
".git/objects/3a/be6c17369b885164679ceabd0c6ebe8d293a2b": "17c056b300a3d7e8076e6757706a99a7",
".git/objects/3a/f4567f3bffd834501cfb6f9f07a2b27ecb5afc": "f15f0029fa9d3ff807ee0497adc144c5",
".git/objects/6d/1ee2846d109f2944da24735f13b88372559835": "a8a81988be58bfe124a2465b52667deb",
".git/objects/01/37cc12b27f945d0bdb8db2e2abadf116a98555": "0e06365c331b7be91ab73a129b9f9b4d",
".git/objects/01/fa4a238db97e2f55a0c602d03e5622b1f45a29": "1fa17cb8f108dfb9247a866a73c8d0ac",
".git/objects/01/f5dcd3d4fb0879657ef3413419a03ac6c33bfc": "58c3b3745d9de2e5c396ddce788d84d2",
".git/objects/06/3ed562007b3a892cd97cf24d5112234cccc042": "1a8498cbc3acb529d3a568b0485d4083",
".git/objects/63/f73a9ce4ba91f733867ef70323e392fb1d3070": "62dae9930c6cb15fb5d3155ffd3b294e",
".git/objects/0f/40a717c9739070a99cdcde1b8b94580de6aa2d": "3d47ed17f4feeaf40b422d33b23c6209",
".git/objects/90/a6768abc1710399936e12a53b3fc1b8a209697": "57c62b667f7aec48e98718fee241f685",
".git/objects/b6/a5535a390f59bd4f3fd8829869293f6708d940": "ceb12bb91b3ca3758f659424ee596130",
".git/objects/aa/ca45f6d8ea891f4c80df67cb37a79c32847d08": "137e400bc2d9d100c7a50798e07a6f7c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/8988519e26fb15c32910de03af47534ed43636": "9f8a017ad7df8c5e17b3c8527da4c4ca",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/f2a60791832c2f18721f90a8d3c8cb86004062": "0c8c1ce4bfa14db92eb478e52e40e6e7",
".git/objects/cc/2c4a8d3bec813ed74ed1b7347d0bf39e19beaf": "50a11a07b5071bae3bc61c3ed35bf08a",
".git/objects/f6/7b1ca7056b4240f686744d005e7bef395ec608": "20c58bf9c05d371269e7e0bf7b8ecea5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/77/acf3301a153f2d3166fb5d776f16403385ac23": "fc5d10f998b32d72270dc5f22508c903",
".git/objects/24/292c433773e0d08bba0e24b1306892cf8bdf99": "25438398ed5d77ff61ae9d08d471eee1",
".git/objects/71/32d8ab943f3093183e23b2ade47cba0fc6a906": "0952ea9e542592c2eca142b9a2fa7000",
".git/objects/40/9ecf6faf9f939d07de793746d2b55c37debe03": "ccf0c954672533d0615dbb5fa5123bcd",
".git/objects/14/003dc1d24e5e77e4e067e9f56d64eb7c9cba4b": "a8ccb88fb2ab8896a0fd29ae6cd0fb54",
".git/objects/25/71bd3028c219ee8513192079e797fcc24126c2": "c609ebd6f1cd7916d65a61bc78f750d7",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "932fc0e38e7021c59d518f2b368fbba3",
".git/logs/refs/heads/master": "932fc0e38e7021c59d518f2b368fbba3",
".git/logs/refs/remotes/origin/master": "0ba880a9ce6f1d751573a5a75f14d4dc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "73b457c2f29440e22d68765e5bf211d2",
".git/refs/remotes/origin/master": "73b457c2f29440e22d68765e5bf211d2",
".git/index": "ee07ca5174d4905cbf854972d6c555c5",
".git/COMMIT_EDITMSG": "7452ae7e5d79e3025a085ed8acd20763",
"assets/AssetManifest.json": "0cd3661fb255f5c64ca1a1a337b91dd4",
"assets/NOTICES": "aeed3d2e83d16ca7618f29379d17cfa8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/dollar_sign.svg": "6c5d75fd609e361796524ddedd0a9b67",
"assets/assets/dollar_sign.png": "b1137b0e7eb5d8f84ac253408103bb09",
"assets/assets/buy_a_house.svg": "97d7d74f7499a4c378638515a9e38063",
"assets/assets/logo.svg": "465e55939f99b2583abedb31b71969d5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
