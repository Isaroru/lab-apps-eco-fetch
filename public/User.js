class User {
    constructor(app) {
        this.app = app;
        this.user = {};
        this.info;
        /*this.gender = undefined
        this.name = undefined
        this.location = undefined;*/
    }

    getUserInfo() {
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            const info = data.results[0];
            this.user = {
                firstName: info.name.first,
                lastName: info.name.last,
                gender: info.gender,
                age: info.dob.age,
                city: info.location.city,
                country: info.location.country,
            }
            console.log(this.user)
        });
    }

    drawInfo(){
        //this.getCharInfo()
        textSize(100);
        fill(254,204,47);
        text('RANDOM USER', 350, 300);
        textSize(50);
        fill(255);
        text('Name: ' + this.user.firstName + ' ' + this.user.lastName || "", 350, 500)
        text('Gender: ' + this.user.gender || "", 350, 570)
        text('Age: ' + this.user.age || "", 350, 630)
        text('Location: ' + this.user.city + ', ' + this.user.country || "", 350, 690)
    }
}