//menu header
$('.header-nav__menu-sub').on('click', function(){
    $(this).toggleClass("active");
    $(this).next("ul").slideToggle();
});

$('.heading-note__account').on('click', function(){
    $(".heading-note__account-profile").toggleClass("active");
});


$('.js-popup-profile').on('click', function(){
    $(".popup").addClass("active");
});
$('.js-popup-close').on('click', function(){
    $(".popup").removeClass("active");
});

$('.date').datepicker({
    'format': 'm/d/yyyy',
    'autoclose': true
});

$(function () {
    $(".tab-menu li").click(function () {
        var num = $(".tab-menu li").index(this);
        $(".tab-content .tab-content__item").removeClass('active');
        $(".tab-content .tab-content__item").eq(num).addClass('active');
        $(".tab-menu li").removeClass('active');
        $(this).addClass('active')
    });
});


window.URL = window.URL || window.webkitURL;

var fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem"),
    fileList = document.getElementById("fileList");

fileSelect.addEventListener("click", function (e) {
    if (fileElem) {
        fileElem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
}, false);

function handleFiles(files) {
    if (!files.length) {
        fileList.innerHTML = "<p>No files selected!</p>";
    } else {
        fileList.innerHTML = "";
        var list = document.createElement("ul");
        fileList.appendChild(list);
        for (var i = 0; i < files.length; i++) {
            var li = document.createElement("li");
            list.appendChild(li);
            
            var img = document.createElement("img");
            img.src = window.URL.createObjectURL(files[i]);
            img.height = 60;
            img.onload = function() {
                window.URL.revokeObjectURL(this.src);
            }
            li.appendChild(img);
        }
    }
}

