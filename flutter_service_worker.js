'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2f2ce2890f9c5d0a276380f9bee432cd",
".git/config": "cfeb40628bda09dc90f7d99c66c6c499",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f264f82f4758a4a4dba5fc1f17e28e5b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5b69ea5caf334130cb41b537fc7c3e5f",
".git/logs/refs/heads/master": "5b69ea5caf334130cb41b537fc7c3e5f",
".git/objects/00/076b4fa2871ab8b75e1f2e51609542ba530ec3": "e38f34ee3955a36b941868e5c2679cdc",
".git/objects/01/c4ed02152a422ec2b0b2fb471ed2e0f2ff2aa3": "0b25dec55ce24a9df3b72e9d89cd57d2",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/09/1c9327dd8e25d2d1489ca0f6a41aa4f2a189b6": "7130e06e3823515d1b7a00c8e5e76a0f",
".git/objects/0e/337c6290146929262a62d0ea2a8caae44fade7": "95a7773d81826efdd09559940f23641b",
".git/objects/0e/3b0ee4f13182b287054a1341a9d20e762ddb20": "065beb8cdc62fe87137fadb65ddd322a",
".git/objects/0e/9bcd0465ca46371f9575ab751caf660d8f7c7f": "735df5b409532bd1a7fc9952b78e507c",
".git/objects/11/2d3a41f580af7b5ac32062d3e9af9661800eee": "4c1a2d5464a0711e09ac21e02ba3256b",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/15/eb0d80ddf9bac4fccf8d084dd82b36f2eb0162": "62aed7dc91e0291288d277d3e8503944",
".git/objects/16/3c67032bec0f096657397704f054af8e015e14": "10f82cc0b93631e5c449bbb3c3676df5",
".git/objects/18/9b573c4b8bb90a2a74fbcd4246a217a1bb5ce5": "04c9cd3ab893329702f5d2dfb92ac663",
".git/objects/18/fd8a5618afe75a7c389445306fd0e1dc3fd255": "8a3877c0c8f5457600cf18ad1a834dba",
".git/objects/1d/d62f5fa82a717469ed47fd35f7e8625447a61c": "e71a7ce26be265a9baf43a48843ca4b0",
".git/objects/1e/b55e723637ffb2c40590ae0ac3019754b41ba6": "2541088f69fd4b433d4f8c39b95c172f",
".git/objects/20/f93f9a4099b76a7196ebde77249c8c91b1ee8a": "2e3332d4c1657dd37288e693d29481e9",
".git/objects/2b/6392ffe8712b9c5450733320cd220d6c0f4bce": "8c5765aae9760c295ac45acfb0e04a63",
".git/objects/2b/e8b589a907263ea0ea6c747e5653b7906e6310": "fb341e73d47d23ba4dc218b5af827605",
".git/objects/30/e88be440aa29caf908c8558df774904641c21e": "15b9b5a100c23b871d2cbf5d93485b5b",
".git/objects/32/6e74dc4ef5cec5f0f7b2d4e5d2593aa6c94492": "ed604656e16c9eb3e7df3ec92fdcb454",
".git/objects/36/500b9a38dd12c8bc465138f1c97dfb19790560": "4b42bab2b0b1e4a09c062671d23e62c4",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/37/9c825b15e7a1b287be231bf37aa9e13e87e521": "0dbe13a407ae4c558202c45505b70126",
".git/objects/3d/89330c954a3882fd0266dcd5e2bf44e6331833": "d9c138ce8d0e99397775f683e87a75cb",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/5d41ce4fe13f6a9a22711ff7a18dca5449187e": "738d42f3151356a4779e378c55425bd0",
".git/objects/42/b8c77af11134fb018c2b31e67ddfbe8482c61b": "11a4a521262a7b9e9c418b412ad95ad6",
".git/objects/49/0b54c810aba02761001e29bb8f67fc8aa704b6": "034f1e8758fd4f64b1e1b1bbca2e089b",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/1d4dcaae7f12b80780cf06c217c45a1e3483b9": "c976c2266fe3de10d131d09c6e8d0bf9",
".git/objects/4d/c99294e8be6f8e742c45cf4ea0c4f45ff077d2": "1722d2c85e6311b393984cc3a5e6ac20",
".git/objects/4e/0ec4ce9f65a799729ea18a82a64166190d9c1e": "ad934ad180c8eedd3389348e0745614f",
".git/objects/4f/2e2f656f16fdc3c0c79a073fc78f51b28f0f58": "c522575d8bf2bc412faccb6a0d8eaa02",
".git/objects/50/13b4ca1650d937c7f03e76cc8e025058e59710": "044684d2a45b20a848ff16f56a7a3122",
".git/objects/51/2af6f4203be5b5899f47b4a58b5d68e460157f": "1d19cc6b718529e571802b6b2d46900b",
".git/objects/51/e02756a591be0298859c9463f1ef7570c330c6": "694c2752e9f1f1a5274e1807fa6809b7",
".git/objects/54/10dc491f04f1c6c50ff38088daab4052843744": "84909e579130bc849f553f8a6c56e443",
".git/objects/54/4e340a0aa250b466b7344ee96220d12aaf2bdb": "12bf3ff23c8f006271d39a634b9eee90",
".git/objects/54/c68225d642681629350b92c10ac2279fbfb771": "fc6279328d9cabf4cdd04d6668666a4d",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/59/5a9719e769736f6ab3066462401a40e38e8c64": "1706c418772757b0b8f68fb6f3a948d4",
".git/objects/5a/b808a706e205e1a53f8da525c39a2d751d4976": "890e8e666543e0e49abeb718ee5c20d7",
".git/objects/5d/a2d66aa16ac070301c1bbe53408b8543cddc47": "7f0f51d4ea6938deb96c146c2689ee2a",
".git/objects/5f/09d99c85d8b65669d2baa662c852fbe6876b93": "07c51b06faebbafb2c5af6703b84d2a7",
".git/objects/5f/d75cdc6c2034629a997d93235fce9713ecfd4a": "fefb394693ae4ed2bd3bfb9db5e659d7",
".git/objects/60/563e31e02d8bdfd18d14a97bc2d544c0d7cc5f": "854f3fb4cd6c469e0270be31ffd4c6bc",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/d6a6e052c6dc3a2432b2de2daaa36fa8b08e5a": "ed49fd9f51ecf8d3bf25869f08576c86",
".git/objects/6e/06f851ffd2c81f58ad2ec2d091ea9d6051b817": "7d3e4bedc0748066252e21b88fb77a4e",
".git/objects/70/3317a271b80e112aa3edd960fcb49a07c1b369": "aeb95dfebad6dab3508f7557b821168d",
".git/objects/72/ef917de959c8ddd8b9a0a42139f611bd71b123": "f3ece05db8276f999d61ff2d463ae7ea",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/78/81c2b36d6fe48e13f9ed4e3e5fd357e4b5b17b": "b948cee615e900a20dac2e460a07abe0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/81/158462a685d770351fc832ba3fea2150b1379c": "ffa9e69d53574864e104d54b5afadb74",
".git/objects/85/8def7322a3a2eb4f9b76b84a4804b976e247db": "a2be97d65787b6ef2bb8c6e012237425",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/b3f4f0a89608dd066fa446cbe3157ba951664b": "81b30e2336801ae88c7194ac6598303b",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/97/d8c2a488e506746d198eea4e6c62f46ba3bb69": "8add19f14cceded01df2f1514211cc15",
".git/objects/98/ea0d1d371946277f144901519d9f3bb9a0fe91": "fcfd05fba4ba9f02031d9a638db8b80c",
".git/objects/9b/ccb388c14f522e1c5d2723c9249d4288379509": "f61ca1cb767d645bd995689fc8e74f22",
".git/objects/a0/640029025dd7670b1a009c9414662db175a6cd": "3c758a3fbbf5cadcafc827c37d5589a9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/83d7ce45ec6d9918f6bef11f7795f24c647a28": "5f9c5bab60533af0476f373c4c743264",
".git/objects/a5/6514c952f03efd5505ab567253508bcb5ffc03": "003858c3a43ffe76057508681c74fb37",
".git/objects/a6/028aaa8f29de5dc67448b70853a7b34e40906e": "21f52d40aaab5b7144ea409b5ff99886",
".git/objects/a6/ce1bf168374e03ec928de8080529b107606191": "4abb75cb3d5a3ecf7eb117074cef9470",
".git/objects/a7/5323178e665ba24474291352cf8d33c29d8ecd": "10e489a2798f04ae767f953930986502",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/e020f507f04ae58cdb5a7db348e6e7afda9fdb": "96628bcc034749573f38824749800dcb",
".git/objects/b2/6ace6f6a350b93991637c29b64116ded60f34e": "40f3432124a7e5ab17d22c15cb87b2a3",
".git/objects/b4/14a753db0cd8f8795816461da13c17d6b99eca": "4ae1089f05badae4ee7c29cdaec4688e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/bde1eeaff1f330042cf9b1310379dcbc0ee093": "afdcdb7a23169a911e7e1852f346e896",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/c0/07474d27daf51e81a4e7cd1b3a7c0423396e05": "c8eff140951e0da1a2f835ccb10647a4",
".git/objects/c6/31a799822a3d06b72af75f7ec11024c2efcce0": "fe9a018bc22fa9e708e6fbb78a0df4a9",
".git/objects/c8/3dfcf215080ff6d3e65889bb6867fac85a37d4": "ea23f283c2c302525d158b23015669da",
".git/objects/c8/da8aba53bc600d15c7a712994f15c7c3e1dd55": "3fd4d42060b51f6bd882675dcc47b34e",
".git/objects/c9/80acd1a8eb982dca16719e0081e37e9a4c4780": "ce20c2f780af1c4c99e866118468d49a",
".git/objects/ce/8fe08de32223fe0dbb3f43d80be7e5dc6abbac": "4bbed5eacb68e58f48b7837357298b2e",
".git/objects/ce/9c3a3f4eadc293bcd911b44c08aa387c7270ef": "f1dccdfa81f66df0b2ba4e154d9f3152",
".git/objects/ce/a1fc973115ff989a4a5e5f577a4f2744d5356d": "13c56dee6c83566b78cef39b3947c53a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a34aff94e7d1607f7d83f0942f0c5d95f23c7d": "a06e0340d7bb5cdf16f29c314aee04f1",
".git/objects/d9/98cf5b468413ca1c950096dc9d0f5dfdb1359f": "872d06090d2311cd71232a001d72623a",
".git/objects/dd/15fadb537c80fe265063b7666336c2345a646f": "35f98500f95b273147d816855048a502",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "6b7813243b19b9f3cb7753361b0da27a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/8a1de1a39cab5af96628ca7b5e6ba9c07d3cb1": "925e764f55ed7ad654e167c90c5bf080",
".git/objects/f2/2a7f4da65fe5e945d6730766d11a34ba372be8": "4567daaf54be2a1377e0ea90a0c2d4de",
".git/objects/f7/14a514d94e495095e2f1e525a341eade187c17": "ca0d4350dcdad8026382089554e0448e",
".git/objects/fb/e5731a099ba2e581be89caa794d82a3e8b3248": "683bf610eb339a62204c182bf36e807e",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fd/c76616a4b28cf52d4fbad64beb1b8172cf18d5": "6e5d719639a6c84ab81ec6a33e46be03",
".git/refs/heads/master": "a34d2d8e3e1caebffe105b893d1a38bb",
"assets/AssetManifest.json": "763fedcc4750a14b3aa33b5494cbf0ab",
"assets/assets/design_course/design_course.png": "056917dfdf670a55361f3fde8efbfd8e",
"assets/assets/design_course/interFace1.png": "cd8a44e8d0af949a031c0ea83958d623",
"assets/assets/design_course/interFace2.png": "c101d35e907f00f40900fca7f9c4c69e",
"assets/assets/design_course/interFace3.png": "25e4c23657b1dac674e352d274ad8b2e",
"assets/assets/design_course/interFace4.png": "aeaa1e1b0de05128ab97337e9a73c25c",
"assets/assets/design_course/userImage.png": "f0f0f1fe2d13630b6eab4fc122df0879",
"assets/assets/design_course/webInterFace.png": "3ac7805ba2cca78a43bcb0658b1098cd",
"assets/assets/fitness_app/area1.png": "9cbfec64c29ec6821547f1c5093f38b7",
"assets/assets/fitness_app/area2.png": "2863c486c15808e8f105ccac2febfdbc",
"assets/assets/fitness_app/area3.png": "e85a8d2207edfb0325369d93982fba03",
"assets/assets/fitness_app/back.png": "af6b0e6121d6eb48289cce3a3b8d8963",
"assets/assets/fitness_app/bell.png": "929723572aa737a354244ca14fe5659b",
"assets/assets/fitness_app/bottle.png": "840d3c89291f9d3b0a859d7479c10d0c",
"assets/assets/fitness_app/breakfast.png": "1d2b0e6a7e46a44723131c663471f811",
"assets/assets/fitness_app/burned.png": "2ffad4b8dff525e57473142f0265b6bd",
"assets/assets/fitness_app/dinner.png": "d61779f47b560d09b0df15b346323ac4",
"assets/assets/fitness_app/eaten.png": "3f7d6f5aea8996d15d52c4c2268abd45",
"assets/assets/fitness_app/fitness_app.png": "bd55b7dc68210a0a5e6fa9341a47dbaf",
"assets/assets/fitness_app/glass.png": "266bca612c726abd6e481a4d890cef8e",
"assets/assets/fitness_app/lunch.png": "6855159f38835c1f03289b102a2e8b52",
"assets/assets/fitness_app/nyc.png": "dcdde11767e9423856859fc78a5d31b1",
"assets/assets/fitness_app/runner.png": "efb26bd46e91d305bda3b4b3c5a57c54",
"assets/assets/fitness_app/snack.png": "14a3e91c7a517b0a2f71dbcd86d2104d",
"assets/assets/fitness_app/tab_1.png": "629111ba46f6559071bcf25d2859a7ad",
"assets/assets/fitness_app/tab_1s.png": "fbd3aa5ed884a724f0435521586f6585",
"assets/assets/fitness_app/tab_2.png": "6506b7480618968b3daee97570927f65",
"assets/assets/fitness_app/tab_2s.png": "d270e94953ae9b7f377c5b253345374d",
"assets/assets/fitness_app/tab_3.png": "2a8f733675e2d8a7c6e9ac67a535bbf2",
"assets/assets/fitness_app/tab_3s.png": "a9093dcadf7724797ee22a5a802da7ad",
"assets/assets/fitness_app/tab_4.png": "f679006d5a49884f9ae89628d1d62d88",
"assets/assets/fitness_app/tab_4s.png": "40c45bbb7601c039da61be3e3c0f7520",
"assets/assets/fitness_app/tins_1.png": "e9dbc1e426ece02b35e0dcc14938f0b3",
"assets/assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/fonts/WorkSans-Bold.ttf": "1fed2d8028f8f5356cbecedb03427405",
"assets/assets/fonts/WorkSans-Medium.ttf": "488b6f72b6183415e7a20aafa803a0c8",
"assets/assets/fonts/WorkSans-Regular.ttf": "30be604d29fd477c201fb1d6e668eaeb",
"assets/assets/fonts/WorkSans-SemiBold.ttf": "6f8da6d25c25d58ef3ec1c8b7c0e69c3",
"assets/assets/hotel/hotel_1.png": "a9ae40f2bd59b4e56bc3d6ddd98768a5",
"assets/assets/hotel/hotel_2.png": "1303973de1c8e2226a34b770aaa50fb0",
"assets/assets/hotel/hotel_3.png": "2f6ae1319a610cea2b8bb86c6c789e9b",
"assets/assets/hotel/hotel_4.png": "d5a6dfd83f984b2b8d5e408e74018412",
"assets/assets/hotel/hotel_5.png": "ee2a764f889388f9e60a981028fe1e91",
"assets/assets/hotel/hotel_booking.png": "89f1fbbdc7d80e4a6292622d7f929690",
"assets/assets/images/feedbackImage.png": "5f8e9064f54cf51a70fee2da78a5b014",
"assets/assets/images/helpImage.png": "2bff0fc93675d32f89db50f2d3e2a5b1",
"assets/assets/images/inviteImage.png": "4d337cf829c67258aa3aae385f5ec31c",
"assets/assets/images/logo.png": "a3d9963c90695bd72341431bc4df26b2",
"assets/assets/images/logot.png": "5052eecf2d940e1e42e6bef7661bfa3c",
"assets/assets/images/supportIcon.png": "2eb21b9823a538c996ec667e17388322",
"assets/assets/images/userImage.png": "afc26cb27789a846c7047e57cb9c6422",
"assets/assets/introduction_animation/care_image.png": "9bf0ea738c1dcabf5650abea1c02e993",
"assets/assets/introduction_animation/introduction_animation.png": "309f80cbbe9ba84d2d643677c7853907",
"assets/assets/introduction_animation/introduction_image.png": "307c773d181ceeb899559add51c7acb4",
"assets/assets/introduction_animation/mood_dairy_image.png": "64172e2be2e435a8a002ee49d83d779b",
"assets/assets/introduction_animation/relax_image.png": "750458c224fc63ede91b894cb893fb03",
"assets/assets/introduction_animation/welcome.png": "0b5447c747d72f631c7b92e12f26e2a1",
"assets/FontManifest.json": "92d40a44a40733d060286a8973a3bd6c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "9f2afab9475557e61b25147dc0e48222",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5f303454769f6c2b51c36d2bc215a09f",
"/": "a6acce3c422afa43843a91ea65238abc",
"KOI/.git/COMMIT_EDITMSG": "2244fbd6bee5dcbe312e387c062ce6e6",
"KOI/.git/config": "17f10cf9e9d0c520a9f529f3312778b3",
"KOI/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"KOI/.git/FETCH_HEAD": "a4d1bb5b359baad7abd5e0d6f09ca614",
"KOI/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"KOI/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"KOI/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"KOI/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"KOI/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"KOI/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"KOI/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"KOI/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"KOI/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"KOI/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"KOI/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"KOI/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"KOI/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"KOI/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"KOI/.git/index": "0cd0cfe0b2b7001266ca5330c7314a1f",
"KOI/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"KOI/.git/logs/HEAD": "700ca0faef95e384ed43cd21c4eae036",
"KOI/.git/logs/refs/heads/main": "700ca0faef95e384ed43cd21c4eae036",
"KOI/.git/logs/refs/remotes/origin/HEAD": "bfb749abb8310852215f061bbd8f3347",
"KOI/.git/logs/refs/remotes/origin/main": "b47d84196bbf6a5ee963406f1abc8f99",
"KOI/.git/objects/0e/9bcd0465ca46371f9575ab751caf660d8f7c7f": "735df5b409532bd1a7fc9952b78e507c",
"KOI/.git/objects/26/316d126983275d57594a62671b39349f859426": "a0d966d4cfd6bc196574b2f7b5bc5c7a",
"KOI/.git/objects/2f/4fe76bbf2aebaaabd45a9fdc38ec55a55648a6": "65afdeb89216fd3c5c52920a84556bbe",
"KOI/.git/objects/3d/05471b8a815f1e70e1b7805d43ff8a4dde2331": "cce19e94ad6ecd6be3cb28c3a20c80a5",
"KOI/.git/objects/7a/8b9cdfebb325774e4de07e20712c11710db736": "49851db8954b1372f1c6f76a4ddb2ad2",
"KOI/.git/objects/98/ea0d1d371946277f144901519d9f3bb9a0fe91": "fcfd05fba4ba9f02031d9a638db8b80c",
"KOI/.git/objects/pack/pack-ca9ec59016dd9c64ae86564a4c5e6ccd6dbc91fa.idx": "d6f03810eb4c0723a67698264fc618ff",
"KOI/.git/objects/pack/pack-ca9ec59016dd9c64ae86564a4c5e6ccd6dbc91fa.pack": "e4b39dc029d597a9f47639a40020b1fe",
"KOI/.git/packed-refs": "d179e853d759e7abbd243bafc8c7a60d",
"KOI/.git/refs/heads/main": "a3c63dbf262d96404f886dc16bca72d7",
"KOI/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"KOI/.git/refs/remotes/origin/main": "a3c63dbf262d96404f886dc16bca72d7",
"KOI/assets/AssetManifest.json": "763fedcc4750a14b3aa33b5494cbf0ab",
"KOI/assets/assets/design_course/design_course.png": "056917dfdf670a55361f3fde8efbfd8e",
"KOI/assets/assets/design_course/interFace1.png": "cd8a44e8d0af949a031c0ea83958d623",
"KOI/assets/assets/design_course/interFace2.png": "c101d35e907f00f40900fca7f9c4c69e",
"KOI/assets/assets/design_course/interFace3.png": "25e4c23657b1dac674e352d274ad8b2e",
"KOI/assets/assets/design_course/interFace4.png": "aeaa1e1b0de05128ab97337e9a73c25c",
"KOI/assets/assets/design_course/userImage.png": "f0f0f1fe2d13630b6eab4fc122df0879",
"KOI/assets/assets/design_course/webInterFace.png": "3ac7805ba2cca78a43bcb0658b1098cd",
"KOI/assets/assets/fitness_app/area1.png": "9cbfec64c29ec6821547f1c5093f38b7",
"KOI/assets/assets/fitness_app/area2.png": "2863c486c15808e8f105ccac2febfdbc",
"KOI/assets/assets/fitness_app/area3.png": "e85a8d2207edfb0325369d93982fba03",
"KOI/assets/assets/fitness_app/back.png": "af6b0e6121d6eb48289cce3a3b8d8963",
"KOI/assets/assets/fitness_app/bell.png": "929723572aa737a354244ca14fe5659b",
"KOI/assets/assets/fitness_app/bottle.png": "840d3c89291f9d3b0a859d7479c10d0c",
"KOI/assets/assets/fitness_app/breakfast.png": "1d2b0e6a7e46a44723131c663471f811",
"KOI/assets/assets/fitness_app/burned.png": "2ffad4b8dff525e57473142f0265b6bd",
"KOI/assets/assets/fitness_app/dinner.png": "d61779f47b560d09b0df15b346323ac4",
"KOI/assets/assets/fitness_app/eaten.png": "3f7d6f5aea8996d15d52c4c2268abd45",
"KOI/assets/assets/fitness_app/fitness_app.png": "bd55b7dc68210a0a5e6fa9341a47dbaf",
"KOI/assets/assets/fitness_app/glass.png": "266bca612c726abd6e481a4d890cef8e",
"KOI/assets/assets/fitness_app/lunch.png": "6855159f38835c1f03289b102a2e8b52",
"KOI/assets/assets/fitness_app/nyc.png": "dcdde11767e9423856859fc78a5d31b1",
"KOI/assets/assets/fitness_app/runner.png": "efb26bd46e91d305bda3b4b3c5a57c54",
"KOI/assets/assets/fitness_app/snack.png": "14a3e91c7a517b0a2f71dbcd86d2104d",
"KOI/assets/assets/fitness_app/tab_1.png": "629111ba46f6559071bcf25d2859a7ad",
"KOI/assets/assets/fitness_app/tab_1s.png": "fbd3aa5ed884a724f0435521586f6585",
"KOI/assets/assets/fitness_app/tab_2.png": "6506b7480618968b3daee97570927f65",
"KOI/assets/assets/fitness_app/tab_2s.png": "d270e94953ae9b7f377c5b253345374d",
"KOI/assets/assets/fitness_app/tab_3.png": "2a8f733675e2d8a7c6e9ac67a535bbf2",
"KOI/assets/assets/fitness_app/tab_3s.png": "a9093dcadf7724797ee22a5a802da7ad",
"KOI/assets/assets/fitness_app/tab_4.png": "f679006d5a49884f9ae89628d1d62d88",
"KOI/assets/assets/fitness_app/tab_4s.png": "40c45bbb7601c039da61be3e3c0f7520",
"KOI/assets/assets/fitness_app/tins_1.png": "e9dbc1e426ece02b35e0dcc14938f0b3",
"KOI/assets/assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"KOI/assets/assets/fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"KOI/assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"KOI/assets/assets/fonts/WorkSans-Bold.ttf": "1fed2d8028f8f5356cbecedb03427405",
"KOI/assets/assets/fonts/WorkSans-Medium.ttf": "488b6f72b6183415e7a20aafa803a0c8",
"KOI/assets/assets/fonts/WorkSans-Regular.ttf": "30be604d29fd477c201fb1d6e668eaeb",
"KOI/assets/assets/fonts/WorkSans-SemiBold.ttf": "6f8da6d25c25d58ef3ec1c8b7c0e69c3",
"KOI/assets/assets/hotel/hotel_1.png": "a9ae40f2bd59b4e56bc3d6ddd98768a5",
"KOI/assets/assets/hotel/hotel_2.png": "1303973de1c8e2226a34b770aaa50fb0",
"KOI/assets/assets/hotel/hotel_3.png": "2f6ae1319a610cea2b8bb86c6c789e9b",
"KOI/assets/assets/hotel/hotel_4.png": "d5a6dfd83f984b2b8d5e408e74018412",
"KOI/assets/assets/hotel/hotel_5.png": "ee2a764f889388f9e60a981028fe1e91",
"KOI/assets/assets/hotel/hotel_booking.png": "89f1fbbdc7d80e4a6292622d7f929690",
"KOI/assets/assets/images/feedbackImage.png": "5f8e9064f54cf51a70fee2da78a5b014",
"KOI/assets/assets/images/helpImage.png": "2bff0fc93675d32f89db50f2d3e2a5b1",
"KOI/assets/assets/images/inviteImage.png": "4d337cf829c67258aa3aae385f5ec31c",
"KOI/assets/assets/images/logo.png": "a3d9963c90695bd72341431bc4df26b2",
"KOI/assets/assets/images/logot.png": "5052eecf2d940e1e42e6bef7661bfa3c",
"KOI/assets/assets/images/supportIcon.png": "2eb21b9823a538c996ec667e17388322",
"KOI/assets/assets/images/userImage.png": "afc26cb27789a846c7047e57cb9c6422",
"KOI/assets/assets/introduction_animation/care_image.png": "9bf0ea738c1dcabf5650abea1c02e993",
"KOI/assets/assets/introduction_animation/introduction_animation.png": "309f80cbbe9ba84d2d643677c7853907",
"KOI/assets/assets/introduction_animation/introduction_image.png": "307c773d181ceeb899559add51c7acb4",
"KOI/assets/assets/introduction_animation/mood_dairy_image.png": "64172e2be2e435a8a002ee49d83d779b",
"KOI/assets/assets/introduction_animation/relax_image.png": "750458c224fc63ede91b894cb893fb03",
"KOI/assets/assets/introduction_animation/welcome.png": "0b5447c747d72f631c7b92e12f26e2a1",
"KOI/assets/FontManifest.json": "92d40a44a40733d060286a8973a3bd6c",
"KOI/assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"KOI/assets/NOTICES": "9f2afab9475557e61b25147dc0e48222",
"KOI/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"KOI/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"KOI/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"KOI/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"KOI/canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"KOI/canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"KOI/canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"KOI/canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"KOI/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"KOI/flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"KOI/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"KOI/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"KOI/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"KOI/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"KOI/index.html": "a6acce3c422afa43843a91ea65238abc",
"KOI/main.dart.js": "be60046cdb4424ce0550bd2d80b9a886",
"KOI/manifest.json": "574a94fed7cba3d128a1f217687123fe",
"KOI/README.md": "e9a76e8a275f12ad23d01e8f1968acc0",
"KOI/version.json": "afa89be6a72cf47ee26a854b8823284a",
"main.dart.js": "6e193a9049a89e2bbc81e1ec21229388",
"manifest.json": "574a94fed7cba3d128a1f217687123fe",
"version.json": "afa89be6a72cf47ee26a854b8823284a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
