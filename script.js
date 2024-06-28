function gerarSlug(str) {
  str = str.toString().toLowerCase().trim();
  str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  str = str.replace(/[^a-z0-9\s-]/g, '');
  str = str.replace(/\s+/g, '-').replace(/-+/g, '-');
  str = str.replace(/^-+|-+$/g, '');
  return str;
}

document.querySelector("input").addEventListener("keyup", function(e) {
  e.target.value = gerarSlug(e.target.value);
});
