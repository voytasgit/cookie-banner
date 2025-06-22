(function () {
  const cookieName = 'freecookiebanner';
  const qs = new URLSearchParams(window.location.search);

  const lang = qs.get('lang') || 'en';
  const text = qs.get('text') || (lang === 'de' ? 'Wir verwenden Cookies!' : 'We use cookies!');
  const acceptText = qs.get('accept') || (lang === 'de' ? 'Akzeptieren' : 'Accept');
  const declineText = qs.get('decline') || (lang === 'de' ? 'Ablehnen' : 'Decline');

  const bannerHTML = `
    <div id="overlay"></div>
    <div id="modal">
      <p>${text}</p>
      <button id="acceptButton">${acceptText}</button>
      <button id="declineButton">${declineText}</button>
    </div>
  `;

  function getCookie(name) {
    return document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1] ?? null;
  }

  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }

  function showBanner() {
    document.body.insertAdjacentHTML('beforeend', bannerHTML);
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('modal').style.display = 'block';

    document.getElementById('acceptButton').addEventListener('click', () => {
      setCookie(cookieName, 'yes', 30);
      localStorage.setItem(cookieName, 'yes');
      removeBanner();
    });

    document.getElementById('declineButton').addEventListener('click', () => {
      setCookie(cookieName, 'no', 30);
      localStorage.setItem(cookieName, 'no');
      removeBanner();
    });
  }

  function removeBanner() {
    document.getElementById('overlay')?.remove();
    document.getElementById('modal')?.remove();
  }

  if (!getCookie(cookieName) && !localStorage.getItem(cookieName)) {
    window.addEventListener('DOMContentLoaded', showBanner);
  }
})();