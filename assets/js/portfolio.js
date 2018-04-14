//Toggle for navbar
function toggleMenu(e) {
    document.getElementById((e.dataset.target.charAt( 0 )==='#')?e.dataset.target.slice(1):e.dataset.target).classList.toggle(e.dataset.toggle);
    e.setAttribute('aria-expanded',e.getAttribute('aria-expanded')=='true'?'false':'true');
    setTimeout(function(){ document.getElementById((e.dataset.target.charAt( 0 )==='#')?e.dataset.target.slice(1):e.dataset.target).classList.toggle("is-hidden"); }, 350);
}

//Masonry Layout
window.onload = function(){
var elem = document.querySelector('.portfolio-items');
	var msnry = new Masonry( elem, {
	// options
	itemSelector: '.pi-item',
	columnWidth: '.grid-sizer',
	percentPosition: true
	});
	
};

//filter content
	var deleteLinks = document.querySelectorAll('a[data-filter]');
	Array.from(deleteLinks).forEach(link => {
	link.addEventListener('click', function(event) {
	Array.from(deleteLinks).forEach(link2 => {
		link2.parentNode.classList.remove("is-active");
		if(event.target.dataset.type==link2.dataset.type){
			link2.parentNode.classList.add("is-active");
		}
	});
	var items = document.querySelectorAll('.pi-item');
	Array.from(items).forEach(item => {
		//console.log(item);
		
		if(event.target.dataset.type!='filter-reset' && event.target.dataset.type!=item.dataset.type){
			item.classList.add("is-hidden");
			setTimeout(function(){ item.classList.add("is-none"); }, 350);
		}else{
			item.classList.remove("is-none");
			item.classList.add("is-shown");
			setTimeout(function(){ item.classList.remove("is-hidden"); }, 350);
			
			
		}

	});
	});
	});

