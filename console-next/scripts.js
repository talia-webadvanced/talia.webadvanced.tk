//thesetup

var filling="*";
var space=" ";

america = [];

for (i=0;i<88;i++){
	var row = [];
	america.push(row);
}

for (i=0;i<88;i++){
	if ((i<83) || (i>84)){
		america[0][i]=" "
	} else {
		america[0][i]="*"
	}
}

for (i=0;i<88;i++){
	if ((i<82) || (i>86)){
		america[1][i]=" "
	} else {
		america[1][i]="*"
	}
}


for (i=0;i<88;i++){
	if ((i==5) || ((i>7)&&(i<11)) || ((i>82)&&(i<88))){
		america[2][i]="*"
	} else {
		america[2][i]=" "
	}
}


for (i=0;i<88;i++){
	if ( ((i>=5)&&(i<=21)) || ((i>=81)&&(i<=85)) ){
		america[3][i]="*"
	} else {
		america[3][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>=5)&&(i<=53)) || ((i>=77)&&(i<=84)) ){
		america[4][i]="*"
	} else {
		america[4][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>=4)&&(i<=51)) || ((i>=55)&&(i<=62)) || ((i>=76)&&(i<=84)) ){
		america[5][i]="*"
	} else {
		america[5][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>=3)&&(i<=58)) || ((i>=62)&&(i<=64)) || ((i>=76)&&(i<=86)) ){
		america[6][i]="*"
	} else {
		america[6][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>=2)&&(i<=58)) || ((i>=61)&&(i<=64)) || ((i>=73)&&(i<=83)) ){
		america[7][i]="*"
	} else {
		america[7][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>=1)&&(i<=58)) || ((i>=61)&&(i<=66)) || ((i>=72)&&(i<=81)) ){
		america[8][i]="*"
	} else {
		america[8][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>=1)&&(i<=58)) || ((i>=62)&&(i<=66)) || ((i>=70)&&(i<=82)) ){
		america[9][i]="*"
	} else {
		america[9][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>=0)&&(i<=59)) || ((i>=61)&&(i<=80)) ){
		america[10][i]="*"
	} else {
		america[10][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>=0)&&(i<=81)) ){
		america[11][i]="*"
	} else {
		america[11][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>=0)&&(i<=82)) ){
		america[12][i]="*"
	} else {
		america[12][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>1)&&(i<=81)) ){
		america[13][i]="*"
	} else {
		america[13][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>1)&&(i<=82)) ){
		america[14][i]="*"
	} else {
		america[14][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>1)&&(i<=81)) ){
		america[15][i]="*"
	} else {
		america[15][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>2)&&(i<=80)) ){
		america[16][i]="*"
	} else {
		america[16][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>3)&&(i<=79)) ){
		america[17][i]="*"
	} else {
		america[17][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>5)&&(i<=78)) ){
		america[18][i]="*"
	} else {
		america[18][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>7)&&(i<=76)) ){
		america[19][i]="*"
	} else {
		america[19][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>8)&&(i<=76)) ){
		america[20][i]="*"
	} else {
		america[20][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>13)&&(i<=76)) ){
		america[21][i]="*"
	} else {
		america[21][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>16)&&(i<=77)) ){
		america[22][i]="*"
	} else {
		america[22][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>21)&&(i<=21)) || ((i>=28)&&(i<=65)) || ((i>=69)&&(i<=70)) || ((i>=74)&&(i<=78))){
		america[23][i]="*"
	} else {
		america[23][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>30)&&(i<=60)) || ((i>=76)&&(i<=80)) ){
		america[24][i]="*"
	} else {
		america[24][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>31)&&(i<=51)) || ((i>=76)&&(i<=81)) ){
		america[25][i]="*"
	} else {
		america[25][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>39)&&(i<=49)) || ((i>=78)&&(i<=82)) ){
		america[26][i]="*"
	} else {
		america[26][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>40)&&(i<=46)) || (i==81) ){
		america[27][i]="*"
	} else {
		america[27][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>42)&&(i<=45)) ){
		america[28][i]="*"
	} else {
		america[28][i]=" "
	}
}

for (i=0;i<88;i++){
	if ( ((i>43)&&(i<=44)) ){
		america[29][i]="*"
	} else {
		america[29][i]=" "
	}
}

for (i=0;i<88;i++){
		america[30][i]=" "
}









//the activity


function functionPlus(){
	trumpFrequency+=5
}

function functionMinus(){
	hillaryFrequency+=5
}

var finalDisplay=[];

var timer = 0;
var trumpFrequency=1;
var hillaryFrequency=1;

setTimeout(function(){

		for (i=0; i<30; i++){
			for (t=0; t<88; t++){
	
				if (america[i][t]!=" "){
		
						if(Math.random()*100<trumpFrequency){
							america[i][t]=("$");
						} else if (Math.random()*100<hillaryFrequency){
							america[i][t]=("?");
						} else {
							america[i][t]=(" ");
						}
		
				}
		
			}
		}

		for (i=0;i<88;i++){
			var joinedAmerica = america[i].join("");
			finalDisplay.push(joinedAmerica);
			finalDisplay.push("\n");
		}

		console.log(finalDisplay.join(""));

		}, timer);
	
		timer+=700
	
		setTimeout(function(){
		
			console.clear();
		
		}, timer);



// var numbers = [];
// 
// for (var t=0;t<100;t++){
// 	
// 
// 	
// 		setTimeout(function(){
// 		
// 			var bigArray = [];
// 	
// 			for (var t=0;t<30;t++){
// 					for (var i = 0; i<88; i++){
// 						if(Math.random()*100<trumpFrequency){
// 							numbers[i]=("$");
// 						} else if (Math.random()*100<hillaryFrequency){
// 							numbers[i]=("?");
// 						} else {
// 							numbers[i]=(" ");
// 						}
// 					}
// 			
// 					var joined = numbers.join("");
// 					bigArray.push(joined);
// 					bigArray.push("\n");
// 					// console.log(joined);	
// 			}
// 		
// 			console.log(bigArray.join(""));
// 
// 		}, timer);
// 	
// 		timer+=700
// 	
// 		setTimeout(function(){
// 		
// 			console.clear();
// 		
// 		}, timer);
// 
// }

