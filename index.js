// const main_container = document.querySelector('.et-main');
// main_container.innerHTML=
// `
// <section class="et-slide" id="tab-es6">
// 	<br>
// 	<br>
// 	<br>
// 	<br>
// 	<div class="header">
// 		<div class="title">
// 		<span class="spacer"></span>
// 		</div>
// 	</div>
// 	<br>
// 		<h1>모델 개요</h1>
// 	<br>
// 	<br>
// 		<!-- <h3>something about es6</h3> -->
// 		<div id="readme"></div>
// 		</section>
// 		<section class="et-slide" id="tab-flexbox">
// 	<br>
// 	<br>
// 	<br>
// 	<br>
// 	<div class="header">
// 		<div class="title">
// 			<span class="spacer"></span>
// 		</div>
// 	</div>

// 	<br>
// 		<h1>기능</h1>
// 	<br>

// </section>

// `


// changePage("stress");


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
		console.log(element)
		let scrollTop = $(element.attr('.et-hero-tab')).offset().top - this.tabContainerHeight + 1;
		// let scrollTop = $('.et-hero-tab').offset().top - this.tabContainerHeight + 1;
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

// new StickyNavigation();

function run_image(filename, type){

	const toDataURL = (url) => fetch(url)
		.then(response => response.blob())
		.then(blob => new Promise((resolve, reject) => {
			const reader = new FileReader()
			reader.onloadend = () => resolve(reader.result)
			reader.onerror = reject
			reader.readAsDataURL(blob)
		}))
  
	const url = 'images/'+filename;
	console.log(filename);
	console.log(type);


	const data = toDataURL(url)
	.then((dataUrl) => {
		console.log(type)
		console.log("image : ", dataUrl)

		var api_url = "";
		if(type === 0){
			// api_url = "http://10.0.7.1:32222/function/yonsei-imagestressrecognition-5"
			api_url = "http://keti.asuscomm.com:32222/function/yonsei-imagestressrecognition-4";
		}
		else if(type === 1){
			// api_url = "http://10.0.7.1:32222/function/kaist-videorecognition-4"
			api_url = "http://keti.asuscomm.com:32222/function/kaist-videorecognition-4";
		}

		const body_data = {
			"access_token" : "[USER ACCESS TOKEN]",
			"image" : dataUrl.split(',')[1]
		}
  
		console.log(body_data)
		// const response = fetch("http://10.0.7.1:32222/function/yonsei-imagestressrecognition-5", {
		const response = fetch(api_url, {
			method: 'POST',
			body: JSON.stringify(body_data), // string or object
		})
		.then((res) => res.json())
		.then((data) => {
			if(type===0){
				if(data["response"] === "success"){
					$("#result_value").text(JSON.stringify(data["return_stress"]));
					console.log(data)
					const result_value = document.querySelector('#result_value');
					result_value.innerHTML=
					`{<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"stress_level":"${data["return_stress"]["stress_level"]}"<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"no_stress_confidence":"${data["return_stress"]["no_stress_confidence"]},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"weak_stress_confidence":"${data["return_stress"]["weak_stress_confidence"]},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"strong_stress_confidence":"${data["return_stress"]["strong_stress_confidence"]},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"xmin":"${data["return_stress"]["xmin"]},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"ymin":"${data["return_stress"]["ymin"]},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"xmax":"${data["return_stress"]["xmax"]},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"ymax":"${data["return_stress"]["ymax"]},<br>
					}
					`

					return data["return_stress"]
				}
			}
			else if(type===1){
				console.log(data)
				if(data["response"] === "success"){
					$("#result_value").text(JSON.stringify(data["result"]));
					const result_value = document.querySelector('#result_value');
					result_value.innerHTML=
					`{<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"gender":{<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"probability":"${data["result"]["gender"]["probability"]}}},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"prediction":"${data["result"]["gender"]["prediction"]}}},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"age":{<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"predicition":"${data["result"]["age"]["predicition"]}}},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"emotion":{<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"probability":"${data["result"]["emotion"]["probability"]}}},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"prediction":"${data["result"]["emotion"]["prediction"]}}},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;},<br>
					}
					`

					return data["result"]
				}
			}
		})
		.then((data) => {
			// var divEl = $("#image");
			// console.log(divEl);
			// var divX = divEl.width() * data["xmin"];
			// var divY = divEl.height() * data["ymin"];
			// var divW = divEl.width() * (data["xmax"] - data["xmin"]);
			// var divH = divEl.height() * (data["ymax"] - data["ymin"]);

			// // var target = document.getElementById("image");
			// // var targetRect = target.getBoundingClientRect();
			// // console.log(targetRect["x"])
			// // console.log(targetRect)


			// // var pdivX = targetRect["x"];
			// // var pdivY = targetRect["y"];
			// // var pdivW = targetRect["width"];
			// // var pdivH = targetRect["height"]
			// // var pdivX = targetRect["x"] + data["xmin"];
			// // var pdivY = targetRect["y"] + data["ymin"];
			// // var pdivW = divX + data["xmax"];
			// // var pdivH = divY + data["ymax"];
			// console.log(divX);
			// console.log(divY);
			// console.log(divW);
			// console.log(divH);

			// // var pdivW = 
			// // var pdivH = 

			// const face_rect = document.querySelector('.rect');
			// face_rect.innerHTML=
			// `
			// <div class="face_rect" id="face_rect" style="top:${divX}px; left:${divY}px; width:${divW}px; height:${divH}px;">
			// </div>
			// `
			// `
			// <div class="face_rect" id="face_rect" style="top:0px; left:0px; width:10px; height:50px;">
			// </div>
			// `



		// console.log(data["xmax"])
		// console.log(data["xmin"])
		// console.log(data["ymax"])
		// console.log(data["ymin"])
		})
		.then(url => {
			$(".image").attr("src", "images/"+filename);
		})
		.catch(error => {
			alert(error);

		})
	});
  }

function run_image_url(img_url, type){

	// function toDataURL(url, callback) {
	// 	var xhr = new XMLHttpRequest();
	// 	xhr.onload = function() {
	// 		var reader = new FileReader();
	// 		reader.onloadend = function() {
	// 			callback(reader.result);
	// 		}
	// 		reader.readAsDataURL(xhr.response);
	// 	};
	// 	xhr.open('GET', url);
	// 	xhr.responseType = 'blob';
	// 	xhr.send();
	// }

	const toDataURL = (url) => fetch(url)
		.then(response => response.blob())
		.then(blob => new Promise((resolve, reject) => {
			const reader = new FileReader()
			reader.onloadend = () => resolve(reader.result)
			reader.onerror = reject
			reader.readAsDataURL(blob)
		})) 
	// toDataURL('http://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png', function(dataUrl) {
	// 	console.log('RESULT:', dataUrl)
	// })

	const dataUrl = toDataURL(img_url).then((dataUrl) => {
		console.log("url");
		console.log(dataUrl);


		const body_data = {
		"access_token" : "",
		"image" : dataUrl.split(',')[1]
		}

		const json_data = {
			method: 'POST',
			body: body_data, // string or object
		}

		console.log(json_data)
		var api_url = "";
		if(type === 0){
			api_url = "http://keti.asuscomm.com:32222/function/yonsei-imagestressrecognition-4";
		}
		else if(type === 1){
			api_url = "http://keti.asuscomm.com:32222/function/kaist-videorecognition-4";
		}
		else if(type === 2){
			api_url = "http://keti.asuscomm.com:32222/function/keti-multicaptioning-1";
		}

		const response = fetch(api_url, {
		method: 'POST',
		body: JSON.stringify(body_data), // string or object
		})
		.then((res) => res.json())
		.then((data) => {

			if(type===0){
				if(data["response"] === "success"){
					$("#result_value").text(JSON.stringify(data["return_stress"]));
					console.log(data)
					const result_value = document.querySelector('#result_value');
					result_value.innerHTML=
					`{<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"stress_level":"${data["return_stress"]["stress_level"]}"<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"no_stress_confidence":"${data["return_stress"]["no_stress_confidence"]},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"weak_stress_confidence":"${data["return_stress"]["weak_stress_confidence"]},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"strong_stress_confidence":"${data["return_stress"]["strong_stress_confidence"]},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"xmin":"${data["return_stress"]["xmin"]},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"ymin":"${data["return_stress"]["ymin"]},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"xmax":"${data["return_stress"]["xmax"]},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"ymax":"${data["return_stress"]["ymax"]},<br>
					}
					`

					return data["return_stress"]
				}
			}
			else if(type===1){
				console.log(data)
				if(data["response"] === "success"){
					$("#result_value").text(JSON.stringify(data["result"]));
					const result_value = document.querySelector('#result_value');
					result_value.innerHTML=
					`{<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"gender":{<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"probability":"${data["result"]["gender"]["probability"]}}},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"prediction":"${data["result"]["gender"]["prediction"]}}},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"age":{<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"predicition":"${data["result"]["age"]["predicition"]}}},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;"emotion":{<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"probability":"${data["result"]["emotion"]["probability"]}}},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"prediction":"${data["result"]["emotion"]["prediction"]}}},<br>
					&nbsp;&nbsp;&nbsp;&nbsp;},<br>
					}
					`

					return data["result"]
				}
			}
			else if(type===2){
				$("#result_value").text(JSON.stringify(data["result"]));
			}
		})

		console.log(dataUrl);
		$(".image").attr("src", dataUrl);
	});
}


function run_image_caption(filename, type){

	const toDataURL = (url) => fetch(url)
		.then(response => response.blob())
		.then(blob => new Promise((resolve, reject) => {
			const reader = new FileReader()
			reader.onloadend = () => resolve(reader.result)
			reader.onerror = reject
			reader.readAsDataURL(blob)
		}))
  
	const url = 'images/'+filename;
	console.log(filename);
	console.log(type);

	const data = toDataURL(url)
	.then((dataUrl) => {
		console.log(type)
		console.log("image : ", dataUrl)

		var api_url = "";
		api_url = "http://keti.asuscomm.com:32222/function/keti-multicaptioning-1";
		const body_data = {
			"access_token" : "",
			"image" : dataUrl.split(',')[1]
		}

		console.log(body_data)

		const response = fetch(api_url, {
			method: 'POST',
			body: JSON.stringify(body_data) // string or object
		})
		.then((res) => res.json())
		.then((data) => {
			$("#result_value").text(JSON.stringify(data["result"]));
			// console.log(data)
			// const result_value = document.querySelector('#result_value');
			// result_value.innerHTML=
			// `<br>
			// &nbsp;"stress_level":"${data["result"]}">
			// <br>
			// `

			// return data["result"]
		})
		.then(url => {
			$(".image").attr("src", "images/"+filename);
		})
		.catch(error => {
			console.log("error")
			alert(error);
		})
	});
  }

function run_text(type, text){

	var api_url = "";
	// api_url = "http://10.0.7.1:32222/function/sgu-korean-style-transfer-1"
	api_url = "http://keti.asuscomm.com:32222/function/sgu-korean-style-transfer-1"

	const body_data = {
		"access_token" : "",
		"input_text" : text,
		"target_style" : type
	}
	const json_data = {
		method: 'POST',
		body: body_data, // string or object
	}

	console.log(body_data);

	const response = fetch(api_url, {
		method: 'POST',
		body: JSON.stringify(body_data), // string or object
	})
	.then((res) => res.json())
	.then((data) => {
		console.log(data["transfer_sent"])
		var type_index = document.getElementById("result-text-contents")
		// const result_value = document.querySelector('#result_value');
		type_index.value=`${data["transfer_sent"].trim()}`
		return data["return_stress"]
	})
	.catch(error => {
		alert(error);

	});
}

function run_intents_classifier(text){
	console.log(text);

	var api_url = "";
	api_url = "http://keti.asuscomm.com:32222/function/keti-intentclassifier-1"
	const body_data = {
		"access_token" : "",
		"utterances": text
	}
	const json_data = {
		method: 'POST',
		body: body_data, // string or object
	}

	console.log(body_data);

	const response = fetch(api_url, {
		method: 'POST',
		body: JSON.stringify(body_data), // string or object
	})
	.then((res) => res.json())
	.then((data) => {
		console.log(Object.keys(data).length)
		var type_index = document.getElementById("result-text-area");
		type_index.innerHTML = `${JSON.stringify(data)}`
		
		return data
	})
	.catch(error => {
		alert(error);

	});
}
// $(".img-button-stress").click(function(){
function img_button_stress(clicked_id) {
	var filename = "";
	if(clicked_id === "img1"){
		filename = "sample_image.png";
	}
	else if(clicked_id === "img2"){
		filename = "1.jpg";
	}
	else if(clicked_id === "img3"){
		filename = "2.jpg";
	}
	console.log("filename : ", filename)
	run_image(filename, 0);
}

// $(".img-button-emotion").click(function(){
function img_button_emotion(clicked_id) {
	var filename = ""; 
	if(clicked_id === "img1"){ 
		filename = "sample_image.png"; 
	} 
	else if(clicked_id === "img2"){ 
		filename = "1.jpg"; 
	}
	else if(clicked_id === "img3"){ 
		filename = "2.jpg"; 
	} 
	console.log("filename : ", filename)
	run_image(filename, 1); 
} 

function img_button_caption(clicked_id) {
	var filename = "";
	if(clicked_id === "caption-sample"){
		filename = "multi-captioning-input.jpg";
	}
	console.log("filename : ", filename)
	run_image_caption(filename, 0);
}

// $(".img-url-button-stress").click(function(){
function img_url_button_stress() {
	const val= $("#img-url").val()
	if(val === ""){
		alert('URL이 비어있습니다.');
	}
	run_image_url(val, 0);
}

// $(".img-url-button-emotion").click(function(){
function img_url_button_emotion() {
	const val= $("#img-url").val()
	if(val === ""){
		alert('URL이 비어있습니다.');
	}
	run_image_url(val, 1);
}

function img_url_button_multi_caption() {
	const val= $("#img-url").val()
	if(val === ""){
		alert('URL이 비어있습니다.');
	}
	run_image_url(val, 2);
}

// $("text-contents-send").click(function(){
function send_text_contents(){
	var type_index = document.getElementById("lang-type").options.selectedIndex;
	var lang_type = document.getElementById("lang-type").options[type_index].value;
	var input_text = document.getElementById("text-contents").value;

	console.log(type_index);
	if(type_index === 0){
		alert("타입을 선택해 주세요.");
	}
	else if(input_text === ""){
		alert("내용을 입력해 주세요.");
	}
	else{
		console.log(lang_type);
		console.log(input_text);
		run_text(lang_type, input_text);
	}

}

function send_intents_classifier(){
	var input_text = document.getElementById("input-text-contents").value;

	console.log(input_text);
	run_intents_classifier(input_text);
}


function drawRect(x, y, w, h){
	const container = document.querySelector('.items');
	// container.innerHTML = 
}