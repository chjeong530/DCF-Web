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