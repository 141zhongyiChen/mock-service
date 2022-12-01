const Mock = require("mockjs");

export const getSignalList = (req) => {
  const pageIndex = req.body.pageSize || 1;
  const pageSize = pageIndex > 10 ? 0 : req.body.pageSize || 20;
  return Mock.mock({
    [`items|${pageSize}`]: [
      {
        id: "@integer(60, 10000000)",
        uid: "@integer(60, 10000000)",
        nickName: "@last(6,10)",
        phone: "@last(11)",
        email: "@email()",
        country: "@ctitle(3,4)",
        "gender|1": [0, 1],
        "userStatus|1": [1, 2, 3],
        joinedTime: "@integer(1517676345, 1617676345)",
        lastLoginTime: "@integer(1517676345, 1617676345)",
        callbackTime: "@integer(1517676345, 1617676345)",
        connectedCount: "@integer(60, 100)",
        connectedMaxBalance: "@integer(60, 100)",
        "openAccountCount|1": [0, 1, 2, 33, 4],
        openMaxBalance: "@integer(60, 100)",
        deposit: "@integer(60, 100)",
        "tags|3-10": [
          {
            tagId: "@integer(60, 100)",
            tagName: "@ctitle(3,7)",
            "tagOwnerType|1": [1, 2, 3],
            tagUsageCategory: "@integer(60, 100)",
            "groupId|1-4": [74, 77, 79, 80, 81],
          },
        ],
        "favoriteGroups|4": ["@integer(60, 100)"],
        avatar: "@img(64x64,@color,avatar)",
        supporterId: "@integer(60, 100)",
        supporterName: "@last(6,10)",
        supporterAvatar: "@img(64x64,@color,avatar)",
      },
    ],
    totalCount: 200, //`@integer(${pageIndex * pageSize},300)`,
  });
};
