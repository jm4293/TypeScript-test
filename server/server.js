const { Axios, default: axios } = require('axios');
const express = require('express');
const { redirect } = require('react-router-dom');
const app = express();

// 카카오 로그인 
app.get('/kakao/callback', async (req, res) => {
    const REST_API_KEY = "44fb0663d9f8993bedab1f709e654275";
    const REDIRECT_URI = "http://localhost:8000/kakao/callback";
    const KAKAO_CODE = req.query.code;

    try {
        // Access Token 가져오기
        const res1 = await axios.post("https://kauth.kakao.com/oauth/token", null, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            params: {
                grant_type: 'authorization_code',
                client_id: REST_API_KEY,
                redirect_uri: REDIRECT_URI,
                code: KAKAO_CODE
            }
        });
        console.log("res1: " + res1.data.access_token);

        // Access Token을 이용해 사용자 정보 가져오기
        const res2 = await axios.post("https://kapi.kakao.com/v2/user/me", null, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + res1.data.access_token,
            }
        });
        console.log("res2: " + res2);
        res.send(res2.data);

        // 사용자 고유번호를 가지고 왔는데 이거가지고 뭘 해야할지 모르겠음
    }
    catch(e) {
        console.log("error: " + e);
    }
})

app.get('/', (req, res) => {
    res.send("server on : 8000");
})

app.listen(8000, () => {
    console.log("server on : 8000");
});