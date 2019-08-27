var b1 = document.querySelector("#b1");
var b2 = document.querySelector("#b2");
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var count1 = 0;
var count2 = 0;
var input = document.querySelector("input");
var chance = document.querySelector("#chance");


b1.addEventListener("click",function(){
	if (count1<input.value&&count2<input.value) {
		if (count1<input.value-1) {
			count1+=1;
			p1.innerHTML = "<b>"+count1+"</b>";
		}
		else if(count1==input.value-1){
			count1+=1;
			p1.innerHTML = "<b>"+count1+"</b>";
			p1.style.color = "green";
		}
	}
});

b2.addEventListener("click",function(){
	if (count1<input.value&&count2<input.value) {
		if (count2<input.value-1) {
			count2+=1;
			p2.innerHTML = "<b>"+count2+"</b>";
		}
		else if(count2==input.value-1){
			count2+=1;
			p2.innerHTML = "<b>"+count2+"</b>";
			p2.style.color = "green";
		}
	}
});

reset.addEventListener("click",function(){
	count1=0;
	count2=0;
	p2.innerHTML = "<b>"+count2+"</b>";
	p1.innerHTML = "<b>"+count1+"</b>";

});

input.addEventListener("click",function(){
	chance.textContent = input.value;
})


