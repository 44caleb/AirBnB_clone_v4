$(document).ready(function(){
	let amenities = [];
	function addElement(){
		if ($(this).prop("checked")) {
			let amenityName = $(this).attr("data-name");
			amenities.push(amenityName);
		}
		else {
			let amenityName = $(this).attr("data-name");
			let index = amenities.indexOf(amenityName);
			if (index != -1) {
				amenities.splice(index, 1);
			}
		}
		$(".amenities h4").text(amenities);
	}
	 $('input[type="checkbox"]').on('change', addElement);
}
)
