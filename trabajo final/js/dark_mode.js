const btn = document.getElementById('btn-darkmode');

btn.addEventListener('click', () => {
  // Alterna la clase 'dark-mode' en el body
  document.body.classList.toggle('dark-mode');

  // Cambia el texto del botón dependiendo del modo
  if (document.body.classList.contains('dark-mode')) {
    btn.textContent = '☀️';
  } else {
    btn.textContent = '🌙';
  }
});