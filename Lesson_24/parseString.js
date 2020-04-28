function parse(cmd) {
    let num = 0;
    const numArray = [];
    if ( typeof cmd !== "string" || !cmd.includes('o') && !cmd.includes('O')) {
        console.log('Be careful. Check your command');
    }else {
        for (let char of cmd) {
            switch (char.toLowerCase()) {
                case 'i':
                    num++;
                    break;
                case 'd':
                    num--;
                    break;
                case 's':
                    num = num**2;
                    break;
                case 'o': {
                    numArray.splice(0);
                    numArray.push(num);
                    break;
                }
                default:
                    break;
            }
        }
    }
    return numArray;
}
console.log(parse('iIhhuOyssssbOsss'));
