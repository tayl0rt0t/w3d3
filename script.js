class Governor{
    static props (corrupt, indifferent, altruistic){
        this.corrupt = corrupt;
        this.indifferent = indifferent;
        this.altruistic = altruistic
        console.log(`Today I ${this.corrupt}, then I heard about ${this.indifferent} to which I felt indiffernt. Then I ${this.altruistic} so that I could tell myself what a great person I am!`)
    }
    static signBill(bill){
        console.log(`I NOW SIGN ${bill} INTO LAW! EFFECTIVE IMMEDIATELY!`)
    }
}
Governor.props('took bribes','LGBT+ struggles','donated to charity(for tax purposes)');
Governor.signBill('TYRANNY');
/*
Think of three properties all people share, set them with the constructor
Think of three methods all people share
Create a PostalWorker class that inherits from person, add some methods
Create a Chef class that inherits from person, add some methods
Create 2 PostalWorkers and 2 Chefs, log them and test all their methods

*/
class Person{
    constructor(hopes,dreams,food){
        this.hopes = hopes,
        this.dreams = dreams,
        this.food = food
    }
    sleep(){
        console.log(`Wake me up before you go go because I'm dreaming of ${this.dreams}`);
    }
    eat(){
        console.log(`Dorsia, how impressive! I love their ${this.food}`)
    }
    occasionallyCry(){
        console.log(`hello darkness, my old friend, I hope ${this.hopes}`)
    }
}
class PostalWorker extends Person{
    driveSlowly(){
        console.log(`This vehicle makes frequent stops`)
    }
    shuffleLetters(){
        console.log(`wait a minute, did I put that in the wrong box again?`)
    }
    againWithTheDogs(){
        console.log('at least I can outrun that chihuahua...')
    }
}
class Chef extends Person{
    rankIsImportant(){
        console.log(`Alright how about a "Yes, Chef"? Keep it up, buddy, and I'll put you on Garde Manger next week.`)
    }
    orders(){
        console.log(`Fire those porterhouses, I want them on the pass with the frisée at the same time. What are you looking at? That means NOW!`)
    }
    smokeBreak(){
        console.log(`Just 10 more hours, I can do this, I've done it before...`)
    }
}
const mrPostman = new PostalWorker();
const ludoLefebvre = new Chef();
const Letterman = new PostalWorker('things get better','mail','great Sea Urchin Ceviche');
console.log("-----PostalWorker Methods Test-----")
Letterman.sleep();
Letterman.eat();
Letterman.occasionallyCry();
Letterman.againWithTheDogs();
Letterman.shuffleLetters();
Letterman.driveSlowly();
const Bourdain = new Chef('I get a smoke', 'owning a restaurant', 'microwave popcorn');
console.log('-----Chef Methods Test-----')
Bourdain.sleep();
Bourdain.eat();
Bourdain.occasionallyCry();
Bourdain.rankIsImportant();
Bourdain.orders();
Bourdain.smokeBreak();