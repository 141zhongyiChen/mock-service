const Mock = require('mockjs');

const getCount = (): number => {
    return Mock.mock({
        'count|1-6': 6
    }).count;
};

const getDetails = () => {
    return Mock.mock({
        uId: '@guid',
        content: '@cname',
        'role|1': [1, 2]
    });
};

const getItems = () => {
    const values = [];
    const count = getCount();
    for (let i = 0; i < count; i++) {
        values.push(getDetails());
    }
    return Mock.mock({
        'key|1': [1, 2, 3, 4, 5, 6],
        values: values
    });
};

const getDemoList = () => {
    const data = [];
    const count = getCount();
    console.log(count);
    const map = new Set<number>();
    if (count > 3) {
        let i = 0;
        while (i++ < count) {
            const item = getItems();
            if (!map.has(item.key)) {
                map.add(item.key);
                data.push(item);
            }
        }
    }

    const demoList = {
        code: 0,
        message: 'success',
        data: data
    };
    return demoList;
};


export default {
    'get|/api/v1/crm/GlobalSearch/GetList': getDemoList()
};
