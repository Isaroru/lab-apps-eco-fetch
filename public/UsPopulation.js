class UsPopulation {
    constructor(app) {
        this.app = app;
        this.usPopulation = null;
        this.usPYear;
    }

    getInfo() {
        fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        .then(res => res.json())
        .then(data => {
            this.usPopulation = data.data;
            console.log(this.usPopulation)
        });
    }

    drawInfo(){
        textSize(100);
        fill(92,224,217);
        text('US POPULATION', 350, 300);
        if(this.usPopulation != null){
            fill(255);
            textSize(50);
            text('Year: ' + this.usPopulation[0].Year +'     Population: ' + this.usPopulation[0].Population, 350, 500);
            text('Year: ' + this.usPopulation[1].Year +'     Population: ' + this.usPopulation[1].Population, 350, 565);
            text('Year: ' + this.usPopulation[2].Year +'     Population: ' + this.usPopulation[2].Population, 350, 630);
        }
    }

}