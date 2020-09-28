// echo '{"access_token": "", "image": "'"$(base64 sample_image.png)"'"}' | curl -X POST -d @- "http://keti.asuscomm.com:32222/function/imagestress"

function uploadImgPreview(){
    const toDataURL = url => fetch(url)
        .then(response => response.blob())
        .then(blob => new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.onerror = reject
            reader.readAsDataURL(blob)
        }))

    toDataURL('items/sample_image.png')
    .then(dataUrl => {
        console.log('RESULT:', dataUrl.split(',')[1])
    })
}
