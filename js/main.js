var rows=5;
var string="";
 
for(let i=0;i<rows;i++){
	 for(let j=0;i>=j;j++){
		 string+="*";
	 }
	 string+="\n";
}
console.log(string);

/*----- reverse-rectangle -----*/
 var rows=5;
var string="";
 
for(let i=rows;i>0;i--){
 for(let j=0;i>j;j++){
	 string+="*";
 }
 string+="\n";
}
console.log(string);
 
 