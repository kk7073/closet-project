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
    var img3 =  $(this).children("div").children('a:eq(2)').attr("href");
    var imgspec =  $(this).children("div").children('p:eq(1)').text();
    var imgcloset =  $(this).children("div").children('p:eq(2)').text();
    var imgdry =  $(this).children("div").children('p:eq(3)').text();




    console.log(imgTit)
		$(".modal-header img").attr("src", imgSrc);
		$(".modal-body div").text('이름:  '+imgTit);
    $(".modal-body p:eq(0)").text('사이즈:  '+imgspec);
    $(".modal-body p:eq(1)").text('가격:  '+imgcloset);
    $(".modal-body p:eq(2)").text('세탁방법:  '+imgdry);
		$(".modal-body a:eq(1)").attr("href", img1);
    $(".modal-body a:eq(0)").attr("href", img2);
    $(".modal-body a:eq(2)").attr("href", img3);



    })
  }

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('preview').src = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      document.getElementById('preview').src = "";
    }
  }
 
  function setdatebox(){
    var dt = new Date();
    var com_year = dt.getFullYear();
    years ='';
    for(var i =(com_year -20); i<=(com_year+2); i++){
      years += $('#YEAR').append("<option value'"+i+"'>"+i+"년"+"</option>");
    }
  }
  