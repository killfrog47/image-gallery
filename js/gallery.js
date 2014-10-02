$(function(){
	var featureImage = $('#featuredImg');

	$('.thumb').click(function(){
		var indexNum = $(this).index();
		var newUrl = $(this).data('image');
		$(featureImage).attr('src', newUrl);
		$('.thumb img.active').removeClass('active');
		$("li img.galleryThumb").eq(indexNum).addClass('active');
	})
	
	var numOfThumbs = $("#galleryThumbs li").length;
	
	var thumbListLength = (100*numOfThumbs)+(5*(numOfThumbs))-645;
	console.log(thumbListLength);
})