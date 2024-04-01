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








console.log(randomNounGenerator())