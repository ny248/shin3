let birthYear=10104;
if(birthYear%400===0||birthYear%100!==0&&birthYear%4===0){
  document.write("閏年です");
}else{
  document.write("閏年ではありません");
} 