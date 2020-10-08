
$('.tab_menu_btn').on('click',function(){
  //버튼 색 제거,추가
  $('.tab_menu_btn').removeClass('on');
  $(this).addClass('on')
  
  //컨텐츠 제거 후 인덱스에 맞는 컨텐츠 노출
  var idx = $('.tab_menu_btn').index(this);
  
  $('.tab_box').hide();
  $('.tab_box').eq(idx).show();
});

function run(){
  const toDataURL = url => fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    }))


  const url = 'items/sample_image.png';
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
    const response = fetch("http://keti.asuscomm.com:32222/function/yonsei-imagestressrecognition-5", {
      method: 'POST',
      body: JSON.stringify(body_data), // string or object
    })
    .then((res) => {
      console.log(res.json())
    }
    )
    // do something with myJson
  });
}