import {version} from './package';
import badgen from 'badgen';
import escape from 'escape-html';

document.querySelector('.version').innerText = `v${version}`;

const badgeLinkUrl = username => `https://tippin.me/@${username}`;
const badgeImageUrl = username => `https://badgen.net/badge/%E2%9A%A1%EF%B8%8Ftippin.me/@${username}/F0918E`;

const badgeSVG = username => badgen({
  subject: '⚡️tippin.me',
  status: `@${username}`,
  color: 'F0918E',
});

const badgeHtmlPreview = username =>
`<a href="${badgeLinkUrl(username)}" rel="noopener noreferrer" target="_blank">
  ${badgeSVG(username)}
</a>`;

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
const badgeSvgSource = document.querySelector('.badge-svg');

const generateBadge = () => {
  const username = escape(usernameInput.value) || 'username';

  badgePreview.innerHTML = badgeHtmlPreview(username);

  badgeHtmlSource.innerText = badgeHtml(username);
  badgeMarkdownSource.innerText = badgeMarkdown(username);
  badgeSvgSource.innerText = badgeSVG(username);
};

generateBadge();
usernameInput.addEventListener('input', generateBadge);
