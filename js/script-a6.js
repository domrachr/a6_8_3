let myProgressBarValue = 0;
function changeProgressBar(count) {
    myProgressBarValue += count;
    if (myProgressBarValue>100) {
        myProgressBarValue = 0;
    }
    console.log(myProgressBarValue);
    $("#my-progress-bar").width(`${myProgressBarValue}%`);
    $("#my-progress-bar").text(`${myProgressBarValue}%`);
    // $("input[type=checkbox]:not(:checked)").prop("disabled", checkCount >= maxAllowedChecks);
}

function init() {
    
    changeProgressBar(myProgressBarValue)
    $("#my-btn-1").click(function() {
        changeProgressBar(1);
      });
      $("#my-btn-3").click(function() {
        changeProgressBar(3);
      });
      $("#my-btn-7").click(function() {
        changeProgressBar(7);
      });

    console.log("скрипт подгрузился");
}

$(document).ready(init);
