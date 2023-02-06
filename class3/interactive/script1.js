const modal = document.querySelector('#modal');

const showModal = () => {
    modal.style.display = 'flex';
    modal.style.animation = 'fadein 1s';
}

const closeModal = () => {
    // modal.style.display = 'none';
    // 모달 닫기 버튼 클릭 시 1초 이후 사라지는 기능 + 애니메이션
    setTimeout(() => modal.style.display = 'none', 1000);
    modal.style.animation = 'fadeout 1s';
}