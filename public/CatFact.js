class CatFact {
    constructor(app) {
        this.app = app;
        this.catFact = null;
    }

    getFact() {
        fetch('https://catfact.ninja/fact')
        .then(res => res.json())
        .then(data => {
            this.catFact = data
            console.log(this.catFact.fact)
        });
    }

    drawInfo(){
        textSize(100);
        fill(163,99,217);
        text('RANDOM CAT FACT', 350, 300);
        if(this.catFact != null){
            fill(255);
            textSize(50);
            textWrap(WORD);
            text(this.catFact.fact, 400, 500, 900);
        }
    }

}