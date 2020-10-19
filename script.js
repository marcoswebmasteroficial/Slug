document.querySelector("input").addEventListener("keyup", function(e){
let $this = e.target;
let  str = $this.value;
str = str.toString().toLowerCase();
str = str.replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '').replace(/[\s_-]+/g, '-').replace(/\s+/g, '-').replace(/[^a-z0-9 -]/g, "");
$this.value = str;
});
