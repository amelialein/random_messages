const randomNounGenerator = () => {
    let n = Math.floor(Math.random() * 15)
    console.log(n);
    if (n === 1) {
        return "face";
    } else if (n === 2) {
        return "relationship";
    } else if (n === 3) {
        return "childhood";
    } else if (n === 4) {
        return "job";
    } else if (n === 5) {
        return "mum";
    } else if (n === 6) {
        return "dad";
    } else if (n === 7) {
        return "grandma";
    } else if (n === 8) {
        return "grandpa";
    } else if (n === 9) {
        return "voice";
    } else if (n === 10) {
        return "odour";
    } else if (n === 11) {
        return "singing";
    } else if (n === 12) {
        return "nose";
    } else if (n === 13) {
        return "mouth";
    } else if (n === 14) {
        return "clothing";
    } else if (n === 0) {
        return "fashion sense";
    }
}

const randomVerbGenerator = () => {
    let n = Math.floor(Math.random() * 15)
    console.log(n);
    if (n === 1) {
        return "hides";
    } else if (n === 2) {
        return "eats";
    } else if (n === 3) {
        return "licks";
    } else if (n === 4) {
        return "drains";
    } else if (n === 5) {
        return "loves";
    } else if (n === 6) {
        return "mocks";
    } else if (n === 7) {
        return "drinks";
    } else if (n === 8) {
        return "microwaves";
    } else if (n === 9) {
        return "cooks";
    } else if (n === 10) {
        return "bakes";
    } else if (n === 11) {
        return "rubs";
    } else if (n === 12) {
        return "holds";
    } else if (n === 13) {
        return "punches";
    } else if (n === 14) {
        return "arouses";
    } else if (n === 0) {
        return "disappoints";
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
console.log(randomVerbGenerator())
console.log(randomNounGenerator())