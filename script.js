const escape = require('escape-html');

const badgeLinkUrl = username => `https://tippin.me/@${username}`;
const badgeImageUrl = username => `https://badgen.net/badge/%E2%9A%A1%EF%B8%8Ftippin.me/@${username}/F0918E`;

const badgeHtml = username =>
`<a href="${badgeLinkUrl(username)}" rel="noopener noreferrer" target="_blank">
  <img src="${badgeImageUrl(username)}" alt="@${username} on tippin.me"/>
</a>`;

const badgeMarkdown = username =>
`[![tippin.me](${badgeImageUrl(username)})](${badgeLinkUrl(username)})`;

const usernameInput = document.querySelector('input[name="username"]');
const badgePreview = document.querySelector('.badge-preview');
const badgeHtmlSource = document.querySelector('.badge-html');
const badgeMarkdownSource = document.querySelector('.badge-markdown');

const generateBadge = () => {
  const username = escape(usernameInput.value) || 'username';
  const html = badgeHtml(username);
  const markdown = badgeMarkdown(username);

  badgePreview.innerHTML = html;
  badgeHtmlSource.innerText = html;
  badgeMarkdownSource.innerText = markdown;
};

generateBadge();
usernameInput.addEventListener('input', generateBadge);
