var i ='0';
var ans = '';
function starPattern(num) {
    do {
        i++;
        ans = ans+'*';
        console.log(ans);
    }while(i < num);
}
console.log();
starPattern(5);