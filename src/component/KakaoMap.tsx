import React, {useEffect} from "react";

declare global {
    interface Window {
        kakao: any;
    }
}

const KakaoMap = () => {
    // 지도 api
    useEffect(() => {
        let container = document.getElementById('map');             // 지도를 담을 영역의 DOM 래퍼런스
        let options = {                                             // 지도를 생설할 때 필요한 기본 옵션
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };

        let map = new window.kakao.maps.Map(container, options);    // 지도 생성 및 객체 리턴
    }, [])

    return (
        <div id="map" style={{ width: "100vw", height: "100vh" }} />
    )
}

export default KakaoMap