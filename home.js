var image1 = document.getElementById('image1')
var image2 = document.getElementById('image2')

function fadesimages(){
  if (image1.classList.contains('show')){
    image1.classList.remove('show')
    image2.classList.add('show')
  }
  else{
    image2.classList.remove('show')
    image1.classList.add('show')
  }
}

setinterval(fadesimages, 2000)