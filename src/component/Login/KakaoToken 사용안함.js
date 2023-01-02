import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function KakaoCallBack() {
    const location = useLocation();
    const navigate = useNavigate();
    const KAKAO_CODE = location.search.split('=')[1];
    const REST_API_KEY = "44fb0663d9f8993bedab1f709e654275";
    const REDIRECT_URI = "http://localhost:3000/kakao/callback";

    const getKakaoToken = () => {
        fetch("https://kauth.kakao.com/oauth/token", {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`
        })
            .then(res => res.json())
            .then(data => {
                if (data.access_token) {
                    localStorage.setItem('KAKAO_TOKEN', data.access_token);
                }
                else {
                    navigate('/');
                }
            })
    }

    useEffect(() => {
        if(!location.search){
            return;
        }
        getKakaoToken();
    }, []);

    return (
        <div>KakaoLogin</div>
    )
}

export default KakaoCallBack;