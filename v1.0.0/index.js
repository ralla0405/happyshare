window.onload = function(){
    $('.dropdown').hover(function(){
        $('.dropdown-content').show();
    }, function(){
        $('.dropdown-content').hide();
    });
    $('.dropdown-content a').click(function(){
        var href = $(this).attr('href');
        var offset = $(href).offset();
        $('html, body').animate({scrollTop: offset.top-55},400);
        $('.dropdown-content').hide();
    });
    $('.dropbtn').click(function(){
        $('.dropdown-content').show();
    });
    //카카오 맵 API 설정
    SET_KAKAOMAP();
}
//카카오 맵 API 설정
function SET_KAKAOMAP(){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.439172, 126.673892), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(37.439172, 126.673892); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map); 

    var iwContent = '<h5 style="text-align: center; width: 237px;">(사)행복나눔장애인복지협회</h5>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.439172, 126.673892); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        position : iwPosition, 
        content : iwContent 
    });
    
    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker); 
    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);
}