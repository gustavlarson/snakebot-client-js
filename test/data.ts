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

export const test7 = {
  width: 46,
  height: 34,
  worldTick: 35,
  snakeInfos: [
    {
      name: 'Big',
      points: 12,
      positions: [1242, 1243, 1197, 1151, 1150, 1104, 1058, 1012, 966, 967, 1013, 1059, 1060],
      tailProtectedForGameTicks: 0,
      id: 'd699105e-a974-451a-b23e-659f33c58057',
    },
    {
      name: 'Snakey',
      points: 14,
      positions: [979, 978, 977, 931, 885, 886, 887, 888, 889, 890, 891, 892, 938],
      tailProtectedForGameTicks: 0,
      id: 'aa310f6c-e1fa-42a3-8ca2-aea245d0d08d',
    },
    {
      name: 'Snakey',
      points: 15,
      positions: [586, 585, 584, 583, 582, 581, 580, 579, 578, 532, 531, 530, 529, 528],
      tailProtectedForGameTicks: 0,
      id: 'cc7af706-5e0d-46c5-88ba-e0e23a61bbde',
    },
    {
      name: 'StraightBot',
      points: 12,
      positions: [696, 650, 604, 558, 512, 466, 420, 374, 328, 282, 236, 190, 144],
      tailProtectedForGameTicks: 0,
      id: '051a40a9-9938-4cdc-9479-d5bf2466e16d',
    },
    {
      name: 'StraightBot',
      points: 12,
      positions: [899, 853, 807, 761, 715, 669, 623, 577, 576, 622, 668, 714, 760],
      tailProtectedForGameTicks: 0,
      id: 'f1388a6b-41df-4555-aa08-3356376583fa',
    },
  ],
  foodPositions: [150, 213, 326, 643, 1112],
  obstaclePositions: [
    7, 8, 9, 53, 54, 55, 99, 100, 101, 618, 619, 620, 664, 665, 666, 701, 702, 710, 711, 712, 747, 748, 802, 803, 804,
    848, 849, 850, 863, 894, 895, 896,
  ],
};

export const test8 = {
  width: 46,
  height: 34,
  worldTick: 574,
  snakeInfos: [
    {
      name: 'Snakey',
      points: 229,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: 'f0f3dba5-5d6b-4f4c-b24c-1d87390572a3',
    },
    {
      name: 'Snakey',
      points: 160,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: '4c46f906-71ec-41e6-a919-08984b161186',
    },
    {
      name: 'Snakey',
      points: 246,
      positions: [
        99, 53, 52, 51, 50, 49, 48, 47, 46, 92, 93, 94, 95, 141, 140, 139, 138, 184, 185, 186, 232, 231, 230, 276, 277,
        278, 324, 323, 322, 368, 369, 370, 416, 415, 414, 460, 461, 462, 508, 507, 553, 552, 598, 644, 690, 736, 782,
        828, 874, 875, 876, 877, 923, 924, 878, 832, 831, 830, 829, 783, 737, 738, 739, 740, 786, 787, 788, 789, 790,
        836, 835, 834, 880, 926, 972, 1018, 1064, 1110, 1111, 1065, 1019, 973, 927, 881, 882, 928, 929, 975, 1021, 1020,
        1066, 1112, 1158, 1157, 1203, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261,
        1215, 1214, 1213, 1212, 1211, 1210, 1209, 1208, 1207, 1161, 1162, 1163, 1164, 1118, 1117, 1116, 1115, 1114,
        1160, 1159, 1113, 1067, 1068, 1022, 1023, 1069, 1070, 1024, 978, 977, 976, 930, 931, 932, 886, 885, 884, 883,
        837, 791, 745, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 756, 802, 801, 800, 799, 798, 797,
        796, 795, 841, 887, 933, 979, 1025, 1071, 1072, 1073, 1119, 1165, 1166, 1167, 1168, 1169, 1170, 1216, 1262,
        1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280,
        1234,
      ],
      tailProtectedForGameTicks: 0,
      id: '9707797f-92c2-4299-9c26-9ca1355f58e9',
    },
    {
      name: 'StraightBot',
      points: 55,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: '8ef36deb-81aa-4f52-bf7f-beb42707c455',
    },
    {
      name: 'Big',
      points: 229,
      positions: [
        117, 163, 164, 210, 209, 208, 254, 300, 301, 255, 256, 302, 303, 349, 395, 441, 440, 486, 485, 531, 530, 576,
        575, 574, 620, 621, 667, 666, 712, 758, 804, 850, 849, 803, 757, 711, 665, 664, 663, 662, 661, 660, 659, 658,
        657, 656, 655, 654, 653, 652, 698, 744, 743, 697, 651, 650, 696, 695, 649, 603, 602, 601, 555, 509, 510, 556,
        557, 511, 512, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 429, 383, 337, 338, 339, 385, 384, 430, 476,
        522, 521, 520, 519, 518, 517, 516, 515, 514, 513, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 523,
        524, 525, 479, 478, 477, 431, 432, 433, 387, 386, 340, 341, 342, 343, 297, 251, 205, 159, 113, 67, 66, 65, 64,
        63, 62, 61, 60, 59, 58, 57, 56, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 158, 204, 250, 296, 295,
        249, 248, 247, 246, 200, 201, 202, 203, 157, 156, 155, 154, 153, 152, 151, 150, 149, 195, 241, 287, 333, 379,
        378, 332, 331, 330, 284, 285, 286, 240, 239, 238, 237, 236, 190, 189, 235, 234, 280, 326, 372, 418, 417, 371,
        325, 279, 233,
      ],
      tailProtectedForGameTicks: 0,
      id: 'b674f195-6b8c-4952-be13-4341e6aef0f6',
    },
  ],
  foodPositions: [39, 77, 455, 613, 648, 678, 680, 685, 951, 1001, 1058, 1087, 1178, 1364, 1375, 1443, 1450, 1547],
  obstaclePositions: [196, 334, 335, 336, 380, 381, 382, 426, 427, 428, 599, 600, 645, 646, 772, 1233],
};

export const test9 = {
  width: 46,
  height: 34,
  worldTick: 267,
  snakeInfos: [
    {
      name: 'Little',
      points: 99,
      positions: [
        465, 419, 373, 327, 281, 235, 189, 143, 97, 96, 142, 188, 234, 280, 326, 372, 418, 464, 463, 417, 371, 325, 279,
        233, 187, 141, 95, 94, 140, 186, 232, 278, 324, 370, 416, 462, 508, 554, 600, 646, 692, 738, 784, 830, 876, 922,
        968, 1014, 1060, 1106, 1152, 1198, 1244, 1290, 1336, 1382, 1428, 1429, 1383, 1337, 1291, 1245, 1199, 1153, 1107,
        1061, 1015, 969, 923, 877, 831, 785, 739, 693, 647, 601, 602, 648, 694, 740, 786, 832, 878, 924, 970, 1016,
        1062, 1108, 1154, 1200, 1246, 1292,
      ],
      tailProtectedForGameTicks: 0,
      id: '771e5f1f-335c-4a48-9153-79d7c141b54d',
    },
    {
      name: 'Student',
      points: 91,
      positions: [
        1406, 1360, 1314, 1268, 1222, 1176, 1130, 1084, 1038, 992, 946, 900, 854, 808, 762, 716, 670, 624, 578, 532,
        486, 440, 394, 348, 302, 256, 210, 164, 118, 72, 26, 25, 71, 117, 163, 209, 255, 301, 347, 393, 439, 485, 531,
        577, 623, 669, 715, 761, 807, 853, 899, 945, 991, 1037, 1083, 1129, 1175, 1221, 1267, 1313, 1359, 1405, 1451,
        1497, 1543, 1542, 1496, 1450, 1404, 1358, 1312, 1266, 1220, 1174, 1128, 1082, 1036, 990, 944, 898, 852, 806,
        760, 714, 668, 622, 576, 530, 484, 438,
      ],
      tailProtectedForGameTicks: 0,
      id: '2d2dffdd-826e-4795-860c-b0dc4613fdb4',
    },
    {
      name: 'Big',
      points: 104,
      positions: [
        1545, 1546, 1547, 1548, 1502, 1503, 1457, 1456, 1410, 1411, 1412, 1366, 1367, 1368, 1369, 1370, 1371, 1325,
        1324, 1323, 1277, 1276, 1322, 1321, 1320, 1274, 1275, 1229, 1228, 1227, 1226, 1225, 1179, 1133, 1134, 1135,
        1089, 1090, 1044, 1043, 1042, 1041, 995, 949, 950, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006,
        1007, 1008, 1009, 1055, 1101, 1147, 1193, 1194, 1240, 1286, 1332, 1378, 1377, 1423, 1469, 1468, 1467, 1466,
        1465, 1464, 1463, 1462, 1461, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1376, 1375, 1374, 1373, 1327,
        1328,
      ],
      tailProtectedForGameTicks: 0,
      id: '3ada7837-0041-4a93-a880-460d1f5a808b',
    },
  ],
  foodPositions: [340, 475, 565, 595, 835, 868, 967, 1123, 1261, 1299, 1363, 1391, 1481],
  obstaclePositions: [104, 105, 150, 151, 563, 567, 847, 848, 893, 894, 1232, 1233, 1278, 1279],
};

export const test10 = {
  width: 46,
  height: 34,
  worldTick: 259,
  snakeInfos: [
    {
      name: 'Snakey',
      points: 100,
      positions: [
        579, 578, 624, 670, 669, 715, 716, 762, 763, 764, 765, 766, 767, 768, 814, 860, 906, 905, 859, 858, 904, 950,
        949, 995, 1041, 1087, 1133, 1132, 1086, 1040, 994, 948, 902, 856, 810, 809, 855, 901, 947, 946, 945, 944, 898,
        899, 853, 807, 806, 805, 804, 758, 759, 760, 714, 713, 712, 666, 665, 711, 710, 709, 755, 756, 757, 803, 802,
        801, 847, 848, 849, 895, 896, 897, 943, 942, 941, 940, 986, 1032, 1033, 1034, 1035, 1036, 990, 991, 1037, 1038,
        1039, 1085, 1131, 1130,
      ],
      tailProtectedForGameTicks: 0,
      id: '72763750-ff85-4edc-8f95-b65d664c7885',
    },
    {
      name: 'Snakey',
      points: 96,
      positions: [
        495, 494, 493, 492, 491, 490, 489, 488, 442, 396, 350, 304, 258, 257, 303, 349, 395, 441, 487, 486, 485, 531,
        532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 590, 636, 682, 728, 729, 775, 821, 867, 866,
        865, 911, 957, 1003, 1002, 956, 910, 864, 863, 909, 955, 1001, 1000, 954, 908, 862, 816, 817, 818, 819, 820,
        774, 773, 727, 681, 635, 589, 588, 634, 680, 679, 633, 587, 586, 632, 678, 677, 631, 585, 584, 630, 676, 722,
        723, 724, 725, 726,
      ],
      tailProtectedForGameTicks: 0,
      id: '2dd2eb49-a1cf-48e6-a583-311696331a02',
    },
    {
      name: 'Snakey',
      points: 95,
      positions: [
        1221, 1175, 1174, 1173, 1172, 1218, 1217, 1216, 1215, 1169, 1168, 1214, 1213, 1212, 1211, 1210, 1209, 1208,
        1207, 1206, 1205, 1159, 1160, 1161, 1115, 1114, 1113, 1112, 1111, 1110, 1064, 1063, 1062, 1016, 970, 969, 923,
        877, 831, 785, 784, 738, 692, 646, 600, 554, 508, 462, 416, 370, 371, 417, 463, 509, 555, 601, 602, 603, 557,
        558, 512, 513, 514, 468, 422, 376, 377, 423, 469, 515, 516, 517, 518, 519, 565, 564, 563, 562, 561, 560, 559,
        605, 606, 607, 608, 609, 610, 611, 657,
      ],
      tailProtectedForGameTicks: 0,
      id: '881c8c25-e393-42c6-a235-8e1ada7313b5',
    },
    {
      name: 'Snakey',
      points: 92,
      positions: [
        435, 436, 437, 438, 484, 483, 529, 528, 482, 481, 480, 526, 572, 618, 664, 663, 662, 661, 660, 706, 707, 708,
        754, 753, 752, 798, 799, 845, 844, 843, 797, 796, 842, 888, 934, 980, 981, 935, 889, 890, 891, 892, 893, 939,
        938, 937, 936, 982, 1028, 1027, 1026, 1072, 1073, 1119, 1118, 1117, 1071, 1070, 1069, 1068, 1067, 1066, 1065,
        1019, 1018, 1017, 971, 925, 924, 878, 832, 786, 740, 694, 648, 649, 650, 651, 652, 698, 744, 743, 789, 790, 836,
        835, 834, 788, 742,
      ],
      tailProtectedForGameTicks: 0,
      id: 'a99ba9b2-522a-4abe-afd6-471d4c2b1087',
    },
    {
      name: 'Bo A. Orm',
      points: 100,
      positions: [
        1222, 1223, 1269, 1315, 1361, 1407, 1406, 1360, 1314, 1313, 1359, 1358, 1357, 1356, 1355, 1354, 1353, 1352,
        1351, 1397, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1408, 1362, 1316, 1270,
        1271, 1272, 1226, 1180, 1134, 1135, 1136, 1182, 1228, 1274, 1320, 1366, 1412, 1458, 1459, 1460, 1461, 1462,
        1463, 1464, 1465, 1466, 1467, 1468, 1422, 1376, 1330, 1284, 1238, 1237, 1236, 1235, 1234, 1188, 1142, 1096,
        1050, 1004, 1005, 1006, 1007, 1008, 1009, 963, 917, 871, 825, 779, 733, 687, 641, 595, 549, 503, 457,
      ],
      tailProtectedForGameTicks: 0,
      id: '5550a0ab-fddc-4ca3-8532-4a516a6dceff',
    },
    {
      name: 'Snakey',
      points: 26,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: '545e7b4f-6cd6-4244-ad44-cdcafc199756',
    },
    {
      name: 'StayAliveBot',
      points: 68,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: '58505b56-0020-4dac-b6b6-b9ef1fb25e29',
    },
  ],
  foodPositions: [179, 204, 850, 975, 1433, 1505],
  obstaclePositions: [
    46, 47, 48, 92, 93, 94, 119, 138, 139, 140, 1029, 1030, 1031, 1075, 1076, 1077, 1121, 1122, 1123, 1147, 1153, 1154,
    1199, 1200,
  ],
};

export const test11 = {
  width: 46,
  height: 34,
  worldTick: 208,
  snakeInfos: [
    {
      name: 'StraightBot',
      points: 81,
      positions: [
        874, 920, 966, 1012, 1058, 1104, 1150, 1196, 1242, 1288, 1334, 1380, 1426, 1472, 1518, 1519, 1520, 1521, 1522,
        1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540,
        1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558,
        1559, 1560, 1561, 1562, 1563, 1517, 1471, 1425, 1379, 1333, 1287, 1241, 1195, 1149, 1103, 1057, 1011, 965,
      ],
      tailProtectedForGameTicks: 0,
      id: 'e45fa274-bec8-49cb-b4f1-b8982ff61591',
    },
    {
      name: 'BrainySnakePlayer',
      points: 72,
      positions: [
        151, 197, 243, 289, 335, 381, 427, 473, 519, 565, 611, 657, 703, 749, 795, 841, 887, 933, 979, 1025, 1071, 1117,
        1163, 1209, 1255, 1301, 1347, 1346, 1300, 1254, 1208, 1162, 1116, 1070, 1024, 978, 932, 886, 840, 794, 748, 702,
        656, 610, 564, 518, 472, 426, 380, 334, 288, 242, 196, 150, 104, 58, 57, 103, 149, 195, 241, 287, 333, 379, 425,
        471, 517, 563, 609, 655, 701,
      ],
      tailProtectedForGameTicks: 0,
      id: '22b18113-3b1c-4a14-b792-4e644eefa8ce',
    },
    {
      name: 'Bo A. Orm',
      points: 75,
      positions: [
        59, 60, 106, 152, 198, 244, 290, 336, 382, 428, 474, 520, 566, 612, 658, 704, 750, 751, 797, 843, 889, 935, 981,
        1027, 1028, 982, 983, 937, 936, 890, 844, 798, 752, 706, 660, 614, 613, 567, 521, 475, 429, 383, 337, 291, 245,
        199, 153, 107, 108, 109, 110, 156, 202, 201, 247, 246, 292, 338, 384, 385, 386, 387, 388, 389, 435, 481, 527,
        573, 619, 665, 711, 757,
      ],
      tailProtectedForGameTicks: 0,
      id: 'aa40be49-153b-4a42-a514-334cc9d7fe5a',
    },
    {
      name: 'BrainySnakePlayer',
      points: 24,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: '394a8f59-86bc-4162-b14b-bdc4cbf21a66',
    },
    {
      name: 'RandomBot',
      points: 25,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: 'b25d778a-ea99-418a-be21-7e7f6ca24914',
    },
    {
      name: 'StraightBot',
      points: 24,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: '7e9fd526-ab1a-4b91-a86b-0d39031566cc',
    },
    {
      name: 'BrainySnakePlayer',
      points: 72,
      positions: [
        373, 327, 281, 235, 189, 143, 97, 51, 50, 96, 142, 188, 234, 280, 326, 372, 418, 464, 510, 556, 602, 648, 694,
        740, 786, 832, 878, 924, 970, 1016, 1062, 1108, 1154, 1200, 1246, 1292, 1338, 1384, 1430, 1476, 1475, 1429,
        1383, 1337, 1291, 1245, 1199, 1153, 1107, 1061, 1015, 969, 923, 877, 831, 785, 739, 693, 647, 601, 555, 509,
        463, 417, 371, 325, 279, 233, 187, 141, 95,
      ],
      tailProtectedForGameTicks: 0,
      id: 'ecb7df37-b9d9-4bbf-88cd-cfd1da5360b6',
    },
  ],
  foodPositions: [204, 216, 314, 599, 731, 743, 771, 782, 881, 1258, 1296, 1310, 1339, 1363, 1386],
  obstaclePositions: [113, 114, 159, 160, 855, 1286, 1392, 1393, 1394, 1397, 1438, 1439, 1440, 1484, 1485, 1486],
};

export const test12 = {
  width: 46,
  height: 34,
  worldTick: 65,
  snakeInfos: [
    {
      name: 'StayAliveBot',
      points: 25,
      positions: [
        1101, 1147, 1193, 1239, 1285, 1331, 1377, 1423, 1469, 1468, 1422, 1376, 1330, 1284, 1238, 1192, 1146, 1100,
        1054, 1008, 962, 916, 870, 824,
      ],
      tailProtectedForGameTicks: 0,
      id: '7e5a2562-6f98-4498-a2cc-bd28ce739dfc',
    },
    {
      name: 'RandomBot',
      points: 22,
      positions: [
        149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215,
        261,
      ],
      tailProtectedForGameTicks: 0,
      id: 'd637ffa6-7be8-4933-a9cf-131b992e0e87',
    },
    {
      name: 'StraightBot',
      points: 22,
      positions: [
        1471, 1425, 1379, 1333, 1287, 1241, 1195, 1149, 1103, 1057, 1011, 965, 919, 873, 827, 781, 735, 689, 643, 597,
        551, 505, 459,
      ],
      tailProtectedForGameTicks: 0,
      id: '2e72960f-a564-457d-a85e-86089a972648',
    },
    {
      name: 'BrainySnakePlayer',
      points: 25,
      positions: [
        556, 602, 648, 694, 740, 786, 832, 878, 924, 970, 1016, 1062, 1108, 1154, 1200, 1246, 1292, 1338, 1384, 1430,
        1476, 1475, 1429, 1383,
      ],
      tailProtectedForGameTicks: 0,
      id: '279b10c3-5f2d-4d3a-a632-43b50bdc37f8',
    },
    {
      name: 'BrainySnakePlayer',
      points: 24,
      positions: [
        561, 607, 653, 699, 745, 791, 837, 883, 929, 975, 1021, 1067, 1113, 1159, 1205, 1251, 1250, 1204, 1158, 1112,
        1066, 1020, 974,
      ],
      tailProtectedForGameTicks: 0,
      id: '1e0e224a-2f4e-4716-bd86-061c87a452ab',
    },
    {
      name: 'Bo A. Orm',
      points: 22,
      positions: [
        103, 57, 58, 59, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 168,
      ],
      tailProtectedForGameTicks: 0,
      id: 'bab5c673-968a-4279-bbd6-040814e63b24',
    },
    {
      name: 'Snakey',
      points: 28,
      positions: [
        947, 948, 902, 901, 900, 899, 945, 991, 990, 944, 898, 852, 806, 807, 853, 854, 855, 856, 857, 903, 904, 858,
        812, 766, 720,
      ],
      tailProtectedForGameTicks: 0,
      id: 'dedebb91-03a2-4186-a766-5be83f5cfc97',
    },
  ],
  foodPositions: [69, 362, 1031, 1357, 1481],
  obstaclePositions: [
    7, 8, 9, 53, 54, 55, 99, 100, 101, 549, 757, 758, 759, 803, 804, 805, 849, 850, 851, 1121, 1122, 1123, 1167, 1168,
    1169, 1213, 1214, 1215, 1295, 1296, 1341, 1342,
  ],
};

export const test13 = {
  width: 46,
  height: 34,
  worldTick: 185,
  snakeInfos: [
    {
      name: 'Bo A. Orm',
      points: 78,
      positions: [
        492, 538, 539, 585, 631, 677, 723, 769, 768, 814, 860, 859, 858, 857, 856, 902, 948, 994, 1040, 1086, 1132,
        1178, 1224, 1270, 1316, 1362, 1363, 1317, 1318, 1272, 1226, 1180, 1134, 1088, 1042, 996, 950, 904, 905, 906,
        907, 908, 909, 910, 864, 818, 772, 726, 680, 634, 588, 542, 496, 450, 404, 405, 406, 407, 408, 409, 410, 411,
        412, 366, 365,
      ],
      tailProtectedForGameTicks: 0,
      id: 'ce52f98b-f65a-4efe-9626-b0dc3d37ea10',
    },
    {
      name: 'BrainySnakePlayer',
      points: 62,
      positions: [
        515, 561, 607, 653, 699, 745, 791, 837, 883, 929, 975, 1021, 1067, 1113, 1159, 1205, 1251, 1297, 1343, 1389,
        1435, 1481, 1480, 1434, 1388, 1342, 1296, 1250, 1204, 1158, 1112, 1066, 1020, 974, 928, 882, 836, 790, 744, 698,
        652, 606, 560, 514, 468, 422, 376, 330, 284, 238, 192, 146, 100, 54, 53, 99, 145, 191, 237, 283, 329, 328, 374,
      ],
      tailProtectedForGameTicks: 0,
      id: '8c58a306-1b8e-4ac0-be37-cb33e7aa908f',
    },
    {
      name: 'RandomBot',
      points: 41,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: 'ac75d8cd-6755-4eb6-ae2d-57566289fef0',
    },
    {
      name: 'BrainySnakePlayer',
      points: 68,
      positions: [
        445, 399, 353, 307, 261, 215, 169, 123, 77, 76, 122, 168, 214, 260, 306, 352, 398, 444, 490, 536, 582, 628, 674,
        720, 766, 812, 811, 765, 719, 673, 627, 581, 535, 489, 443, 397, 351, 305, 259, 213, 167, 121, 75, 74, 120, 166,
        212, 258, 304, 350, 396, 442, 488, 487, 533, 579, 625, 671, 717, 763, 809, 855, 901, 947, 993,
      ],
      tailProtectedForGameTicks: 0,
      id: 'e3342855-d345-4a96-9d4e-36923fa754ff',
    },
    {
      name: 'StayAliveBot',
      points: 17,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: '2c891bcf-aa66-408a-acb1-5d9fd68c3bd4',
    },
    {
      name: 'BrainySnakePlayer',
      points: 55,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: 'f2a8026d-5544-4c6f-99cd-7945070a6960',
    },
    {
      name: 'StayAliveBot',
      points: 67,
      positions: [
        1386, 1432, 1478, 1477, 1476, 1475, 1474, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530,
        1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548,
        1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1517, 1471, 1425,
        1379, 1333, 1287, 1241, 1195, 1149, 1103, 1057, 1011, 965,
      ],
      tailProtectedForGameTicks: 0,
      id: '3f564ebc-1e7c-4768-91ee-85fac714bea7',
    },
  ],
  foodPositions: [127, 1310],
  obstaclePositions: [
    204, 282, 347, 348, 349, 393, 394, 395, 439, 440, 441, 472, 473, 474, 518, 519, 520, 564, 565, 566, 1166, 1167,
    1212, 1213,
  ],
};

export const test14 = {
  width: 46,
  height: 34,
  worldTick: 514,
  snakeInfos: [
    {
      name: 'StayAliveBot',
      points: 27,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: 'a9ab4f7c-6d20-46c6-b9aa-ae3a16b47e59',
    },
    {
      name: 'StayAliveBot',
      points: 82,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: 'acd5e65f-3678-4931-8b5d-d562ae5737d1',
    },
    {
      name: 'RandomBot',
      points: 35,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: '168e268d-3b0b-433d-8022-044ca5e79596',
    },
    {
      name: 'Bo A. Orm',
      points: 210,
      positions: [
        372, 373, 419, 420, 466, 512, 513, 514, 515, 469, 470, 424, 425, 426, 472, 518, 564, 610, 656, 702, 701, 747,
        793, 792, 838, 837, 836, 790, 744, 743, 697, 696, 650, 604, 603, 602, 648, 694, 693, 739, 785, 831, 877, 923,
        969, 970, 1016, 1062, 1108, 1109, 1110, 1111, 1157, 1158, 1159, 1160, 1161, 1162, 1208, 1209, 1255, 1301, 1300,
        1299, 1298, 1344, 1345, 1346, 1392, 1393, 1394, 1348, 1349, 1303, 1304, 1258, 1212, 1166, 1120, 1121, 1122,
        1123, 1169, 1215, 1261, 1262, 1308, 1354, 1355, 1356, 1402, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455,
        1456, 1410, 1364, 1318, 1272, 1226, 1180, 1134, 1088, 1042, 996, 950, 904, 858, 812, 811, 765, 719, 673, 627,
        581, 535, 489, 443, 397, 351, 305, 304, 258, 212, 166, 165, 164, 163, 209, 255, 301, 347, 348, 394, 440, 441,
        487, 488, 534, 580, 626, 672, 718, 764, 810, 856, 902, 948, 994, 1040, 1086, 1132, 1178, 1224, 1270, 1316, 1362,
        1408, 1407, 1406, 1405, 1359, 1313, 1314, 1268, 1222, 1176, 1130, 1129, 1083, 1037, 991, 945, 899, 853, 807,
        806, 760,
      ],
      tailProtectedForGameTicks: 0,
      id: '015afbcf-b076-4483-ae47-14fa8e58a104',
    },
    {
      name: 'RandomBot',
      points: 31,
      positions: [],
      tailProtectedForGameTicks: 0,
      id: 'b1b77288-f758-488b-ba8d-efa82deff534',
    },
    {
      name: 'StraightBot',
      points: 176,
      positions: [
        925, 971, 1017, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1030, 984,
        938, 892, 846, 800, 754, 708, 662, 616, 570, 524, 478, 432, 386, 340, 294, 293, 292, 291, 290, 289, 288, 287,
        286, 285, 284, 283, 282, 281, 280, 279, 278, 277, 276, 230, 184, 138, 92, 46, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 91, 137, 183, 229, 275, 321, 367, 413, 459, 505, 551, 597, 643, 689, 735, 781, 827,
        873, 919, 965, 1011, 1057, 1103, 1149, 1195, 1241, 1287, 1333, 1379, 1425, 1471, 1517, 1563, 1562, 1561, 1560,
        1559, 1558, 1557, 1556, 1555, 1554, 1553, 1552, 1551, 1550, 1549, 1548, 1547, 1546, 1545, 1544, 1543, 1542,
        1541, 1540, 1539, 1538, 1537, 1536, 1535, 1534, 1533, 1532, 1531, 1530, 1529, 1528, 1527, 1526,
      ],
      tailProtectedForGameTicks: 0,
      id: '10ba852c-94ed-42c2-8d8f-4e86ac1ec2d3',
    },
    {
      name: 'BrainySnakePlayer',
      points: 185,
      positions: [
        869, 915, 961, 1007, 1053, 1099, 1145, 1191, 1237, 1283, 1329, 1375, 1421, 1467, 1466, 1420, 1374, 1328, 1282,
        1236, 1190, 1144, 1098, 1052, 1006, 960, 914, 868, 822, 776, 730, 684, 638, 592, 546, 500, 454, 408, 362, 316,
        270, 224, 178, 132, 86, 85, 131, 177, 223, 269, 315, 361, 407, 453, 499, 545, 591, 637, 683, 729, 775, 821, 867,
        913, 959, 1005, 1051, 1097, 1143, 1189, 1235, 1281, 1327, 1373, 1419, 1465, 1464, 1418, 1372, 1326, 1280, 1234,
        1188, 1142, 1096, 1050, 1004, 958, 912, 866, 820, 774, 728, 682, 636, 590, 544, 498, 452, 406, 360, 314, 268,
        222, 176, 130, 84, 83, 129, 175, 221, 267, 313, 359, 405, 451, 497, 543, 589, 635, 681, 727, 773, 819, 865, 911,
        957, 1003, 1049, 1095, 1141, 1187, 1233, 1279, 1325, 1371, 1417, 1463, 1462, 1416, 1370, 1324, 1278, 1232, 1186,
        1140, 1094, 1048, 1002, 956, 910, 864, 818, 772, 726, 680, 634, 588, 542, 496, 450, 404, 358, 312, 266, 220,
        174, 128, 82, 81, 127, 126, 80, 79, 125, 171,
      ],
      tailProtectedForGameTicks: 0,
      id: '57b2061b-8d4e-4ce9-938f-ad1ba8fc2491',
    },
  ],
  foodPositions: [93, 215, 299, 393, 504, 655, 704, 844, 936, 1168, 1250, 1293, 1297, 1496],
  obstaclePositions: [
    143, 172, 203, 204, 205, 249, 250, 251, 295, 296, 297, 530, 531, 532, 576, 577, 578, 622, 623, 624, 1295, 1296,
    1341, 1342,
  ],
};
