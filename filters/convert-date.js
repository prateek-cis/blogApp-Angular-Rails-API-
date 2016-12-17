blogApp.filter("convertDate", function(){
	return function(input){ 
		return moment(input).format("LL");
	}
});