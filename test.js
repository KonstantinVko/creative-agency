// complete the function




function solution(string) {
    let splitted = string.split('');
    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i].toLowerCase() !== splitted[i]) {
            splitted[i] = ' ' + splitted[i]
        }
    }
    console.log(splitted)
}

solution('camelCasingTest')
