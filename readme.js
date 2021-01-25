
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
		<tbody>			<div class="input-text">
        내용 : &nbsp;
        <input type="text" size=60% id="text-contents">
        &nbsp;
        <input type="button" size=20% onclick=text_contents_send() value="보내기">
        <br>
        <br>
        <br>
        <br>
    </div>
    <div class="input-text">
        결과 : &nbsp;
        <input type="text" size=67% id="result-text-contents">
    </div>

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

		const result_container = document.querySelector('.et-result');
		result_container.innerHTML=
		`
		<section class="et-slide" id="tab-es6">
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
			<item class="row-list">
				<br>
				<br>
				<div class="header">
					<div class="title">
						<span class="spacer"></span>
					</div>
				</div>
				<div class="image_url">
					image URL:
					<input type="text" id="img-url">
					<input type="button" onclick="img_url_button_stress()" value="보내기">
				</div>
				<div class="image_list">
					<div class="crop_image">
						<input type="button" onclick="img_button_stress(this.id)" id="img1">
					</div>
					<div onclick="crop_image">
						<input type="button" onclick="img_button_stress(this.id)" id="img2">
					</div>
					<div onclick="crop_image">
						<input type="button" onclick="img_button_stress(this.id)" id="img3">
					</div>
					<div onclick="crop_image">
						<input type="button" onclick="img_button_stress(this.id)" id="img4">
					</div>
					<div onclick="crop_image">
						<input type="button" onclick="img_button_stress(this.id)" id="img4">
					</div>
					<div onclick="crop_image">
						<input type="button" onclick="img_button_stress(this.id)" id="img4">
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
	}
	else if(clicked_id === "recognition"){
		const readme = document.querySelector("#readme");
		readme.innerHTML=
		`
		<h1 id="영상-감정-인식-api란">영상 감정 인식 API란?</h1>
		<p>KAIST에서 제공하는 OpenAPI이며, 이미지를 입력으로 1) 성별, 2) 나이, 3) 감정 예측결과를 반환해주는 API입니다.</p>
		<h2 id="영상-감정-인식-api">영상 감정 인식 API</h2>
		<h3 id="영상-감정-인식-api-호출">영상 감정 인식 API 호출</h3>
		<p>영상감정인식 API의 호출은 API를 서비스하는 서버 주소와 객체 검출을 위한 인자 값이 필요하며, 샘플 이미지를 활용하여 API 호출하는 예는 다음과 같습니다.</p>
		<p><strong>(샘플 이미지 - sample.jpg)</strong></p>
		<div class="figure">
		<img src="images/recognition.jpg" alt="Sample image"  class="readme-image"/><p class="caption">Sample image</p>
		</div>
		<p><strong>(영상 감정 인식 API 호출 예)</strong></p>
		<pre><code>echo &#39;{&quot;access_token&quot;: [USER ACCESS TOKEN], &quot;image&quot;: &quot;&#39;&quot;$(base64 sample.jpg)&quot;&#39;&quot;}&#39; | curl -X POST -d @- &quot;http://keti.asuscomm.com:32222/function/kaist-videorecognition-4&quot;</code></pre>
		<ul>
		<li><p><code>kaist-videorecognition-4</code> 는 객체검출 API의 함수 이름입니다.</p></li>
		<li><p><code>Arguments</code>: 영상 감정 인식 API 호출을 위한 JSON 포맷으로 표현된 인자 값으로, OpenAPI 인증 토큰과 객체검출 대상의 이미지 데이터로 구성됩니다.</p></li>
		<li><p>OpenAPI 인증 토큰(<code>access_token</code>): 디지털 동반자 페이지(추후 링크 게시 예정)에서 발급받은 문자열 타입의 사용자 토큰값</p></li>
		<li><p>이미지 데이터(<code>image</code>): 객체검출 대상의 이미지를 Base64로 인코딩된 문자열</p>
		<blockquote>
		<p><code>&quot;'&quot;$(base64 sample.jpg)&quot;'&quot;</code>: <code>sample.jpg</code>라는 이름의 이미지를 base64 명령어를 사용하여 Base64로 인코딩한 값입니다.</p>
		</blockquote>
		<blockquote>
		<p>Base64는 0~256 사이의 부호없는 정수값(binary 데이터)을 ASCII code로 인코딩(맵핑)하는 방식을 말합니다. 자세한 정보는 <a href="[https://ko.wikipedia.org/wiki/%EB%B2%A0%EC%9D%B4%EC%8A%A464](https://ko.wikipedia.org/wiki/베이스64)">여기</a>를 참조하세요.</p>
		</blockquote>
		<blockquote>
		<p><a href="https://www.base64-image.de/">online page that translate image to base64 (encoding)</a></p>
		</blockquote></li>
		</ul>
		<h3 id="영상-감정-인식-api-반환">영상 감정 인식 API 반환</h3>
		<p>영상 감정 인식 API는 API의 정상작동 여부, 디버깅 메세지, 성별, 나이, 감정 정보를 JSON 포맷으로 반환합니다. 성별, 나이, 감정 정보는 확률값, 속성 정보로 구성됩니다.</p>
		<p><strong>(영상 감정 인식 API 반환결과 예시)</strong></p>
		<pre class="sourceCode json"><code class="sourceCode json">{
			<span class="dt">&quot;result&quot;</span>:{
				<span class="dt">&quot;gender&quot;</span>:{
					<span class="dt">&quot;probability&quot;</span>:<span class="st">&quot;0.52606&quot;</span>,
					<span class="dt">&quot;prediction&quot;</span>:<span class="st">&quot;Female&quot;</span>
				},
				<span class="dt">&quot;age&quot;</span>:{
					<span class="dt">&quot;prediction&quot;</span>:<span class="st">&quot;20&quot;</span>
				},
				<span class="dt">&quot;emotion&quot;</span>:{
					<span class="dt">&quot;probability&quot;</span>:<span class="st">&quot;0.1908229&quot;</span>,
					<span class="dt">&quot;prediction&quot;</span>:<span class="st">&quot;Neutral&quot;</span>
				}
			},
			<span class="dt">&quot;response&quot;</span>:<span class="st">&quot;success&quot;</span>,
			<span class="dt">&quot;dev_msg&quot;</span>:<span class="st">&quot;&quot;</span>
		}</code></pre>
		<ul>
		<li><p>API 정상작동 여부(<code>response</code>): 호출된 객체 API의 상태 정보 확인을 위한 값으로 문자열로 표기됩니다</p></li>
		<li><p>디버깅 메세지(<code>dev_msg</code>): 호출된 객체 API에 대한 디버깅 메세지로 문자열로 표기됩니다.</p></li>
		<li><p>성별, 나이, 감정 정보(<code>result</code>): 정보들이 JSON 포맷으로 표기됩니다.</p></li>
		<li><p>성별 정보(<code>gender</code>)</p>
		<ul>
		<li>예측결과(<code>prediction</code>)</li>
		</ul>
		<p>남성 혹은 여성에 대한 정보로써 Female, Male로 구분됩니다.</p>
		<ul>
		<li>확률값(<code>probability</code>)</li>
		</ul>
		<p>예측결과에 대한 신뢰도를 나타냅니다.</p></li>
		<li><p>나이 정보(<code>age</code>)</p>
		<ul>
		<li>예측결과(<code>prediction</code>)</li>
		</ul>
		<p>0부터 100사이의 값의 예측한 나이값을 나타냅니다.</p></li>
		<li><p>감정 정보(<code>emotion</code>)</p>
		<ul>
		<li>예측결과(<code>prediction</code>)</li>
		</ul>
		<p>감정 정보로써 화(<code>Anger</code>), 역겨움(<code>Disgust</code>), 공포(<code>Fear</code>), 행복(<code>Happiness</code>), 평안함(<code>Neutral</code>), 슬픔(<code>Sadness</code>), 놀람(<code>Surprise</code>)으로 구분됩니다.</p></li>
		</ul>
		`
		const result_container = document.querySelector('.et-result');
		result_container.innerHTML=
		`
		<section class="et-slide" id="tab-es6">
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
			<item class="row-list">
				<br>
				<br>
				<div class="header">
					<div class="title">
						<span class="spacer"></span>
					</div>
				</div>
				<div class="image_url">
					image URL:
					<input type="text" id="img-url">
					<input type="button" onclick="img_url_button_emotion()" value="보내기">
				</div>
				<div class="image_list">
					<div class="crop_image">
						<input type="button" onclick="img_button_emotion(this.id)" id="img1">
					</div>
					<div onclick="crop_image">
						<input type="button" onclick="img_button_emotion(this.id)" id="img2">
					</div>
					<div onclick="crop_image">
						<input type="button" onclick="img_button_emotion(this.id)" id="img3">
					</div>
					<div onclick="crop_image">
						<input type="button" onclick="img_button_emotion(this.id)" id="img4">
					</div>
					<div onclick="crop_image">
						<input type="button" onclick="img_button_emotion(this.id)" id="img4">
					</div>
					<div onclick="crop_image">
						<input type="button" onclick="img_button_emotion(this.id)" id="img4">
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
	}
	else if(clicked_id === "korean-style-transform"){
		const readme = document.querySelector("#readme");
		readme.innerHTML=
		`
		<h1 id="한국어-다중-어체-변환style-transfer-for-korean-language-api란">한국어 다중 어체 변환(Style Transfer for Korean Language) API란?</h1>
		<p>서강대 자연어처리 연구실에서 개발한 OpenAPI이며, 다양한 어체(해요체, 합쇼체, 반말체)의 문장을 입력으로 받아 지정한 어체로 변환해주는 API입니다.</p>
		<h2 id="어체-변환style-transfer-알고리즘이란">어체 변환(Style Transfer) 알고리즘이란?</h2>
		<p>아래 그림과 같이 한국어 문장을 입력으로 받아 지정한 어체의 문장을 생성하는 알고리즘입니다.</p>
		<div class="figure">
		<img src="images/style_transfer.png" alt="Object Detection"  class="readme-image"/><p class="caption">Object Detection</p>
		</div>
		<h2 id="다중-어체-변환-api-사용">다중 어체 변환 API 사용</h2>
		<h3 id="다중-어체-변환-api-호출">다중 어체 변환 API 호출</h3>
		<p>다중 어체 변환 API의 호출은 API를 서비스하는 서버 주소, 입력 문장과 변환 대상 어체 인자 값이 필요하며, API 호출하는 예는 다음과 같습니다.</p>
		<p><strong>(다중 어체 변환 API 호출 예)</strong></p>
		<pre><code>echo &#39;{access_token&quot;: [USER ACCESS TOKEN], &quot;input_text&quot;:&quot;안녕.\n좋은 하루 보내.&quot;, &quot;target_style&quot;:&quot;yo&quot;}&#39; | curl -X POST -d @- &quot;http://keti.asuscomm.com:32222/function/sgu-korean-style-transfer-1&quot;</code></pre>
		<ul>
		<li><p><code>sgu-korean-style-transfer-1</code> 는 다중 어체 변환 API의 함수 이름입니다.</p></li>
		<li><p><code>Arguments</code>: 다중 어체 변환 API 호출을 위한 JSON 포맷으로 표현된 인자 값으로, OpenAPI 인증 토큰과 입력 문장 및 변환 대상 어체 구분자로 구성됩니다.</p></li>
		<li><p>OpenAPI 인증 토큰(<code>access_token</code>): 디지털 동반자 페이지(추후 링크 게시 예정)에서 발급받은 문자열 타입의 사용자 토큰값</p></li>
		<li><p><code>input_text</code>: 어체 변환을 진행하고자 하는 한국어 문장이고 UTF-8 문자열로 인코딩되어야 합니다.</p>
		<blockquote>
		<p>문장간 경계는 줄 바꿈 형태, 즉 &quot;&quot; 형태의 문자열로 입력되어야 합니다.</p>
		</blockquote></li>
		<li><p><code>target_style</code>: 변환 대상 어체를 나타내는 대상 어체 구분자입니다. 현재 다음과 같은 3개 어체 변환을 지원합니다.</p>
		<blockquote>
		<p>&quot;yo&quot;: 해요체 (예: 좋은 하루 보내세요.)</p>
		</blockquote>
		<blockquote>
		<p>&quot;sho&quot;: 합쇼체 (예: 좋은 하루 보내십시오.)</p>
		</blockquote>
		<blockquote>
		<p>&quot;ban&quot;: 반말체 (예: 좋은 하루 보내.)</p>
		</blockquote></li>
		</ul>
		<h3 id="다중-어체-변환-api-반환">다중 어체 변환 API 반환</h3>
		<p>다중 어체 변환 API는 어체 변환 결과를 JSON 포맷으로 반환합니다.</p>
		<p><strong>(다중 어체 변환 API 반환결과 예시)</strong></p>
		<pre class="sourceCode json"><code class="sourceCode json"><span class="er">&quot;</span>{<span class="er">&#39;input_sent&#39;</span>: <span class="er">&#39;안녕.\n좋은</span> <span class="er">하루</span> <span class="er">보내.&#39;</span>, <span class="er">&#39;tranfer_sent&#39;</span>: <span class="er">&#39;안녕하</span><span class="dv">세</span><span class="er">요.\n좋은</span> <span class="er">하루</span> <span class="er">보내</span><span class="dv">세</span><span class="er">요.&#39;</span>}<span class="er">&quot;</span></code></pre>
		<ul>
		<li><p><code>input_sent</code>: 어체 변환을 위한 입력 문장입니다.</p></li>
		<li><p><code>tranfer_sent</code>: 지정한 어체로 변환한 출력 문장입니다.</p></li>
		</ul>
		`
		const result_container = document.querySelector('.et-result');
		result_container.innerHTML=
		`
		<section class="et-slide" id="tab-es6">
			<br>
			<br>
			<br>
			<br>
			<br>
		
			<select id='lang-type'>
				<option value=''>-- 타입 선택 --</option>
				<option value='yo' label='해요체'>해요체</option>
				<option value='sho' label='합쇼체'>합쇼체</option>
				<option value='ban' label='반말체'>반말체</option>
			</select>

			<div class="input-text">
				내용 : &nbsp;
				<input type="text" size=60% id="text-contents">
				&nbsp;
				<input type="button" size=20% onclick=text_contents_send() value="보내기">
				<br>
				<br>
				<br>
				<br>
			</div>
			<div class="input-text">
				결과 : &nbsp;
				<input type="text" size=67% id="result-text-contents">
			</div>


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
	}
	else if(clicked_id === "facial-emotion-expression"){
		const readme = document.querySelector("#readme");
		readme.innerHTML=
		`<h1 id="-api-">감정기반 표정/입 생성 API란?</h1>
<p>본 API는 여섯 가지 감정 세기, 발화 텍스트, 발화 타이밍 정보, 오디오, 성별을 입력으로 받아 애니메이션 시계열 데이터를 xml 형태로 반환해주는 API입니다.</p>
<h2 id="-">감정기반 표정/입 생성 알고리즘이란?</h2>
<p>감정기반 표정/입 생성 알고리즘은 감정 세기, 발화 텍스트, 발화 타이밍 정보, 오디오, 성별을 입력으로 받아 이에 부합하는 표정 및 입모양 애니메이션을 생성하는 알고리즘입니다.</p>
<p><img src="images/animation.jpg" alt="animation"></p>
<h2 id="-api-">감정기반 표정/입 생성 API 사용</h2>
<h3 id="-api-">감정기반 표정/입 생성 API 호출</h3>
<p><strong>(감정기반 표정/입 생성 API 호출 예)</strong></p>
<pre><code><span class="hljs-selector-tag">curl</span> <span class="hljs-selector-tag">-X</span> <span class="hljs-selector-tag">POST</span> <span class="hljs-selector-tag">-d</span> @<span class="hljs-keyword">test_input</span>.<span class="hljs-keyword">json</span> <span class="hljs-string">"http://keti.asuscomm.com:32222/function/kaist-facialemotionexpression-4"</span>
</code></pre><ul>
<li><p><code>kaist-facialemotionexpression-4</code>는 감정기반 표정/입 생성 API 함수 이름입니다.</p>
</li>
<li><p><code>Arguments</code> : 감정기반 표정/입 생성 API  호출을 위한 JSON 포맷으로 표현된 인자값으로, 다음과 같은 데이터로 구성됩니다.</p>
</li>
<li>자소 텍스트 데이터 (<code>sentence_jaso</code>) : 자소 분해된 발화 텍스트. (.txt 파일)  </li>
<li><p>문장 타이밍 데이터 (<code>sentence_neural_timing</code>) : 발화 텍스트의 자소가 발음되는 타이밍 정보를 2D array로 입력 (.npy 파일) </p>
<ol>
<li>문장 오디오 데이터 (<code>sentence_audio_wav</code>) : 발화 텍스트를 음성합성한 오디오 Mono Waveform을 입력 (Sampling Rate: 8000Hz)  </li>
<li>발화자 성별 (<code>speaker_gender</code>) : 화자 음성상의 성별. 성별은 서비스 코드 규약을 따름</li>
<li>감정 세기 (<code>emotion_strength</code>) : 여섯 가지 감정의 표현 강도를 0~1 사이의 float 값으로 입력. 감정은 서비스 코드 규약을 따름</li>
<li>OpenAPI 인증 토큰(<code>access_token</code>): 디지털 동반자 페이지(추후 링크 게시 예정)에서 발급받은 문자열 타입의 사용자 토큰값</li>
</ol>
</li>
<li><p>위 예시에서는 해당 인자값을 json파일의 형태로 넘겨주었습니다.</p>
</li>
</ul>
<h3 id="-api-">감정기반 표정/입 생성 API 반환</h3>
<p><strong>(감정기반 표정/입 생성 API 반환결과 예시)</strong></p>
<pre><code class="lang-xml">&lt;?xml version='<span class="hljs-number">1.0</span>' encoding='utf<span class="hljs-number">-8</span>'?&gt;
&lt;animation name=<span class="hljs-string">"speech_animation"</span>&gt;
    &lt;gender gender=<span class="hljs-string">"30001"</span> /&gt;
    &lt;emotion_strength&gt;
        &lt;emotion emotion=<span class="hljs-string">"10001"</span> strength=<span class="hljs-string">"0.0"</span> /&gt;
        &lt;emotion emotion=<span class="hljs-string">"10002"</span> strength=<span class="hljs-string">"0.0"</span> /&gt;
        &lt;emotion emotion=<span class="hljs-string">"10003"</span> strength=<span class="hljs-string">"0.0"</span> /&gt;
        &lt;emotion emotion=<span class="hljs-string">"10004"</span> strength=<span class="hljs-string">"0.0"</span> /&gt;
        &lt;emotion emotion=<span class="hljs-string">"10006"</span> strength=<span class="hljs-string">"0.0"</span> /&gt;
        &lt;emotion emotion=<span class="hljs-string">"10007"</span> strength=<span class="hljs-string">"0.0"</span> /&gt;
    &lt;/emotion_strength&gt;
    &lt;keyframeList&gt;
        &lt;<span class="hljs-type">key</span> t=<span class="hljs-string">"0"</span>&gt;
            &lt;faceWeights&gt;<span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.09830531626939774</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.04093131199479103</span> <span class="hljs-number">0.04783490635454655</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.016355020459741354</span> <span class="hljs-number">0.026090694405138493</span> <span class="hljs-number">0.3506091356277466</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0021135821240022778</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.06582734845578671</span> <span class="hljs-number">0.0019327396992594005</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> &lt;/faceWeights&gt;
            &lt;headNodding&gt;<span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span>&lt;/headNodding&gt;
        &lt;/<span class="hljs-type">key</span>&gt;
        &lt;<span class="hljs-type">key</span> t=<span class="hljs-string">"16"</span>&gt;
            &lt;faceWeights&gt;<span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.09168437399466833</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0401184633076191</span> <span class="hljs-number">0.0545315214941899</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.022166436390330394</span> <span class="hljs-number">0.029274863816797735</span> <span class="hljs-number">0.3351881329218547</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.00566092517444243</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.06883076515297096</span> <span class="hljs-number">0.0025445876015971107</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> &lt;/faceWeights&gt;
            &lt;headNodding&gt;<span class="hljs-number">0.007410287426558869</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span>&lt;/headNodding&gt;
        &lt;/<span class="hljs-type">key</span>&gt;
        &lt;<span class="hljs-type">key</span> t=<span class="hljs-string">"32"</span>&gt;
            &lt;faceWeights&gt;<span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.08506343171993892</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.03930561462044716</span> <span class="hljs-number">0.06122813663383325</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.027977852320919434</span> <span class="hljs-number">0.032459033228456974</span> <span class="hljs-number">0.31976713021596276</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.009208268224882583</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0718341818501552</span> <span class="hljs-number">0.003156435503934821</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span> &lt;/faceWeights&gt;
            &lt;headNodding&gt;<span class="hljs-number">0.014820574853117737</span> <span class="hljs-number">0.0</span> <span class="hljs-number">0.0</span>&lt;/headNodding&gt;
        &lt;/<span class="hljs-type">key</span>&gt;
        ...(이하 <span class="hljs-type">key</span> 값 생략)...
    &lt;/keyframeList&gt;
&lt;/animation&gt;
</code></pre>
<ul>
<li>애니메이션 데이터 (<code>animation</code>) : 전체 애니메이션 데이터를 포함하는 요소입니다.<ul>
<li>성별 (<code>gender</code>) : 성별 정보를 담고 있습니다.</li>
<li>감정 세기 (<code>emotion_strength</code>) : 여섯 가지 감정의 세기를 나타냅니다.<ul>
<li>감정 (<code>emotion</code>) : 각 감정별 세기를 담고 있습니다.</li>
</ul>
</li>
<li>애니메이션 데이터 (<code>keyframeList</code>) : 키프레임 애니메이션의 키값을 포함하고 있습니다. <ul>
<li>키(<code>key</code>)  : 프레임 별 블렌드쉐입 데이터와 고개 끄덕임 값을 포함하고 있습니다.<ul>
<li>블렌드쉐입 값(<code>faceWeights</code>)  : 블렌드쉐입 데이터를 포함하고 있습니다.</li>
<li>고개 끄덕임 값(<code>headNodding</code>)  : 고개 끄덕임 데이터를 포함하고 있습니다.</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<ul>
<li>결과 예시<ul>
<li>감정기반 표정/입 생성 API 반환 결과, 애니메이션 시계열 데이터(xml)가 생성됩니다. 
이는 3D 애니메이션 소프트웨어나 렌더링 기능이 갖춰진 모바일, 웹 등에서 활용될 수 있으며, 
아래 이미지는 안드로이드 모바일에서 렌더한 결과 예시입니다. </li>
</ul>
</li>
</ul>
<h3 id="-animation-images-animation-jpg-"><img src="images/animation.jpg" alt="animation"></h3>
`
		const result_container = document.querySelector('.et-result');
		result_container.innerHTML=
		`
		<section class="et-slide" id="tab-es6">
			<br>
			<br>
			<br>
			<h1>준비중</h1>
			<br>
			<br>
			<div class="header">
			<div class="title">
				<span class="spacer"></span>
			</div>
			</div>
		
		</section>
		`
	}
	else if(clicked_id === "multi-captioning"){
		const readme = document.querySelector("#readme");
		readme.innerHTML=
		`<h1 id="-multiple-image-captioning-api-">다중캡션생성(Multiple Image Captioning) API란?</h1>
		<p>전자부품연구원에서 제공하는 OpenAPI이며, 이미지를 입력으로 다중캡션생성 알고리즘이 이미지에 대한 다양한 한국어 설명 문장을 반환해주는  API입니다.</p>
		<h2 id="-multiple-image-captioning-">다중캡션생성(Multiple Image Captioning) 알고리즘이란?</h2>
		<p>다중캡션생성 알고리즘은 입력된 이미지를 분석하여 다양한 표현을 포함하는 한국어 문장을 생성하는 알고리즘입니다. 랜덤 샘플링을 통해 캡션을 생성하기 때문에 실행시마다 생성되는 문장이 이전에 나온 문장과 같거나 다를 수 있습니다. 아래 예시는 다중캡션생성 API를 여러 번 호출하여 다양한 설명 문장을 생성한 것입니다.</p>
		<p><strong>(다양한 캡션 생성 예)</strong></p>
		<p><img src="images/multi-captioning-result.jpg" alt="MIC algorithm"></p>
		<h2 id="-api-">다중캡션생성 API 사용</h2>
		<h3 id="-api-">다중캡션생성 API 호출</h3>
		<p>다중캡션생성 API의 호출은 API를 서비스하는 서버 주소와  캡션생성을 위한 인자 값이 필요하며, 샘플 이미지를 활용하여 API 호출하는 예는 다음과 같습니다.</p>
		<p><strong>(샘플 이미지 - sample_image.png)</strong></p>
		<p><img src="images/multi-captioning-input.jpg" alt="Sample Image"></p>
		<p><strong>(다중캡션생성 API 호출 예)</strong></p>
		<pre><code>echo <span class="hljs-string">'{"</span>access_token<span class="hljs-string">": "</span>[USER ACCESS TOKEN]<span class="hljs-string">", "</span>image<span class="hljs-string">": "</span><span class="hljs-string">'"</span>$(base64 sample_image.png)<span class="hljs-string">"'</span><span class="hljs-string">"}'</span> | curl -X POST -d @- <span class="hljs-string">"http://keti.asuscomm.com:32222/function/keti-multicaptioning-1"</span>
		</code></pre><ul>
		<li><p><code>1-keti-multicaptioning</code> 는 다중캡션생성 API의 함수 이름입니다.</p>
		</li>
		<li><p><code>Arguments</code>: 다중캡션생성 API 호출을 위한 JSON 포맷으로 표현된 인자 값으로, OpenAPI 인증 토큰과 다중캡션생성 대상의 이미지 데이터로 구성됩니다.</p>
		<ul>
		<li><p>OpenAPI 인증 토큰(<code>access_token</code>): 디지털 동반자 페이지(추후 링크 게시 예정)에서 발급받은 문자열 타입의 사용자 토큰값</p>
		</li>
		<li><p>이미지 데이터(<code>image</code>): 입력 이미지를 Base64로 인코딩한 문자열</p>
		<blockquote>
		<p><code>&quot;&#39;&quot;$(base64 sample_image.png)&quot;&#39;&quot;</code>:  <code>sample_image.png</code>라는 이름의 이미지를 base64 명령어를 사용하여 Base64로 인코딩한 값입니다.</p>
		<p>Base64는 0~256 사이의 부호없는 정수값(binary 데이터)을 ASCII code로 인코딩(맵핑)하는 방식을 말합니다.  자세한 정보는 <a href="[https://ko.wikipedia.org/wiki/%EB%B2%A0%EC%9D%B4%EC%8A%A464](https://ko.wikipedia.org/wiki/베이스64">여기</a>)를 참조하세요. </p>
		<p><a href="https://www.base64-image.de/">online page that translate image to base64 (encoding)</a></p>
		</blockquote>
		</li>
        </ul>/style

		</li>
		</ul>
		<h3 id="-api-">다중캡션생성 API 반환</h3>
		<p>다중캡션생성 API는 생성된 한국어 문장을 반환합니다.  </p>
		<p>​    </p>
		<p><strong>(다중캡션생성 API 반환결과 예시)</strong></p>
		<pre><code class="lang-json">{<span class="hljs-attr">"result"</span>: <span class="hljs-string">" 한 남자가 비디오 게임을 하고 있다"</span>}
		{<span class="hljs-attr">"result"</span>: <span class="hljs-string">" 한 남자가 소파에 앉아 있다"</span>}
		{<span class="hljs-attr">"result"</span>: <span class="hljs-string">" 한 무리의 사람들"</span>}
		{<span class="hljs-attr">"result"</span>: <span class="hljs-string">" 한 남자가 그의 친구들과 함께 비디오 게임을 하고 있다"</span>}
		</code></pre>
		<ul>
		<li>설명문장(<code>result</code>): 이미지로부터 생성된 캡션이 문자열로 반환됩니다.</li>
		</ul>
		`
		const result_container = document.querySelector('.et-result');
		result_container.innerHTML=
		`
		<section class="et-slide" id="tab-es6">
			<br>
			<!-- <h3>something about flexbox</h3> -->
			<item class="row items">
				<div class="column preview">
				<div class="demo-img-container">
					<img src="images/multi-captioning-input.jpg" class="image" id="image"/>
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
			<item class="row-list">
				<br>
				<br>
				<div class="header">
					<div class="title">
						<span class="spacer"></span>
					</div>
				</div>
				<div class="image_url">
					image URL:
					<input type="text" id="img-url">
					<input type="button" onclick="img_url_button_multi_caption()" value="보내기">
				</div>
				<div class="image_list">
					<div class="crop_image">
						<input type="button" onclick="img_button_caption(this.id)" id="caption-sample">
					</div>
					<div onclick="crop_image">
						<input type="button" onclick="img_button_caption(this.id)" id="img4">
					</div>
					<div onclick="crop_image">
						<input type="button" onclick="img_button_caption(this.id)" id="img4">
					</div>
					<div onclick="crop_image">
						<input type="button" onclick="img_button_caption(this.id)" id="img4">
					</div>
					<div onclick="crop_image">
						<input type="button" onclick="img_button_caption(this.id)" id="img4">
					</div>
					<div onclick="crop_image">
						<input type="button" onclick="img_button_caption(this.id)" id="img4">
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
	}
	else if(clicked_id === "intent-classifier"){
		const readme = document.querySelector("#readme");
		readme.innerHTML=
		`<h1 id="-intent-classifier-api-">대화 의도 분류기(Intent Classifier) API란?</h1>
		<p>전자부품연구원에서 제공하는 OpenAPI이며, 발화를 입력으로 발화 의도 분석 알고리즘이 예측한 의도 분류 결과를 반환해주는 API입니다.</p>
		<h2 id="-intent-classifier-">대화 의도 분류(Intent Classifier) 알고리즘이란?</h2>
		<p>입력으로 주어진 발화에 대해서 (1) 도메인 분류, (2) 의도 분류, (3) 세부의도 분류, (4)감성 분류를 수행하는 알고리즘입니다.</p>
		<h2 id="-api-">대화 의도 분류기 API 사용</h2>
		<p>대화 의도 분류기 API 호출은 API를 서비스하는 서버 주소와 포트 번호, 의도 분류를 위한 인자 값이 필요하며, 샘플 발화를 활용하여 API 호출하는 예는 다음과 같습니다.</p>
		<p>(샘플 발화 “안녕하세요”로 대화 의도 분류기 API 호출한 예)</p>
		<ul>
		<li><p><strong>keti-intentclassifier- 1</strong> 는 대화 의도 분류기 API의 함수 이름입니다.</p>
		</li>
		<li><p><strong>Arguments</strong> 는 대화 의도 분류기 API 호출을 위한 JSON포맷으로 포현된
		인자값으로, OpenAPI 인증 토큰(access_token)과 의도 분류 대상의 발화(text)로
		구성됩니다.</p>
		</li>
		</ul>
		<h3 id="-api-">대화 의도 분류기 API 반환</h3>
		<p>대화 의도 분류기 API는 예측된 도메인, 의도, 세부의도, 감성 결과 및 각 도메인/의도/세부의도/감성 클래스에 대한 확률을 JSON 포맷으로 반환합니다. 도메인이 일상대화(daily)로 예측된 경우에는 의도, 세부의도, 감성에 대한 예측 결과 및 클래스 별 확률이 존재하지 않습니다.
		<strong>(대화 의도 분류기 API 반환결과 예시)</strong></p>
		<pre><code>echo '{<span class="hljs-string">"access_token"</span>: <span class="hljs-string">"[USER ACCESS TOKEN]"</span>, <span class="hljs-string">"utterances"</span>: <span class="hljs-string">"안녕하세요"</span>}' <span class="hljs-string">| curl -X POST -d @- "</span>http:<span class="hljs-comment">//keti.asuscomm.com:32222/function/keti-intentclassifier-1"</span>
		</code></pre><p><strong>도메인(domain)이 daily일 경우</strong></p>
		<pre><code>{<span class="hljs-attr">"domain"</span>:
			{<span class="hljs-attr">"prob"</span>:
				{<span class="hljs-attr">"NaN"</span>: <span class="hljs-number">0.005127232056111097</span>,
				<span class="hljs-attr">"&lt;unk&gt;"</span>: <span class="hljs-number">0.00038092792965471745</span>,
				<span class="hljs-attr">"email"</span>: <span class="hljs-number">0.010443978011608124</span>,
				<span class="hljs-attr">"meeting"</span>: <span class="hljs-number">0.001560552278533578</span>,
				<span class="hljs-attr">"schedule"</span>: <span class="hljs-number">0.0028288124594837427</span>,
				<span class="hljs-attr">"general"</span>: <span class="hljs-number">0.00011003678082488477</span>,
				<span class="hljs-attr">"daily"</span>: <span class="hljs-number">0.</span>
				},
			<span class="hljs-attr">"result"</span>: <span class="hljs-string">"daily"</span>
			}
		}
		</code></pre><p><strong>도메인이 daily가 아닌 경우</strong></p>
		<pre><code>{<span class="hljs-attr">"intent"</span>:
			{<span class="hljs-attr">"prob"</span>:
				{<span class="hljs-attr">"NaN"</span>: <span class="hljs-number">0.013674503192305565</span>,
				<span class="hljs-attr">"schedule-send"</span>: <span class="hljs-number">2.4518584385013753</span>e- <span class="hljs-number">10</span> ,
				<span class="hljs-attr">"check"</span>: <span class="hljs-number">5.835170541201862</span>e- <span class="hljs-number">11</span> ,
				<span class="hljs-attr">"add"</span>: <span class="hljs-number">7.083701802912401</span>e- <span class="hljs-number">06</span> ,
				<span class="hljs-attr">"general"</span>: <span class="hljs-number">0.0008977550314739347</span>,
				<span class="hljs-attr">"search"</span>: <span class="hljs-number">4.638402060663793</span>e- <span class="hljs-number">06</span> ,
				<span class="hljs-attr">"&lt;unk&gt;"</span>: <span class="hljs-number">7.1045489491439184</span>e- <span class="hljs-number">09</span> ,
				<span class="hljs-attr">"update"</span>: <span class="hljs-number">3.0066780709603336</span>e- <span class="hljs-number">07</span> ,
				<span class="hljs-attr">"goback"</span>: <span class="hljs-number">2.9041357763048836</span>e- <span class="hljs-number">08</span> ,
				<span class="hljs-attr">"introduce"</span>: <span class="hljs-number">0.9854063987731934</span>,
				<span class="hljs-attr">"attend"</span>: <span class="hljs-number">2.6088611093655345</span>e- <span class="hljs-number">07</span> ,
				<span class="hljs-attr">"schedule"</span>: <span class="hljs-number">8.225290002883412</span>e- <span class="hljs-number">06</span> ,
				<span class="hljs-attr">"read"</span>: <span class="hljs-number">7.652819817849377</span>e- <span class="hljs-number">07</span>
				},
			<span class="hljs-attr">"result"</span>: <span class="hljs-string">"introduce"</span>
		},
		<span class="hljs-attr">"domain"</span>:
			{<span class="hljs-attr">"prob"</span>:
				{<span class="hljs-attr">"NaN"</span>: <span class="hljs-number">0.00016537356714252383</span>,
				<span class="hljs-attr">""</span>: <span class="hljs-number">4.6696757749487006</span>e- <span class="hljs-number">07</span> ,
				<span class="hljs-attr">"email"</span>: <span class="hljs-number">6.13444797181728</span>e- <span class="hljs-number">08</span> ,
				<span class="hljs-attr">"meeting"</span>: <span class="hljs-number">0.9853093028068542</span>,
				<span class="hljs-attr">"schedule"</span>: <span class="hljs-number">4.415965304360725</span>e- <span class="hljs-number">05</span> ,
				<span class="hljs-attr">"general"</span>: <span class="hljs-number">0.014331428334116936</span>,
				<span class="hljs-attr">"daily"</span>: <span class="hljs-number">0.</span>
				},
			<span class="hljs-attr">"result"</span>: <span class="hljs-string">"meeting"</span>
			},
		<span class="hljs-attr">"stance"</span>:
			{<span class="hljs-attr">"prob"</span>:
				{<span class="hljs-attr">"NaN"</span>: <span class="hljs-number">0.0007474352605640888</span>,
				<span class="hljs-attr">""</span>: <span class="hljs-number">2.6078110781924124</span>e- <span class="hljs-number">09</span> ,
				<span class="hljs-attr">"neutral"</span>: <span class="hljs-number">0.9992493987083435</span>,
				<span class="hljs-attr">"negative"</span>: <span class="hljs-number">2.629716999713594</span>e- <span class="hljs-number">10</span> ,
				<span class="hljs-attr">"positive"</span>: <span class="hljs-number">3.159943389619002</span>e- <span class="hljs-number">06</span>
				},
			<span class="hljs-attr">"result"</span>: <span class="hljs-string">"neutral"</span>
			},
		<span class="hljs-attr">"sub_intent"</span>:
			{<span class="hljs-attr">"prob"</span>:
				{<span class="hljs-attr">"NaN"</span>: <span class="hljs-number">0.01458403468132019</span>,
				<span class="hljs-attr">"person-intro"</span>: <span class="hljs-number">2.294702028393658</span>e- <span class="hljs-number">08</span> ,
				<span class="hljs-attr">"schedule-send-req"</span>: <span class="hljs-number">3.587844912544824</span>e- <span class="hljs-number">05</span> ,
				<span class="hljs-attr">"slot-req"</span>: <span class="hljs-number">0.000</span> <span class="hljs-number">12601999333128333</span> ,
				<span class="hljs-attr">"search-req"</span>: <span class="hljs-number">0.002504210453480482</span>,
				<span class="hljs-attr">"attend-req"</span>: <span class="hljs-number">3.48492139892187</span>e- <span class="hljs-number">05</span> ,
				<span class="hljs-attr">"read"</span>: <span class="hljs-number">2.699366450542584</span>e- <span class="hljs-number">05</span> ,
				<span class="hljs-attr">"transfer"</span>: <span class="hljs-number">0.0017064159037545323</span>,
				<span class="hljs-attr">"attend-info"</span>: <span class="hljs-number">3.4386329161861795</span>e- <span class="hljs-number">07</span> ,
				<span class="hljs-attr">"event-intro"</span>: <span class="hljs-number">2.2785757209931035</span>e- <span class="hljs-number">06</span> ,
				<span class="hljs-attr">""</span>: <span class="hljs-number">4.452755092643201</span>e- <span class="hljs-number">06</span> ,
				<span class="hljs-attr">"stop-req"</span>: <span class="hljs-number">0.007828931324183941</span>,
				<span class="hljs-attr">"update-req"</span>: <span class="hljs-number">2.2806389097240753</span>e- <span class="hljs-number">06</span> ,
				<span class="hljs-attr">"unknown"</span>: <span class="hljs-number">1.1585454558371566</span>e- <span class="hljs-number">05</span> ,
				<span class="hljs-attr">"start-intro"</span>: <span class="hljs-number">0.5655540227890015</span>,
				<span class="hljs-attr">"attend"</span>: <span class="hljs-number">0.0001081321170204319</span>,
				<span class="hljs-attr">"check-comp"</span>: <span class="hljs-number">3.617691982071847</span>e- <span class="hljs-number">05</span> ,
				<span class="hljs-attr">"attend-comp"</span>: <span class="hljs-number">0.0004943381645716727</span>,
				<span class="hljs-attr">"add-comp"</span>: <span class="hljs-number">4.400436228024773</span>e- <span class="hljs-number">05</span> ,
				<span class="hljs-attr">"end-intro"</span>: <span class="hljs-number">0.022601047530770302</span>,
				<span class="hljs-attr">"add-req"</span>: <span class="hljs-number">0.00020386929099913687</span>,
				<span class="hljs-attr">"read-comp"</span>: <span class="hljs-number">9.695208063931204</span>e- <span class="hljs-number">06</span> ,
				<span class="hljs-attr">"check"</span>: <span class="hljs-number">2.6137081832189324</span>e- <span class="hljs-number">08</span> ,
				<span class="hljs-attr">"state-intro"</span>: <span class="hljs-number">3.6362955597724067</span>e- <span class="hljs-number">06</span> ,
				<span class="hljs-attr">"update-comp"</span>: <span class="hljs-number">0.000218518209294416</span>,
				<span class="hljs-attr">"start-req"</span>: <span class="hljs-number">0.37695401906967163</span>,
				<span class="hljs-attr">"add"</span>: <span class="hljs-number">2.2213407646631822</span>e- <span class="hljs-number">05</span> ,
				<span class="hljs-attr">"check-req"</span>: <span class="hljs-number">8.662734217068646</span>e- <span class="hljs-number">06</span> ,
				<span class="hljs-attr">"update"</span>: <span class="hljs-number">2.986296863127791</span>e- <span class="hljs-number">07</span> ,
				<span class="hljs-attr">"schedule-send"</span>: <span class="hljs-number">0.00252335</span> <span class="hljs-number">30905097723</span> ,
				<span class="hljs-attr">"search-comp"</span>: <span class="hljs-number">1.156705593530205</span>e- <span class="hljs-number">06</span> ,
				<span class="hljs-attr">"attend-check"</span>: <span class="hljs-number">0.00011928783351322636</span>,
				<span class="hljs-attr">"read-req"</span>: <span class="hljs-number">1.3437650068226503</span>e- <span class="hljs-number">06</span> ,
				<span class="hljs-attr">"greeting"</span>: <span class="hljs-number">0.0017405101098120213</span>,
				<span class="hljs-attr">"schedule-send-comp"</span>: <span class="hljs-number">0.</span>
				},
			<span class="hljs-attr">"result"</span>: <span class="hljs-string">"start-intro"</span>
			}
		}
		</code></pre><ul>
		<li>의도 분류 결과( <strong>intent</strong> ): 각 의도 클래스 별 확률( <strong>prob</strong> )이 숫자로, 그중 최대 확률을
		보인 클래스( <strong>result</strong> )가 문자열로 표기됩니다. (클래스 정보는 Reference 1 참조)</li>
		<li><p>도메인 분류 결과( <strong>domain</strong> ): 각 도메인 클래스 별 확률( <strong>prob</strong> )이 숫자로, 그중 최대
		확률을 보인 클래스( <strong>result</strong> )가 문자열로 표기됩니다. (클래스 정보는 Reference 2
		참조)</p>
		</li>
		<li><p>감성 분류 결과( <strong>stance</strong> ): 각 감성 클래스 별 확률( <strong>prob</strong> )이 숫자로, 그중 최대 확률을
		보인 클래스( <strong>result</strong> )가 문자열로 표기됩니다. (클래스 정보는 Reference 3 참조)</p>
		</li>
		<li><p>세부의도 분류 결과( <strong>sub_intent</strong> ): 각 세부의도 클래스 별 확률( <strong>prob</strong> )이 숫자로, 그중
		최대 확률을 보인 클래스( <strong>result</strong> )가 문자열로 표기됩니다. (클래스 정보는 Reference
		4 참조)</p>
		</li>
		</ul>
		<h2 id="reference">Reference</h2>
		<h5 id="1-api-">1. 대화 의도 분류기 API의 의도 클래스 정보</h5>
		<p>대화 의도 분류기 API는 총 11 가지 종류의 도메인 클래스를 제공합니다.</p>
		<pre><code>read, <span class="hljs-keyword">check</span>, <span class="hljs-keyword">general</span>, <span class="hljs-keyword">add</span>, schedule-send, introduce, attend, <span class="hljs-keyword">update</span>, schedule, <span class="hljs-keyword">search</span>,
		goback
		</code></pre><h5 id="2-api-">2. 대화 의도 분류기 API의 도메인 클래스 정보</h5>
		<p>대화 의도 분류기 API는 총 5 가지 종류의 의도 클래스를 제공합니다.</p>
		<pre><code><span class="hljs-section">email</span>, schedule, general, meeting, daily
		</code></pre><h5 id="3-api-">3. 대화 의도 분류기 API의 감성 클래스 정보</h5>
		<p>대화 의도 분류기 총 3 가지 종류의 감성 클래스를 제공합니다.</p>
		<pre><code><span class="hljs-keyword">positive</span>, <span class="hljs-keyword">negative</span>, neutral
		</code></pre><h5 id="4-api-">4. 대화 의도 분류기 API의 세부의도 클래스 정보</h5>
		<p>대화 의도 분류기 API는 총 33 가지 종류의 세부의도 클래스를 제공합니다.</p>
		<pre><code>check-req, check, check-<span class="hljs-keyword">comp</span>, <span class="hljs-keyword">read</span>-req, <span class="hljs-keyword">read</span>, <span class="hljs-keyword">read</span>-<span class="hljs-keyword">comp</span>,
		schedule-send-req, schedule-send, schedule-send-<span class="hljs-keyword">comp</span>, <span class="hljs-built_in">add</span>-req, <span class="hljs-built_in">add</span>, <span class="hljs-built_in">add</span>-<span class="hljs-keyword">comp</span>,
		<span class="hljs-keyword">update</span>-req, <span class="hljs-keyword">update</span>, <span class="hljs-keyword">update</span>-<span class="hljs-keyword">comp</span>, <span class="hljs-keyword">delete</span>-req, <span class="hljs-keyword">delete</span>, <span class="hljs-keyword">delete</span>-<span class="hljs-keyword">comp</span>, <span class="hljs-keyword">stop</span>-req, snack-
		<span class="hljs-keyword">intro</span>, slot-req, question, greeting, start-req, answer, standby, event-<span class="hljs-keyword">intro</span>, start-<span class="hljs-keyword">intro</span>,
		transfer, person-<span class="hljs-keyword">intro</span>, end-<span class="hljs-keyword">intro</span>, greeting, unknown, state-<span class="hljs-keyword">intro</span>, <span class="hljs-built_in">search</span>-req, <span class="hljs-built_in">search</span>-
		<span class="hljs-keyword">comp</span>, attend-req, attend, attend-<span class="hljs-keyword">comp</span>, attend-check, attend-info, discuss
		</code></pre>`;

		const result_container = document.querySelector('.et-result');
		result_container.innerHTML=
		`
		<section class="et-slide" id="tab-es6">
			<br>
			<br>
			<br>

			<div class="input-text">
				내용 : &nbsp;
				<input type="text" id="input-text-contents">
				<!-- <input type="text" size=60% id="input-text-contents"> -->
				&nbsp;
				<input type="button" size=20% onclick=send_intents_classifier() value="보내기">
				<br>
				<br>
				<br>
				<br>
			</div>
			<div class="input-text">
                결과 : &nbsp;
                <textarea id="result-text-area"></textarea>
			</div>
			<br>
			<br>
			<div class="header">
			<div class="title">
				<span class="spacer"></span>
			</div>
			</div>
		
		</section>
		`
	}
	// else if(clicked_id === "facial-emotion-expression"){
	// 	const readme = document.querySelector("#readme");
	// 	readme.innerHTML=
	// 	``
	// }
	else{
		const readme = document.querySelector("#readme");
		readme.innerHTML=`<h1>준 비 중</h1>`;

	}

	window.scrollTo(0,0);
}
