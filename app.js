const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const md = window.markdownit();

// Load previously saved text from localStorage
editor.value = localStorage.getItem('markdownText') || '';

function updatePreview() {
  const markdownText = editor.value;
  const html = md.render(markdownText);
  preview.innerHTML = html;

  // Save the current text to localStorage
  localStorage.setItem('markdownText', markdownText);
}

editor.addEventListener('input', updatePreview);
updatePreview();
