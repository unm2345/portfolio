var agent = navigator.userAgent.toLowerCase();
if ( (agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
  var $modal = document.createElement("div");
  $modal.classList.add("modal");
  $modal.innerHTML = "<p>이 페이지는 익스플로러에서 사용이 불가능합니다.</p>";
  document.body.appendChild($modal);
  document.body.style.overflow = "hidden";
}else{
}