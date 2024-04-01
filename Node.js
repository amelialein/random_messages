const randomNounGenerator = () => {
    let nounArray = ["bed-presser", "biscuit", "boar-pig", "bull's-pizzle", "carbuncle", "coward", "death-token", "eel-skin", "fustilarian", "harlot", "hog", "horseback-breaker", "knave", "madman", "neat's-tongue", "ratsbane", "rogue", "stock-fish", "whoreson", "villian", "worms-meat"];
    let n = Math.floor(Math.random() * nounArray.length);
    return nounArray[n];
}

const randomParticipleGenerator = () => {
    let partArray = ["bat-fowling", "beetle-brained", "dismal-dreaming", "elvish-mark'd", "fat-kidneyed", "folly-fallen", "hell-hated", "idle-headed", "ill-breeding", "infant-like", "milk-livered", "reeling-ripe", "rude-growing", "sheep-biting", "sodden-witted", "swag-bellied", "tardy-gaited", "three-inch", "tickle-brained", "toad-spotted", "worsted-stocking"];
    let n = Math.floor(Math.random() * partArray.length);
    return partArray[n];
}

const randomAdjGenerator = () => {
    let adjArray = ["a bawdy", "a brain stick", "a fat", "a false", "a foul", "a greasy", "an infectious", "a kindless", "a lecherous", "a paunchy", "a puking", "a qualling", "a remorseless", "a rotten", "a sanguine", "a spherical", "a starveling", "a vile", "a venemous", "an ugly", "a yeasty"];
    let n = Math.floor(Math.random() * adjArray.length);
    return adjArray[n];
 }

const createShakyInsult = () => {
    console.log(`Thou art ${randomAdjGenerator()}, ${randomParticipleGenerator()} ${randomNounGenerator()}!!! Get thee gone from my presence this instant!`)
}


//console.log(randomAdjGenerator())
//console.log(randomParticipleGenerator())
//console.log(randomNounGenerator())

createShakyInsult()