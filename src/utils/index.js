let CN = require('./Lang/CN.json');
let EN = require('./Lang/EN.json');

function Lang (str) {
    let lang = localStorage.getItem('lang')
    if (lang === 'EN') {
        return EN[str]
    } else {
        return CN[str]
    }
}
export default Lang;