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
