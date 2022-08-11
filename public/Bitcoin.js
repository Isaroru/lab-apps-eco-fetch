class Bitcoin {
    constructor(app) {
        this.app = app;
        this.bitc = undefined;
        this.eurPrice = 0;
        this.gbpPrice = 0;
        this.usdPrice = 0;
    }

    getPrice() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json())
        .then(data => {
            console.log(data.bpi);
            this.bitc = data.bpi
            this.eurPrice = this.bitc.EUR.rate;
            this.gbpPrice = this.bitc.GBP.rate;
            this.usdPrice = this.bitc.USD.rate;
        });
    }

    drawInfo(){
        textSize(100);
        fill(249,162,40);
        text('BITCOIN VALUE', 350, 300);
        if(this.bitc != null){
            textSize(50);
            fill(255);
            textWrap(WORD);
            text('EUR: ' + this.eurPrice, 500, 500)
            text('GBP: ' + this.gbpPrice, 500, 565)
            text('USD: ' + this.usdPrice, 500, 630)
        }
    }

}