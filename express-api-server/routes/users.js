const express = require('express');
const router = express.Router();
const userList = [{
    "id": 1,
    "userName": "xiaoming",
    "avatar": "",
    "phoneNumber": "13666666666",
    "email": "xiaoming@qq.com",
    "personalName": "小明",
    "gender": 2,
    "companyName": "广大科技",
    "companyAddress": "北京",
    "registerIp": "128.78.23.23",
    "isValid": true,
    "createTime": "2019-03-11 11:22:24",
    "updateTime": "2019-04-01 16:10:43"
},
    {
        "id": 2,
        "userName": "xiaowang",
        "avatar": "",
        "phoneNumber": "13677889900",
        "email": "xiaowang@qq.com",
        "personalName": "小王",
        "gender": 1,
        "companyName": "鸡蛋公司",
        "companyAddress": "北京",
        "registerIp": "128.99.10.24",
        "isValid": true,
        "createTime": "2019-03-12 18:22:46",
        "updateTime": "2019-04-04 21:22:10"
    },
    {
        "id": 3,
        "userName": "lisi",
        "avatar": "a0b8b46b-b436-4b08-bd86-b6368c9d5d1cuserPhoto.jpg",
        "phoneNumber": "13810927890",
        "email": "lisi@qq.com",
        "personalName": "李四",
        "gender": 2,
        "companyName": "光明牧业",
        "companyAddress": "西土城1号/北京市-市辖区-东城区",
        "registerIp": "108.83.67.55",
        "isValid": true,
        "createTime": "2019-03-14 19:48:38",
        "updateTime": "2019-04-04 21:16:36"
    },
    {
        "id": 4,
        "userName": "wangwu",
        "phoneNumber": "13812341234",
        "email": "wangwu@163.com",
        "personalName": "王五",
        "gender": 1,
        "companyName": "伊人家私",
        "companyAddress": "五四西路1号/北京市-市辖区-昌平区",
        "registerIp": "10.17.8.43",
        "isValid": true,
        "createTime": "2019-03-27 17:19:20",
        "updateTime": "2019-03-29 20:52:06"
    },
    {
        "id": 5,
        "userName": "John",
        "avatar": "a84135ac-bd42-4157-8de4-126788a0c6f605c03f55d9ce0a32f875a1329d1c2b.jpg",
        "phoneNumber": "15678887774",
        "email": "John@qq.com",
        "personalName": "乔治",
        "gender": 1,
        "companyName": "时光科技",
        "companyAddress": "某小区111楼11号/天津市-市辖区-河东区",
        "registerIp": "11.34.18.53",
        "isValid": true,
        "createTime": "2019-03-27 17:24:44",
        "updateTime": "2019-04-03 14:50:11"
    }
];

let response = {};

router.get('/', (req, res) => {
    let simpleUserList = [];
    userList.forEach((user) => {
        if (user != null) {
            let simpleUser = {
                id: user.id,
                userName: user.userName
            };
            simpleUserList.push(simpleUser)
        }
    });
    response.code = 0;
    response.message = '请求成功';
    response.data = simpleUserList;
    res.send(response);
});

router.get('/detail/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let result = null;
    userList.forEach((user) => {
        if (user.id === id) {
            result = user;
        }
    });
    if (result != null) {
        response.code = 0;
        response.message = '请求成功';
        response.data = result;
    } else {
        response.code = -1;
        response.message = '请求失败';
    }
    res.send(response);
});

module.exports = router;