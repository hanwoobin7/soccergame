function switchTab(tab) {
  const game = document.getElementById('game');
  const league = document.getElementById('league');
  const ranking = document.getElementById('ranking');
  game.classList.remove('active');
  league.classList.remove('active');
  ranking.classList.remove('active');
  document.getElementById(tab).classList.add('active');
}

// ✅ 자동 슬라이더
document.addEventListener("DOMContentLoaded", function () {
  const bannerWrapper = document.querySelector('.banner-wrapper');
  const banners = document.querySelectorAll('.banner-wrapper img');
  let currentIndex = 0;

  function showSlide(index) {
    bannerWrapper.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % banners.length;
    showSlide(currentIndex);
  }, 3000);
});

function startGame() {
  const btn = document.querySelector('.start-btn');
  btn.innerText = 'LOADING... ⚽';
  btn.disabled = true;
  btn.style.background = 'black';
  btn.style.color = '#00ff5e';

  setTimeout(() => {
    const videoContainer = document.querySelector('.game-video');
    const iframe = document.getElementById('introVideo');

    // 영상 영역 보이기
    videoContainer.style.display = 'block';

    // 유튜브 재생 시작
    iframe.src += "&autoplay=1";

    // 일정 시간 후 다음 페이지로 이동 (예: 영상 길이 20초라면 20000ms)
    setTimeout(() => {
      location.href = 'game.html'; // 이동할 게임 페이지
    }, 20000); // 영상 길이에 맞춰 조정
  }, 1200);
}
