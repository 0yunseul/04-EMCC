$(function() {
	//$ :찾아라 
	//.click(function(){~~~}) : 클릭하면 처리할 코드 
	//.show() , .hide() : effect method
	$(function() {
		$("#detail").click(function() {
			$(".item-detail").removeClass("d-none"); //.removeClass() :클래스 제거메소드
			//.show("slow");
		})
		$("#close").click(function() {
			$(".item-detail").addClass("d-none"); //.addClass() :클래스 추가소드
			//.hide("fast");
		})
	})
})