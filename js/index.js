const sidebar = document.getElementById('sidebar');
const trigger = document.createElement('div');
trigger.id = 'dock-trigger';
document.body.appendChild(trigger);

trigger.addEventListener('mouseenter', () => {
    sidebar.style.bottom = '0';
});

sidebar.addEventListener('mouseleave', () => {
    sidebar.style.bottom = '-100px';
});

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    // 스크롤 애니메이션
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 카드 호버 효과
    const cards = document.querySelectorAll('.skill-card, .project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        });
    });

    // 프로젝트 버튼 클릭
    const projectButtons = document.querySelectorAll('.project-button');
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('프로젝트 상세 페이지는 현재 준비 중입니다!');
        });
    });



    // 노트북 페이지 효과
    const notebookPages = document.querySelectorAll('.notebook-page');
    notebookPages.forEach(page => {
        page.addEventListener('mouseenter', function() {
            this.style.boxShadow = '5px 5px 15px rgba(0, 0, 0, 0.15)';
        });

        page.addEventListener('mouseleave', function() {
            this.style.boxShadow = '3px 3px 10px rgba(0, 0, 0, 0.1)';
        });
    });
});

// Lucide 아이콘 초기화
document.addEventListener('DOMContentLoaded', function() {
    // Lucide 아이콘 초기화
    lucide.createIcons();

    // 카드 기울기 효과
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach((card, index) => {
        let rotate;
        if (index % 4 === 0) rotate = -1;
        else if (index % 4 === 1) rotate = 1;
        else if (index % 4 === 2) rotate = -0.5;
        else rotate = 0.5;
        card.style.setProperty('--rotate', `${rotate}deg`);
    });

    // 스크롤 애니메이션
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const birth = document.getElementById('birth');
    birth.addEventListener('click', function () {
        for (let i = 0; i < 30; i++) {
            const snow = document.createElement('div');
            snow.innerText = '❄️';
            snow.style.position = 'fixed';
            snow.style.top = '-20px';
            snow.style.left = Math.random() * window.innerWidth + 'px';
            snow.style.fontSize = Math.random() * 20 + 10 + 'px';
            snow.style.opacity = 0.8;
            snow.style.zIndex = 9999;
            snow.style.animation = `fall ${Math.random() * 2 + 1}s linear forwards`;
            document.body.appendChild(snow);
            setTimeout(() => snow.remove(), 2000);
        }
    });
});
function sendMail() {
    const senderEmail = document.getElementById("sender-email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const body = document.getElementById("body").value.trim();

    if (!senderEmail) {
        alert("보내는 사람 이메일을 입력해주세요.");
        return;
    }

    const fixedRecipient = "hamsj2413@naver.com";
    const fullBody = `보낸 사람 이메일: ${senderEmail}\n\n${body}`;
    const mailtoLink = `mailto:${fixedRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
    window.location.href = mailtoLink;
}


