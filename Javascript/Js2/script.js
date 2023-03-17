var c=0;
var text1 = "";
var text2 = "";
var text = "";
for (let k = 1; k < 9; k++) {
    for (let i = 8-k; i > 0; i--) {
        text1 += " ";
    }
        for (let j = 1; j <= k+c; j++) {
            text2 += "*"
        }
        c=c+1;
        text += text1+text2+text1+"\n";
        text1="";
        text2="";
}
console.log(text);
console.log('====================');
var text3='';
for (let i = 0; i < 8; i++){
    for (let j = 1; j <=i+1; j++){
    text3+="*";
    }
text3+="\n"
}
console.log(text3);
console.log('====================');
var text4='';
for (let i = 8; i > 0; i--){
    for (let j = 1; j <=i; j++){
    text4+="*";
    }
text4+="\n"
}
console.log(text4);
console.log('====================');
var text5='';
var text6='';
var text7='';
var z='*';
k=17;
for (let i = 0; i < 8; i++){
    for (let j = 1; j <=k; j++){
        text5+=" ";
        }
    k=k-2;
    for (let m = 0; m <= i; m++){
        text6+=" ";
        }
text7+=text6+z+text5+z+text6+"\n";
text5='';
text6='';
}
console.log(text7);
console.log('====================');
console.log('        *  *        ');
console.log('    *          *    ');
console.log(' *                * ');
console.log('*                  *');
console.log('*                  *');
console.log(' *                * ');
console.log('    *          *    ');
console.log('        *  *        ');
console.log('====================');
var c=0;
var text8 = "";
var text9 = "";
var text10 = "";
h=15;
for (let k = 1; k < 18; k++) {
    if (k < 10){
    for (let i = 9-k; i > 0; i--) {
        text8 += " ";
    }
        for (let j = 1; j <= k+c; j++) {
            text9 += "*"
        }
        c=c+1;
    }
        else {
        for (let i = 1; i <=k-c ; i++) {
            text8 += " ";
        }
        for (let j = 1; j <=h; j++){
            text9+="*";
            }
        h=h-2;
        }
        text10 += text8+text9+text8+"\n";
        text8="";
        text9="";
}
console.log(text10);
console.log('====================');
var text11=' ';
var text12='*';
var text13='';
for (let i = 0; i < 8; i++) {
    for (let j = 1; j <= 10; j++){
    switch (j) {
        case 10: 
        text13=text13+"\n";
        continue;
        }
    if (j % 2 == 0 && j < 10) {
        text13=text13+text11;
    }
    else {
        text13=text13+text12;
    }
}
}
console.log(text13);
console.log('====================');