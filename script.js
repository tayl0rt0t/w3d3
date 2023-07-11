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
