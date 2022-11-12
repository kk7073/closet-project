let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});

var carouselWidth = $('.carousel-inner')[0].scrollWidth;
var cardWidth = $('.carousel-item').width();

var scrollPosition = 0;

$('.carousel-control-next').on('click', function(){
  scrollPosition = scrollPosition + cardWidth;
  $('carousel-inner').animate({scrollLeft: scrollPosition }, 600);
});

function filter() {

    var value, name, item, i;

    value = document.getElementById("search").value.toUpperCase();
    item = document.getElementsByClassName("card");

    for(i=0;i<item.length;i++){
      name = item[i].getElementsByClassName("card-body");
      if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
        item[i].style.display = "flex";
      }else{
        item[i].style.display = "none";
      }
    }
  }
  function modalclick(){
    $(".card").click(function(){
    var imgSrc = $(this).children("img").attr("src");
		var imgAlt = $(this).children("img").attr("alt"); 
    var imgTit =  $(this).children("div").children('p:eq(0)').text();
    var img1 =  $(this).children("div").children('a:eq(1)').attr("href");
    var img2 =  $(this).children("div").children('a:eq(0)').attr("href");
    var imgspec =  $(this).children("div").children('p:eq(1)').text();
    var imgcloset =  $(this).children("div").children('p:eq(2)').text();



    console.log(imgTit)
		$(".modal-header img").attr("src", imgSrc);
		$(".modal-body div").text(imgTit);
    $(".modal-body p:eq(0)").text(imgspec);
    $(".modal-body p:eq(1)").text(imgcloset);
		$(".modal-body a:eq(1)").attr("href", img1);
    $(".modal-body a:eq(0)").attr("href", img2);


    })
  }

  