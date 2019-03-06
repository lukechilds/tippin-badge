const badgeLinkUrl = username => `https://tippin.me/@${username}`;
const badgeImageUrl = username => `https://badgen.net/badge/%E2%9A%A1%EF%B8%8Ftippin.me/@${username}/F0918E`;

const badgeHtml = username => `
<a href="${badgeLinkUrl(username)}" rel="noopener noreferrer" target="_blank">
  <img src="${badgeImageUrl(username)}" alt="@${username} on tippin.me"/>
</a>
`;

const username = document.querySelector('input[name="username"]');
const badgePreview = document.querySelector('.badge-preview');

const generateBadge = () => {
  badgePreview.innerHTML = badgeHtml(username.value);
};

username.addEventListener('change', generateBadge);
