let array = [1,2,3,4,5,6];
for(let i=0;i<6;i++){
    let x = Math.floor((Math.random() * 6));
    let temp = array[i];
    array[i] = array[x];
    array[x]=temp;
}
for(let i=0;i<6;i++){
    document.querySelectorAll("img")[i].setAttribute("src","images/dice"+array[i]+".png");
}
