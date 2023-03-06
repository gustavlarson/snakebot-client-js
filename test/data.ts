import { GameSettings } from '../src/types';

export const settings: GameSettings = {
  maxNoofPlayers: 5,
  startSnakeLength: 1,
  timeInMsPerTick: 250,
  obstaclesEnabled: true,
  foodEnabled: true,
  headToTailConsumes: true,
  tailConsumeGrows: false,
  addFoodLikelihood: 15,
  removeFoodLikelihood: 5,
  spontaneousGrowthEveryNWorldTick: 3,
  trainingGame: true,
  pointsPerLength: 1,
  pointsPerFood: 2,
  pointsPerCausedDeath: 5,
  pointsPerNibble: 10,
  noofRoundsTailProtectedAfterNibble: 3,
  startFood: 0,
  startObstacles: 5,
};

export const test1 = {
  width: 46,
  height: 34,
  worldTick: 212,
  snakeInfos: [
    {
      name: 'Gustav',
      points: 78,
      positions: [
        67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 132, 133, 134, 135, 181, 227,
        273, 319, 318, 317, 363, 362, 316, 270, 224, 178, 177, 223, 222, 221, 175, 129, 128, 127, 126, 172, 171, 170,
        124, 123, 169, 168, 167, 213, 212, 211, 210, 209, 208, 207, 206, 205, 251, 250, 204, 203, 249, 295, 341, 387,
        433, 432,
      ],
      tailProtectedForGameTicks: 0,
      id: '01f1a3c9-e695-422f-897f-602f8ecd7b78',
    },
    {
      name: 'StraightBot',
      points: 34,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: '9695bb1f-831b-42d1-8f24-c1b76db94c9a',
    },
    {
      name: 'RandomBot',
      points: 55,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: '9545caa0-8a3a-4b64-8403-9d7201cd31bb',
    },
    {
      name: 'StayAliveBot',
      points: 51,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: 'dc543545-9f0f-45bf-b90a-f42eab9c6d15',
    },
    {
      name: 'Snakey',
      points: 88,
      positions: [
        676, 675, 674, 673, 719, 765, 766, 767, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734,
        735, 781, 827, 873, 872, 826, 825, 824, 823, 822, 821, 820, 819, 818, 817, 816, 815, 814, 813, 812, 811, 810,
        809, 808, 807, 806, 805, 804, 803, 802, 801, 800, 799, 798, 797, 796, 842, 843, 844, 845, 846, 847, 893, 939,
        985, 1031, 1077, 1076, 1122, 1123, 1169, 1215,
      ],
      tailProtectedForGameTicks: 0,
      id: '9d0206f2-93c6-4b54-a3e8-e503a571d5cc',
    },
  ],
  foodPositions: [44, 94, 109, 113, 199, 239, 392, 471, 580, 952, 1045, 1221, 1319, 1332, 1483],
  obstaclePositions: [107, 485, 909, 1037, 1058],
};

export const test2 = {
  width: 46,
  height: 34,
  worldTick: 207,
  snakeInfos: [
    {
      name: 'StayAliveBot',
      points: 80,
      positions: [
        1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460,
        1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1422, 1376, 1330, 1284, 1238, 1192, 1146, 1100, 1054, 1008, 962,
        916, 870, 824, 778, 732, 686, 640, 594, 548, 502, 456, 457, 503, 549, 595, 641, 687, 733, 779, 825, 871, 917,
        963, 1009, 1055, 1101, 1147, 1193, 1239, 1285, 1331, 1377, 1423, 1469, 1515,
      ],
      tailProtectedForGameTicks: 0,
      id: 'f84ccc65-db65-46c8-837c-15ed28246585',
    },
    {
      name: 'Gustav',
      points: 85,
      positions: [
        291, 337, 336, 382, 381, 380, 379, 378, 424, 425, 426, 427, 428, 474, 520, 566, 565, 611, 610, 656, 702, 703,
        749, 750, 796, 842, 888, 887, 886, 932, 933, 979, 1025, 1071, 1117, 1118, 1164, 1165, 1166, 1212, 1258, 1259,
        1213, 1214, 1260, 1306, 1307, 1308, 1309, 1263, 1217, 1171, 1125, 1124, 1170, 1169, 1123, 1077, 1076, 1075,
        1029, 983, 937, 938, 939, 940, 986, 987, 988, 942, 896, 850, 851, 805,
      ],
      tailProtectedForGameTicks: 0,
      id: 'c83c381f-a312-4827-a594-6b60686f379a',
    },
    {
      name: 'StayAliveBot',
      points: 48,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: 'c5e9d4a7-61cd-477f-b328-9515e297c3fb',
    },
    {
      name: 'StraightBot',
      points: 75,
      positions: [
        357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 412, 458, 504, 550, 596, 642, 688, 734, 780, 826, 872, 918,
        964, 1010, 1056, 1102, 1148, 1194, 1240, 1286, 1332, 1378, 1424, 1470, 1516, 1562, 1563, 1517, 1471, 1425, 1379,
        1333, 1287, 1241, 1195, 1149, 1103, 1057, 1011, 965, 919, 873, 827, 781, 735, 689, 643, 597, 551, 505, 459, 413,
        367, 321, 275, 229, 183, 137, 91, 45, 44, 43,
      ],
      tailProtectedForGameTicks: 0,
      id: '5b1128f8-225d-4783-886f-0054e7eeaa5c',
    },
    {
      name: 'BrainySnakePlayer',
      points: 69,
      positions: [
        751, 797, 843, 889, 935, 981, 1027, 1026, 1072, 1073, 1119, 1120, 1074, 1028, 982, 936, 890, 844, 845, 846, 847,
        848, 802, 756, 710, 664, 618, 572, 526, 480, 434, 388, 342, 296, 250, 204, 158, 112, 66, 65, 111, 157, 203, 249,
        295, 341, 387, 433, 479, 525, 571, 617, 663, 662, 616, 570, 524, 478, 432, 386, 340, 294, 248, 202, 156, 110,
        64, 63, 109, 155,
      ],
      tailProtectedForGameTicks: 0,
      id: '63d29c58-d6d9-4c5f-966d-797c8b79f0c6',
    },
  ],
  foodPositions: [208, 468, 676, 906, 1065, 1297, 1440, 1533],
  obstaclePositions: [
    226, 227, 228, 272, 273, 274, 318, 319, 320, 706, 707, 708, 752, 753, 754, 798, 799, 800, 976, 980, 1368, 1369,
    1414, 1415,
  ],
};

export const test3 = {
  width: 46,
  height: 34,
  worldTick: 32,
  snakeInfos: [
    {
      name: 'RandomBot',
      points: 11,
      positions: [368, 322, 276, 230, 184, 138, 92, 46, 0, 1, 2, 3],
      tailProtectedForGameTicks: 0,
      id: '0ffc98c1-75f9-47be-9762-e173da25ea16',
    },
    {
      name: 'StraightBot',
      points: 11,
      positions: [1058, 1104, 1150, 1196, 1242, 1288, 1334, 1380, 1426, 1472, 1473, 1474],
      tailProtectedForGameTicks: 0,
      id: '6153fc1e-d62e-4546-b0ee-9edea4b4a026',
    },
    {
      name: 'BrainySnakePlayer',
      points: 11,
      positions: [595, 549, 503, 457, 411, 365, 319, 273, 227, 181, 135, 89],
      tailProtectedForGameTicks: 0,
      id: 'ce764bb3-b0e7-437e-bab5-f7af016139ec',
    },
    {
      name: 'Gustav',
      points: 11,
      positions: [187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198],
      tailProtectedForGameTicks: 0,
      id: 'a6754fb0-e16b-427f-a6da-67ce6e1c791e',
    },
    {
      name: 'StayAliveBot',
      points: 11,
      positions: [1001, 1000, 999, 998, 997, 996, 995, 994, 993, 992, 991, 990],
      tailProtectedForGameTicks: 0,
      id: '6ef675f2-f94c-41e9-9396-e10169dac63e',
    },
  ],
  foodPositions: [145, 303, 850, 1444, 1545],
  obstaclePositions: [
    626, 860, 861, 906, 907, 1071, 1072, 1073, 1117, 1118, 1119, 1163, 1164, 1165, 1331, 1332, 1377, 1378, 1510,
  ],
};

export const test4 = {
  width: 46,
  height: 34,
  worldTick: 27,
  snakeInfos: [
    {
      name: 'RandomBot',
      points: 9,
      positions: [138, 92, 46, 0, 1, 2, 3, 4, 50, 49],
      tailProtectedForGameTicks: 0,
      id: '0ffc98c1-75f9-47be-9762-e173da25ea16',
    },
    {
      name: 'StraightBot',
      points: 9,
      positions: [1288, 1334, 1380, 1426, 1472, 1473, 1474, 1475, 1476, 1477],
      tailProtectedForGameTicks: 0,
      id: '6153fc1e-d62e-4546-b0ee-9edea4b4a026',
    },
    {
      name: 'BrainySnakePlayer',
      points: 9,
      positions: [365, 319, 273, 227, 181, 135, 89, 88, 134, 180],
      tailProtectedForGameTicks: 0,
      id: 'ce764bb3-b0e7-437e-bab5-f7af016139ec',
    },
    {
      name: 'Gustav',
      points: 9,
      positions: [192, 193, 194, 195, 196, 197, 198, 199, 200, 201],
      tailProtectedForGameTicks: 0,
      id: 'a6754fb0-e16b-427f-a6da-67ce6e1c791e',
    },
    {
      name: 'StayAliveBot',
      points: 9,
      positions: [996, 995, 994, 993, 992, 991, 990, 989, 988, 987],
      tailProtectedForGameTicks: 0,
      id: '6ef675f2-f94c-41e9-9396-e10169dac63e',
    },
  ],
  foodPositions: [145, 850, 1545],
  obstaclePositions: [
    626, 860, 861, 906, 907, 1071, 1072, 1073, 1117, 1118, 1119, 1163, 1164, 1165, 1331, 1332, 1377, 1378, 1510,
  ],
};

export const test5 = {
  width: 46,
  height: 34,
  worldTick: 137,
  snakeInfos: [
    {
      name: 'Gustav',
      points: 50,
      positions: [
        448, 494, 540, 539, 585, 584, 538, 537, 536, 535, 534, 488, 442, 396, 397, 351, 352, 398, 399, 353, 354, 400,
        401, 355, 309, 310, 311, 312, 313, 267, 221, 175, 174, 173, 219, 265, 264, 263, 217, 171, 125, 124, 123, 122,
        168, 214, 213,
      ],
      tailProtectedForGameTicks: 0,
      id: '18209701-b055-4d83-bb75-a18126b26128',
    },
    {
      name: 'BrainySnakePlayer',
      points: 49,
      positions: [
        780, 826, 872, 918, 964, 1010, 1011, 1057, 1056, 1102, 1148, 1194, 1240, 1286, 1332, 1378, 1424, 1425, 1471,
        1470, 1516, 1515, 1469, 1423, 1377, 1331, 1285, 1239, 1193, 1147, 1101, 1055, 1009, 963, 917, 871, 825, 779,
        733, 687, 641, 595, 549, 503, 457, 411, 365, 319,
      ],
      tailProtectedForGameTicks: 0,
      id: '5c3b3956-cb89-426f-a092-59eb98d913a0',
    },
    {
      name: 'StayAliveBot',
      points: 46,
      positions: [
        593, 639, 685, 731, 777, 823, 869, 915, 961, 1007, 1053, 1099, 1145, 1191, 1237, 1283, 1329, 1375, 1421, 1467,
        1466, 1420, 1374, 1328, 1282, 1236, 1190, 1144, 1098, 1052, 1006, 960, 914, 868, 822, 776, 730, 684, 638, 592,
        546, 500, 454, 408, 362, 316, 270,
      ],
      tailProtectedForGameTicks: 0,
      id: 'b535c689-e0c2-4e37-8c1f-c1acb04a533e',
    },
    {
      name: 'RandomBot',
      points: 21,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: 'e569fa5d-a31a-45c7-84df-b4463b74581b',
    },
    {
      name: 'RandomBot',
      points: 46,
      positions: [
        8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 97,
        98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 156, 155, 154, 153, 152, 151,
      ],
      tailProtectedForGameTicks: 0,
      id: 'a54f95c2-989a-471e-99a3-19e141896b99',
    },
  ],
  foodPositions: [48, 433, 655, 735, 875, 969, 987, 1015, 1207, 1340, 1343],
  obstaclePositions: [
    200, 201, 246, 247, 449, 450, 451, 463, 464, 465, 495, 496, 497, 509, 510, 511, 524, 541, 542, 543, 555, 556, 557,
    965,
  ],
};

export const test6 = {
  width: 46,
  height: 34,
  worldTick: 212,
  snakeInfos: [
    {
      name: 'Gustav',
      points: 79,
      positions: [
        863, 909, 955, 1001, 1002, 1048, 1047, 1093, 1139, 1138, 1184, 1230, 1231, 1232, 1186, 1140, 1094, 1095, 1049,
        1003, 957, 958, 912, 866, 820, 774, 775, 729, 728, 727, 681, 682, 683, 637, 636, 635, 634, 680, 726, 725, 771,
        817, 816, 770, 724, 723, 677, 676, 630, 629, 628, 582, 536, 490, 489, 488, 442, 396, 397, 351, 352, 353, 307,
        308, 354, 400, 399, 445, 446, 447, 493, 494, 495, 449,
      ],
      tailProtectedForGameTicks: 0,
      id: '4cd13960-55b7-4e9e-9650-f3183dfbdf97',
    },
    {
      name: 'StayAliveBot',
      points: 78,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: 'b2224d5b-28e1-4576-9feb-85ad7b2e9809',
    },
    {
      name: 'BrainySnakePlayer',
      points: 71,
      positions: [
        229, 275, 321, 367, 413, 412, 366, 365, 411, 457, 458, 504, 550, 549, 595, 641, 642, 688, 734, 780, 781, 827,
        826, 872, 918, 964, 1010, 1056, 1055, 1009, 963, 917, 871, 825, 824, 870, 916, 962, 1008, 1054, 1053, 1007, 961,
        915, 869, 823, 777, 731, 685, 639, 593, 547, 501, 455, 409, 363, 317, 271, 225, 179, 133, 87, 88, 134, 180, 226,
        272, 273, 227, 181, 135, 89,
      ],
      tailProtectedForGameTicks: 0,
      id: '07478a41-3dc9-4ef2-8ff5-39b3ef4f5999',
    },
    {
      name: 'BrainySnakePlayer',
      points: 79,
      positions: [
        1075, 1121, 1167, 1213, 1259, 1305, 1351, 1397, 1443, 1489, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542,
        1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560,
        1514, 1513, 1512, 1511, 1510, 1509, 1508, 1507, 1506, 1505, 1504, 1503, 1502, 1501, 1500, 1499, 1498, 1497,
        1496, 1495, 1494, 1493, 1492, 1491, 1490, 1444, 1398, 1352, 1306, 1260, 1214, 1168, 1122, 1076, 1030, 984, 938,
      ],
      tailProtectedForGameTicks: 0,
      id: 'f2481ae2-1ab0-4e82-912b-c036ea3cda5a',
    },
    {
      name: 'Snakey',
      points: 85,
      positions: [
        1091, 1137, 1136, 1135, 1134, 1180, 1179, 1225, 1271, 1270, 1269, 1268, 1267, 1266, 1220, 1174, 1175, 1221,
        1222, 1223, 1177, 1176, 1130, 1131, 1132, 1133, 1087, 1086, 1085, 1084, 1038, 992, 991, 1037, 1083, 1129, 1128,
        1082, 1036, 990, 944, 898, 852, 806, 760, 714, 715, 761, 807, 853, 899, 945, 946, 900, 854, 808, 762, 763, 809,
        855, 901, 947, 993, 1039, 1040, 1041, 1042, 996, 995, 994, 948, 949, 950, 951, 905, 859,
      ],
      tailProtectedForGameTicks: 0,
      id: 'c2905738-6aa9-49ac-98bb-7421eac17d87',
    },
  ],
  foodPositions: [221, 285, 706, 784, 839, 876, 1112, 1118, 1292, 1310, 1337, 1526],
  obstaclePositions: [
    384, 385, 386, 430, 431, 432, 476, 477, 478, 491, 492, 537, 538, 765, 766, 811, 812, 997, 998, 1043, 1044, 1210,
    1211, 1212, 1256, 1257, 1258, 1302, 1303, 1304,
  ],
};
