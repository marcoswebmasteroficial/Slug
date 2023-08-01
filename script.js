document.querySelector("input").addEventListener("keyup", function(e) {
  let $this = e.target;
  let str = $this.value;
  str = str.toString().toLowerCase();
  str = str.replace(/\-\-+/g, '-');
  str = str.replace(/^-+/, ''); 
  str = str.replace(/-+$/, ''); 
  str = str.replace(/[\s_-]+/g, '-'); 
  str = str.replace(/\s+/g, '-'); 
  str = str.replace(/[^a-z0-9-]/g, ""); 
  $this.value = str;
});
