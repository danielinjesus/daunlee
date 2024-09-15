// 모든 메뉴 버튼과 콘텐츠를 가져옴
const buttons = document.querySelectorAll('.menu-btn');
const contents = document.querySelectorAll('.content');

// 버튼 클릭 시 해당 콘텐츠 보여주기
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // 모든 버튼에서 active 클래스 제거
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // 클릭한 버튼에 active 클래스 추가
        button.classList.add('active');
        
        // 모든 콘텐츠 숨기기
        contents.forEach(content => content.classList.remove('active'));
        
        // 클릭한 버튼에 해당하는 콘텐츠 보여주기
        const target = button.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
});

// 페이지 로드 시 첫 번째 버튼 자동 클릭
document.addEventListener('DOMContentLoaded', () => {
    if (buttons.length > 0) {
        // 첫 번째 버튼 클릭
        buttons[0].click();
    }
});