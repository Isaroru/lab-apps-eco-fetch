class DogImg {
    constructor(app) {
        this.app = app;
        this.link = null;
    }

    getImgURL() {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            this.link = loadImage(data.message);
        });
    }

    drawImg(){
        textSize(100);
        fill(178,194,37);
        text('RANDOM DOG', 350, 300);
        if(this.link != null){
            fill(255);
            image(this.link, 400, 500);
        }
    }

}