import './styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll<HTMLButtonElement>('button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      console.log(`Нажата кнопка: "${button.textContent?.trim()}"`);
    });
  });
});
