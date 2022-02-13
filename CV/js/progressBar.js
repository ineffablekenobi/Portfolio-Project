
    var i = 0;
    var j = 0;
    var bar = document.querySelector(".progress-bar");
    var bar1 = document.querySelector(".pbar1");
  function makeProgress(){
      if(i < 50){
          i = i + 1;
            bar.style.width = i + "%";
            bar.innerText = i + "%";
      }
      if(j < 60){
          j++;
        bar1.style.width = j + "%";
        bar1.innerText = j + "%";
      }

      setTimeout("makeProgress()", 60);
  }
  makeProgress();