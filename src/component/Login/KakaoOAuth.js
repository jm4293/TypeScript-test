const REST_API_KEY = "44fb0663d9f8993bedab1f709e654275";
const REDIRECT_URI  = "http://localhost:8000/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;