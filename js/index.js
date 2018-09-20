$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 300);
});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("uptotop").style.display = "block";
    } else {
        document.getElementById("uptotop").style.display = "none";
    }
}

let orig_text = "工作內容";
$('#btn-1041621').hover(() => {
    $('#intro-work').text("網頁標註系統");
}, () => {
    $('#intro-work').text(orig_text);
})
$('#btn-1041702').hover(() => {
    $('#intro-work').text("基於單張影像之虛擬試衣間研究");
}, () => {
    $('#intro-work').text(orig_text);
})
$('#btn-1041713').hover(() => {
    $('#intro-work').text("文字探勘-文本比對 & Kubernetes研究");
}, () => {
    $('#intro-work').text(orig_text);
})
$( "#dropdown05" ).click(function() {
    $( "#blog-pages" ).scroll();
  });


  $("#dropdown05").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#blog-pages").offset().top
    }, 500);
});
// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

