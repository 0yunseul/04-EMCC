$(function() {
	//$ :찾아라 
	//.click(function(){~~~}) : 클릭하면 처리할 코드 
	//.show() , .hide() : effect method
//	$(function() {
//		$("#detail").click(function() {
//			$(".item-detail").removeClass("d-none"); //.removeClass() :클래스 제거메소드
//			//.show("slow");
//		})
//		$("#close").click(function() {
//			$(".item-detail").addClass("d-none"); //.addClass() :클래스 추가소드
//			//.hide("fast");
//		})
//	})
		window.addEventListener("DOMContentLoaded",function(){
						
						const closeBT = document.querySelector("#close");
						const openBT = document.querySelector("#open");
						const itemDIV = document.querySelector(".item-detail");
					
						
						openBT.addEventListener("click", function(){
							itemDIV.classList.remove("d-none");
						});
						closeBT.addEventListener("click", function(){
							itemDIV.classList.add("d-none");
						});
				
						const smallIMG = document.querySelectorAll(".small-img li");	//NodeList로 반환
						const img1= document.querySelector("#img1");
					
						smallIMG[0].addEventListener("mouseenter", function(){ 
							img1.setAttribute("src","https://picsum.photos/id/1/2000/2000")
						})				
						
						smallIMG[1].addEventListener("mouseenter", function(){
							img1.setAttribute("src","https://picsum.photos/id/10/2000/2000")
						})				
						
						smallIMG[2].addEventListener("mouseenter", function(){
							img1.setAttribute("src","https://picsum.photos/id/100/2000/2000")
						})		
						const toggleSidePanel = $("#closePanel");
						const sidePanel =$("#sidePanel");
						const screen = $(".screen")
						
						toggleSidePanel.addEventListener("click",function(){
							if(sidePanel.hasClass("collapsed")){
								sidePanel.removeClass("collapsed");
								screen.removeClass("d-none");
							}else {
								sidePanel.addClass("collapsed");
								screen.addClass("d-none");
						}
						});
					
						/* smallIMG.forEach(function(){ 
							console.log("클릭했습니다")
						})	*/				
					
					})
})