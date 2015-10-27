function scroll_left_slider(){

var col_all_el = $('.box_cmd .slider-element').length;

$('.box_cmd .slider-element:hidden:last').show(1000); 
$('#img-right').show();
var col_el = $('.box_cmd .slider-element:visible').length;
if(col_el==col_all_el){
	$('#img-left').hide();
}


}

function scroll_right_slider(){
	var  count_el_on_page = 3;
	var col_el = $('.box_cmd .slider-element:visible').length;
	//alert(col_el);
	if(col_el>count_el_on_page){
		$('.box_cmd .slider-element:visible:first').hide(1000); 
		$('#img-left').show();
		
		col_el = col_el-1;
		if(col_el<=count_el_on_page){
			$('#img-right').hide();
		
		}
	} 

}