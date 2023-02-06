const moveImage = (img, x, y) => {
    // css를 absolute로 설정하겠다는 의미
    img.style.left = x; // 이미지가 마우스 정중앙에 위치하도록: x - (img.offsetWidth / 2)
    img.style.top = y; // y - (img.offsetWidth / 2)
}

const onMouseDown = (event) => { // event -> 마우스 처음 클릭했을 때
    const img = event.target;
    // event.target의 위치가 다른 요소에 영향을 받지 않게 됨
    img.style.position = 'absolute';

    const moveTargetByEvent = (e) => moveImage(img, e.pageX, e.pageY);
    // e.pageX = 현재 마우스 위치의 x 좌표값 , e.pageY = 현재 마우스 위치의 y 좌표값
    // e -> 마우스 움직이는 동안의 event
    document.addEventListener('mousemove', moveTargetByEvent);

    img.addEventListener('mouseup', () => {
        // 이벤트 리스너 삭제
        document.removeEventListener('mousemove', moveTargetByEvent);
    })
}