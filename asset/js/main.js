(function(){
  motion = {
    init: function(){
      
    },
    initEvent : function(){
      const $link = document.querySelectorAll(".js-item");

      $link.forEach(function(ele, idx, ary){
        ele.addEventListener("mouseenter", function(){
          const color = ele.dataset["color"];

          document.body.style["background"] = color;      
        })

        ele.addEventListener("mouseleave", function(){
          document.body.style["background"] = "#f0f0f0";      
        })
      })  
    }
  }

  motion.init();
  motion.initEvent();
})();