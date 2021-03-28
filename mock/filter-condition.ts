const Mock = require('mockjs');

const data: any[] = [];
let i = 0;
while (i < 9) {
    const item = Mock.mock({
        id: i,
        name: '@cname',
        condition: {
            trush: String(i),
            bingo: String(i)
        }
    });
    Object.assign(item, {
        condition: JSON.stringify(item.condition)
    });
    i++;
    console.log(item);
    data.push(item);
}
const demoList = {
    code: 0,
    message: 'success',
    data: data
};

export default {
    'get|/api/v1/crm/SearchSetting/GetSavedConditions': demoList
};
