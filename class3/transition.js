const next = () => {
    let items = document.getElementsByClassName('item');
    for (let item of items) {
        item.style.transform = `translate(-100%)`; // 해당 요소 크기만큼 왼쪽으로 이동
    }
}