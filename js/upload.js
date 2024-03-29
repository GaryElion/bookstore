function readURL(input){

    if(input.files && input.files[0]){
  
      var imageTagID = input.getAttribute("targetID");
  
      var reader = new FileReader();
  
      reader.onload = function (e) {
  
         var img = document.getElementById(imageTagID);
  
         img.setAttribute("src", e.target.result)
  
      }
  
      reader.readAsDataURL(input.files[0]);
  
    }
  
  }
  /*
  document.getElementById('openMenu').addEventListener('click', function(e){
    document.body.classList.add('openMenu');
    e.stopPropagation(); // 讓 click 事件停止冒泡
    document.addEventListener('click', function(e){
      // 如果點擊側邊欄以外的區域，就關閉側邊欄
      if(!e.target.closest('#menu')){
        document.body.classList.remove('openMenu');
      }
    });
  });*/