const randomNounGenerator = () => {
    let n = Math.floor(Math.random() * 20)
    console.log(n);
    if (n === 1) {
        return "bed-presser";
    } else if (n === 2) {
        return "biscuit";
    } else if (n === 3) {
        return "boar-pig";
    } else if (n === 4) {
        return "bull's-pizzle";
    } else if (n === 5) {
        return "carbuncle";
    } else if (n === 6) {
        return "coward";
    } else if (n === 7) {
        return "death-token";
    } else if (n === 8) {
        return "eel-skin";
    } else if (n === 9) {
        return "fustilarian";
    } else if (n === 10) {
        return "harlot";
    } else if (n === 11) {
        return "hog";
    } else if (n === 12) {
        return "horseback-breaker";
    } else if (n === 13) {
        return "knave";
    } else if (n === 14) {
        return "madman";
    } else if (n === 15) {
        return "neat's-tongue";
    } else if (n === 16) {
        return "ratsbane";
    } else if (n === 17) {
        return "rogue";
    } else if (n === 18) {
        return "stock-fish";
    } else if (n === 19) {
        return "whoreson";
    } else if (n === 20) {
        return "villain";
    } else if (n === 0) {
        return "worms-meat";
    }
}

const randomParticipleGenerator = () => {
    let n = Math.floor(Math.random() * 20)
    console.log(n);
    if (n === 1) {
        return "bat-fowling";
    } else if (n === 2) {
        return "beetle-brained";
    } else if (n === 3) {
        return "dismal-dreaming";
    } else if (n === 4) {
        return "elvish-mark'd";
    } else if (n === 5) {
        return "fat-kidneyed";
    } else if (n === 6) {
        return "folly-fallen";
    } else if (n === 7) {
        return "hell-hated";
    } else if (n === 8) {
        return "idle-headed";
    } else if (n === 9) {
        return "ill-breeding";
    } else if (n === 10) {
        return "infant-like";
    } else if (n === 11) {
        return "milke-livered";
    } else if (n === 12) {
        return "reeling-ripe";
    } else if (n === 13) {
        return "rude-growing";
    } else if (n === 14) {
        return "sheep-biting";
    } else if (n === 0) {
        return "sodden-witted";
    } else if (n === 10) {
        return "swag-bellied";
    } else if (n === 11) {
        return "tardy-gaited";
    } else if (n === 12) {
        return "three-inch";
    } else if (n === 13) {
        return "tickle-brained";
    } else if (n === 14) {
        return "toad-spotted";
    } else if (n === 0) {
        return "worsted-stocking";
    }
}

const randomAdjGenerator = () => {
    let n = Math.floor(Math.random() * 20)
    console.log(n);
    if (n === 1) {
        return "bawdy";
    } else if (n === 2) {
        return "brainsick";
    } else if (n === 3) {
        return "fat";
    } else if (n === 4) {
        return "false";
    } else if (n === 5) {
        return "foul";
    } else if (n === 6) {
        return "greasy";
    } else if (n === 7) {
        return "infectious";
    } else if (n === 8) {
        return "kindless";
    } else if (n === 9) {
        return "lecherous";
    } else if (n === 10) {
        return "paunchy";
    } else if (n === 11) {
        return "puking";
    } else if (n === 12) {
        return "qualling";
    } else if (n === 13) {
        return "remorseless";
    } else if (n === 14) {
        return "rotten";
    } else if (n === 15) {
        return "sanguine";
    } else if (n === 16) {
        return "spherical";
    } else if (n === 17) {
        return "starveling";
    } else if (n === 18) {
        return "vile";
    } else if (n === 19) {
        return "venemous";
    } else if (n === 20) {
        return "ugly";
    } else if (n === 0) {
        return "yeasty";
    }
}




console.log(randomAdjGenerator())
console.log(randomParticipleGenerator())
console.log(randomNounGenerator())