const conatiner = document.querySelector('.et-main');
conatiner.innerHTML=
`
	<section class="et-slide" id="tab-es6">
<br>
<br>
<br>
<br>
<div class="header">
	<div class="title">
	<span class="spacer"></span>
	</div>
</div>
<br>
	<h1>모델 개요</h1>
<br>
<br>
	<!-- <h3>something about es6</h3> -->
	<div id="readme"></div>
	</section>
	<section class="et-slide" id="tab-flexbox">
<br>
<br>
<br>
<br>
<div class="header">
	<div class="title">
	<span class="spacer"></span>
	</div>
</div>
<br>
	<h1>기능</h1>
<br>
<br>
	<!-- <h3>something about flexbox</h3> -->
	<item class="row items">
		<div class="column preview">
		<div class="demo-img-container">
			<img src="images/sample_image.png" class="image" id="image"/>
			<div id='rect'></div>
		</div>
		</div>
		<div class="column preview">
		<div class="demo-img-results">
			<table class="no-boader" class="table">
			<thead>
				<tr class="table-header">
				<th class="th-1"> 기능 </th>
				<th class="th-2"> 값 </th>
				</tr>
			</thead>
			<tbody>
				<tr>
				<th id=> 결과  </th> 
				<th id=result_value>  </th> 
				</tr>
			</tbody>
			</table>
		</div>
		</div>
	</item>
	<item class="row list">
		<br>
		<br>
	<div class="header">
		<div class="title">
		<span class="spacer"></span>
		</div>
	</div>
		<div class="image_url">
		<input type="text" id="img-url">
		<input type="button" class="img-url-button-emotion" value="보내기">
		</div>
		<div class="image_list">
		<div class="crop_image">
			<input type="button" class="img-button-emotion" id="img1">
		</div>
		<div class="crop_image">
			<input type="button" class="img-button-emotion" id="img2">
		</div>
		<div class="crop_image">
			<input type="button" class="img-button-emotion" id="img3">
		</div>
		<div class="crop_image">
			<input type="button" class="img-button-emotion" id="img4">
		</div>
		<div class="crop_image">
			<input type="button" class="img-button-emotion" id="img4">
		</div>
		<div class="crop_image">
			<input type="button" class="img-button-emotion" id="img4">
		</div>
		</div>
	</item>
<br>
<br>
<br>
<br>
<div class="header">
	<div class="title">
	<span class="spacer"></span>
	</div>
</div>
<br>
	</section>
`

function changePage(clicked_id){
	console.log(clicked_id);

	if(clicked_id === "stress"){
		const readme = document.querySelector("#readme");
		readme.innerHTML=
			`
		<h1 id="-image-based-stress-recognition-api-">영상기반 스트레스 인식(Image Based Stress Recognition) API란?</h1>
		<p>연세대학교에서 제공하는 OpenAPI이며, 사람 얼굴이 포함되어 있는 이미지를 입력으로 스트레스 인식 알고리즘이 예측한 사람의 스트레스 수준을 결과로 반환해주는 API입니다. 스트레스 수준은 스트레스 없음, 스트레스 약함, 스트레스 강함의 3단계로 구성되어 있습니다.</p>
		<h2 id="-image-based-stress-recognition-">영상기반 스트레스 인식(Image Based Stress Recognition) 알고리즘이란?</h2>
		<p>아래 그림과 같이 이미지에서 (1). 사람 얼굴(Face)을 검출하고, (2). 이미지 내 검출된 사람 얼굴의 스트레스 수준이 어느 정도인지를 인식(Recognition)하는 알고리즘입니다.</p>
		<p><img src="images/stress_recognition.png" alt="Object Detection" class="readme-image"></p>
		<h2 id="-api-">영상기반 스트레스 인식 API 사용</h2>
		<h3 id="-api-">영상기반 스트레스 인식 API 호출</h3>
		<p>영상기반 스트레스 인식 API의 호출은 API를 서비스하는 서버 주소와 객체 검출을 위한 인자 값이 필요하며, 샘플 이미지를 활용하여 API 호출하는 예는 다음과 같습니다.</p>
		<p><strong>(샘플 이미지 - sample_image.png)</strong></p>
		<p><img src="images/sample_image.png" alt="Sample Image" class="readme-image"></p>
		<p><strong>(영상기반 스트레스 인식 API 호출 예)</strong></p>
		<pre><code>echo '{<span class="hljs-string">"access_token"</span>: [<span class="hljs-keyword">USER</span> <span class="hljs-title">ACCESS</span> TOKEN], <span class="hljs-string">"image"</span>: <span class="hljs-string">"'"</span>$(base64 
		sample_image.png)<span class="hljs-string">"'"</span>}' | curl -X POST -d @- 
		<span class="hljs-string">"http://keti.asuscomm.com:32222/function/imagestress"</span>
		</code></pre><ul>
		<li><p><code>imagestress</code> 는 영상기반 스트레스 인식 API의 함수 이름입니다.</p>
		</li>
		<li><p><code>Arguments</code>: 영상기반 스트레스 인식 API 호출을 위한 JSON 포맷으로 표현된 인자 값으로, OpenAPI 인증 토큰과 스트레스 인식 대상의 이미지 데이터로 구성됩니다.</p>
		<ul>
		<li><p>OpenAPI 인증 토큰(<code>access_token</code>): 디지털 동반자 페이지(추후 링크 게시 예정)에서 발급받은 문자열 타입의 사용자 토큰값</p>
		</li>
		<li><p>이미지 데이터(<code>image</code>): 스트레스 인식 대상의 이미지를 Base64로 인코딩된 문자열</p>
		<blockquote>
		<p><code>&quot;&#39;&quot;$(base64 sample_image.png)&quot;&#39;&quot;</code>:  <code>sample_image.png</code>라는 이름의 이미지를 base64 명령어를 사용하여 Base64로 인코딩한 값입니다.</p>
		<p>Base64는 0~256 사이의 부호없는 정수값(binary 데이터)을 ASCII code로 인코딩(맵핑)하는 방식을 말합니다.  자세한 정보는 <a href="[https://ko.wikipedia.org/wiki/%EB%B2%A0%EC%9D%B4%EC%8A%A464](https://ko.wikipedia.org/wiki/베이스64">여기</a>)를 참조하세요. </p>
		<p><a href="https://www.base64-image.de/">online page that translate image to base64 (encoding)</a></p>
		</blockquote>
		</li>
		</ul>
		</li>
		</ul>
		<h3 id="-api-">영상기반 스트레스 인식 API 반환</h3>
		<p>영상기반 스트레스 인식 API는 API의 정상작동 여부, 디버깅 메세지, 스트레스 인식 결과를 JSON 포맷으로 반환합니다. 스트레스 인식 결과는 인식된 스트레스 수준, 각 스트레스 수준의 컨피던스 값으로 구성됩니다.</p>
		<p><strong>(영상기반 스트레스 인식 API 반환결과 예시)</strong></p>
		<pre><code class="lang-json">{
			<span class="hljs-attr">"dev_code"</span>: <span class="hljs-string">"1"</span>,
			<span class="hljs-attr">"dev_msg"</span>: <span class="hljs-string">"success"</span>,
			<span class="hljs-attr">"return_stress"</span>: {<span class="hljs-attr">"stress_level"</span>: <span class="hljs-string">"0"</span>,
			<span class="hljs-attr">"no_stress_confidence"</span>: <span class="hljs-string">"0.49489507"</span>,
			<span class="hljs-attr">"weak_stress_confidence"</span>: <span class="hljs-string">"0.14291452"</span>,
			<span class="hljs-attr">"strong_stress_confidence"</span>: <span class="hljs-string">"0.3621904"</span>,
			<span class="hljs-attr">"xmin"</span>: <span class="hljs-string">"476"</span>,
			<span class="hljs-attr">"ymin"</span>: <span class="hljs-string">"215"</span>,
			<span class="hljs-attr">"xmax"</span>: <span class="hljs-string">"857"</span>,
			<span class="hljs-attr">"ymax"</span>: <span class="hljs-string">"696"</span>}}
		</code></pre>
		<ul>
		<li><p>API 정상작동 여부(<code>dev_code</code>): 호출된 영상기반 스트레스 인식 API의 상태 정보 확인을 위한 값으로 문자열로 표기됩니다(상세내용은 Reference 참조)</p>
		</li>
		<li><p>디버깅 메세지(<code>dev_msg</code>): 호출된 영상기반 스트레스 인식 API에 대한 디버깅 메세지로 문자열로 표기됩니다.</p>
		</li>
		<li><p>스트레스인식정보(<code>return_stress</code>): 이미지에서 검출된 사람 얼굴의 스트레스 인식 정보들이 JSON 포맷으로 표기됩니다.</p>
		<ul>
		<li><p>스트레스 수준 정보(<code>stress_level</code>)</p>
		<p>0, 1, 2 값 중에 하나의 값을 반환 (0: 스트레스 없음, 1: 스트레스 약함, 2: 스트레스 강함)</p>
		</li>
		<li><p>스트레스 없음의 컨피던스 값(<code>no_stress_confidence</code>)</p>
		<p>영상기반 스트레스 인식 알고리즘이 예측한 스트레스 없음 결과에 대해서 인공지능 모델이 얼마나 확신하는지에 대한 확률값으로 [0, 1]사이의 실수값을 반환 (1에 가까울 수록 스트레스 없음일 확률이 높다는 것을 의미)</p>
		</li>
		<li><p>스트레스 약함의 컨피던스 값(<code>weak_stress_confidence</code>)</p>
		<p>영상기반 스트레스 인식 알고리즘이 예측한 스트레스 약함 결과에 대해서 인공지능 모델이 얼마나 확신하는지에 대한 확률값으로 [0, 1]사이의 실수값을 반환 (1에 가까울 수록 스트레스 약함일 확률이 높다는 것을 의미)</p>
		</li>
		<li><p>스트레스 강함의 컨피던스 값(<code>strong_stress_confidence</code>)</p>
		<p>영상기반 스트레스 인식 알고리즘이 예측한 스트레스 강함 결과에 대해서 인공지능 모델이 얼마나 확신하는지에 대한 확률값으로 [0, 1]사이의 실수값을 반환 (1에 가까울 수록 스트레스 강함일 확률이 높다는 것을 의미)</p>
		</li>
		<li><p>검출된 얼굴의 위치 정보(<code>xmin</code>, <code>ymin</code>, <code>xmax</code>, <code>ymax</code>)
		이미지에서 검출된 얼굴에 대한 위치 정보로 검출된 얼굴을 중심으로 좌상단(<code>xmin</code>, <code>ymin</code>)의 좌표값과 우하단(<code>xmax</code>, <code>ymax</code>)의 좌표값을 반환 (검출된 얼굴을 이미지에 박스로 표현하기 - Reference3 참조)</p>
		</li>
		</ul>
		</li>
		</ul>
		<h1 id="reference">Reference</h1>
		<h3 id="1-api-">1. 영상기반 스트레스 인식 API 에러 코드</h3>
		<p>영상기반 스트레스 인식 API 출력 인터페이스에 정의된 &quot;dev_code&quot;에 대한 정의입니다. 영상기반 스트레스 인식 API의 응답에서 &quot;dev_code&quot;의 상태값을 보고 사용자는 영상기반 스트레스 인식 API가 요청에 정상적으로 응답했는지 확인할 수 있으며, 잘못된 응답을 받았을 때, 어떤 것이 잘못되었는지 알 수 있습니다.</p>
		<table>
		<thead>
		<tr>
		<th>dev_code</th>
		<th>Description</th>
		</tr>
		</thead>
		<tbody>
		<tr>
		<td>1</td>
		<td>요청 성공</td>
		</tr>
		<tr>
		<td>0</td>
		<td>이미지 로드 실패</td>
		</tr>
		</tbody>
		</table>
		<h3 id="2-api-">2. 영상기반 스트레스 인식 API의 클래스 정보</h3>
		<p>영상기반 스트레스 인식 API는 스트레스 인식을 위해 연세대학교에서 자체적으로 취득한 데이터셋을 사용합니다. 해당 데이터셋은 20~30대 남녀 50명에 대해 취득하였으며, 총 200만장의 비디오 프레임으로 구성되어 있습니다. 데이터셋 취득 실험의 시나리오는 스트레스를 유발하지 않는 단계, 약한 스트레스를 유발하는 단계, 강한 스트레스를 유발하는 단계 등으로 구성되어 있었고 스트레스를 유발하지 않는 단계, 약한 스트레스를 유발하는 단계, 강한 스트레스를 유발하는 단계에서 취득한 데이터를 각각 스트레스 없음, 스트레스 약함, 스트레스 강함으로 라벨링하였습니다.</p>
		<h3 id="3-">3. 검출된 얼굴을 이미지에 박스로 표현하기</h3>
		<p>영상기반 스트레스 인식 API의 반환값 중 검출된 얼굴의 위치 정보를 활용하여 아래 그림과 같이 검출된 얼굴의 영역을 박스형태로 표현할 수 있습니다.
		<strong>(Python을 활용한 검출된 얼굴을 이미지에 박스로 표현하기)</strong></p>
		<pre><code>from PIL <span class="hljs-built_in">import</span> Image, ImageDraw
		<span class="hljs-attr">img</span> = Image.open(<span class="hljs-string">"sample_image.png"</span>)
		<span class="hljs-attr">draw</span> = ImageDraw.Draw(img)
		<span class="hljs-attr">xmin</span> = <span class="hljs-number">476</span>
		<span class="hljs-attr">ymin</span> = <span class="hljs-number">215</span>
		<span class="hljs-attr">xmax</span> = <span class="hljs-number">857</span>
		<span class="hljs-attr">ymax</span> = <span class="hljs-number">696</span>
		draw.rectangle([(xmin, ymin), (xmax, ymax)], <span class="hljs-attr">outline="red")</span>
		img.show()
		</code></pre><p><strong>(실행 결과)</strong></p>
		<p><img src="images/face_detection.png" alt="face_detection" class="readme-image"></p>
		`;
	}
	else{
		const readme = document.querySelector("#readme");
		readme.innerHTML=`<h1>준 비 중</h1>`;
	}

	window.scrollTo(0,0);
}

changePage("stress");


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

function run(filename, type){
	const toDataURL = (url) => fetch(url)
		.then(response => response.blob())
		.then(blob => new Promise((resolve, reject) => {
			const reader = new FileReader()
			reader.onloadend = () => resolve(reader.result)
			reader.onerror = reject
			reader.readAsDataURL(blob)
		}))
  
	const url = 'images/'+filename;
	console.log(type);
	const data = toDataURL(url)
	.then((dataUrl) => {
		console.log(type)
		const body_data = {
			"access_token" : "",
			"image" : dataUrl.split(',')[1]
		}
		const json_data = {
			method: 'POST',
			body: body_data, // string or object
		}

		var api_url = "";
		if(type === 0){
			// api_url = "http://10.0.7.1:32222/function/yonsei-imagestressrecognition-5"
			api_url = "http://keti.asuscomm.com:32222/function/yonsei-imagestressrecognition-5"
		}
		else{
			// api_url = "http://10.0.7.1:32222/function/kaist-videorecognition-4"
			api_url = "http://keti.asuscomm.com:32222/function/kaist-videorecognition-4"
		}
  
		// console.log(json_data)
		// const response = fetch("http://10.0.7.1:32222/function/yonsei-imagestressrecognition-5", {
		const response = fetch(api_url, {
		method: 'POST',
		body: JSON.stringify(body_data), // string or object
	})
	.then((res) => res.json())
	.then((data) => {
		if(type===0){
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
		else{
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
	});
  }

function run_url(img_url, type){
  
	const dataUrl = img_url;
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
	const api_url = "";
	if(type === 0){
		api_url = "http://10.0.7.1:32222/function/yonsei-imagestressrecognition-5"
	}
	else{
		api_url = "http://10.0.7.1:32222/function/kaist-videorecognition-4"
	}
	const response = fetch(api_url, {
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

$(".img-button-stress").click(function(){
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
	run(filename, 0);
})

$(".img-button-emotion").click(function(){
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
	run(filename, 1);
})


$(".img-url-button-stress").click(function(){
	const val= $("#img-url").val()
	run_url(val, 0);
})

$(".img-url-button-emotion").click(function(){
	const val= $("#img-url").val()
	console.log(val)
	run_url(val, 1);
})

function sendImgFile(sOriginImgUrl){
	var arSplitUrl   = sOriginImgUrl.split("\\");    //   "/" 로 전체 url 을 나눈다
	var nArLength     = arSplitUrl.length;
	var arFileName         = arSplitUrl[nArLength-1];   // 나누어진 배열의 맨 끝이 파일명이다
	console.log(arFileName)

	run(arFileName, 1);
}



function drawRect(x, y, w, h){
	const container = document.querySelector('.items');
	// container.innerHTML = 
}


// var canvas = document.getElementById('image_canvas')
// var context = document.getElementById('image_canvas').getContext('2d')
// var img = new Image();
// img.src = "images/sample_image.png";
// console.log(img.width)
// console.log(img.height)
// img.onload=function(){
// 	scaleToFit(this);
// 	// context.drawImage(img, 0, 0, img.width, img.height) 
// }

// function scaleToFit(img){
//     // get the scale
// 	var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
	
//     // get the top left position of the image
//     var x = (canvas.width) - (img.width ) * scale;
// 	var y = (canvas.height ) - (img.height ) * scale;

// 	context.clearRect(0, 0, canvas.width, canvas.height); //clear html5 canvas
//     context.drawImage(img, 0, 0, img.width * scale, img.height * scale);
// }