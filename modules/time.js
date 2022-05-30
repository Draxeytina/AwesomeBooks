const dateSection = document.querySelector('.date');

export default function siteTime() {
  const today = new Date();
  const localLanguage = navigator.language;
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: 'false',
    second: 'numeric',
  };
  dateSection.textContent = `${today.toLocaleTimeString(localLanguage, options)}`;
}
