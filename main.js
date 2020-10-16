class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click(function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}
	
}

new StickyNavigation();

$(document).ready(function(){
    document.getElementById("readme").innerHTML='<iframe src="readme/stress.html" width="80%"></iframe>';
})

function run(filename){
	const toDataURL = url => fetch(url)
	  .then(response => response.blob())
	  .then(blob => new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.onloadend = () => resolve(reader.result)
		reader.onerror = reject
		reader.readAsDataURL(blob)
	  }))
  
  
	const url = 'images/'+filename;
	console.log("url")
	console.log(url)

	const data = toDataURL(url)
	.then( dataUrl => {
	  const body_data = {
		"access_token" : "",
		"image" : dataUrl.split(',')[1]
	  }
	  const json_data = {
		method: 'POST',
		body: body_data, // string or object
	  }
  
	  console.log(json_data)
	//   const response = fetch("http://keti.asuscomm.com:32222/function/yonsei-imagestressrecognition-5", {
	  const response = fetch("http://10.0.7.1:32222/function/yonsei-imagestressrecognition-5", {
		method: 'POST',
		body: JSON.stringify(body_data), // string or object
	  })
	  .then((res) => res.json())
	  .then((data) => {
		  $("#result_value").text(JSON.stringify(data["return_stress"]));
		  return data["return_stress"]
		})
		.then((data) => {
			var divEl = $("#image");
			var divX = divEl.offset().left;
			var divY = divEl.offset().top;
			var divW = divEl.width();
			var divH = divEl.height();
		console.log(divX);
		console.log(divY);
		console.log(divW);
		console.log(divH);


		//   $("#rect").append('<div class="object-rectangle" style="position: static; top:1889.5px; left:237.5px; width:10%; height:10%;"></div>');
		//   $("#rect").append(`<div class="object-rectangle" style="top:$('divY')px; left:$('divX')px; width:$('divW')px; height:$('divH')px;"></div>`);
		console.log(data["xmax"])
		console.log(data["xmin"])
		console.log(data["ymax"])
		console.log(data["ymin"])
		})
		.then(url => {
			$(".image").attr("src", "images/"+filename);
		})
	//   .then((res) => {

	// 	// document.getElementById("readme").innerHTML='<iframe src="readme/stress.html" width="80%"></iframe>';
	// 	console.log(res.json())
	//   }
	//   )
	  // do something with myJson
	});
  }

function run_url(img_url){
  
	const dataUrl = img_url;
	console.log("url")
	console.log(dataUrl)

	const body_data = {
	"access_token" : "",
	"image" : dataUrl.split(',')[1]
	}
	const json_data = {
	method: 'POST',
	body: body_data, // string or object
	}

	console.log(json_data)
	const response = fetch("http://10.0.7.1:32222/function/yonsei-imagestressrecognition-5", {
	method: 'POST',
	body: JSON.stringify(body_data), // string or object
	})
	.then((res) => res.json())
	.then((data) => {
		$("#result_value").text(JSON.stringify(data["return_stress"]));
	})
	.then((data) => {

		console.log(data["return_stress"]["xmax"])
		console.log(data["return_stress"]["xmin"])
		console.log(data["return_stress"]["ymax"])
		console.log(data["return_stress"]["ymin"])
	})

	console.log(dataUrl);
	$(".image").attr("src", dataUrl);
}

$(".img-button").click(function(){
	const id = $(this).attr("id");
	var filename = "";
	if(id === "img1"){
		filename = "sample_image.png";
	}
	else if(id === "img2"){
		filename = "1.jpg";
	}
	else if(id === "img3"){
		filename = "2.jpg";
	}
	run(filename);
})


$(".img-url-button").click(function(){
	const val= $("#img-url").val()
	run_url(val);
})

function drawRect(x, y, w, h){
	const container = document.querySelector('.items');
	// container.innerHTML = 
}

