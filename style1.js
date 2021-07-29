function calculate()
{
	A = document.getElementById("A").value;
	R = document.getElementById("R").value;
	Y = document.getElementById("Y").value;
	var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(Y);

	I = (A*R*Y/100);
	result = document.getElementById("result")
	result.innerHTML="If you deposit " + "<span class='highlight'>" + A + "</span>."  + 
	", <br> at an interest rate of "+ "<span class='highlight'>" + R + "</span>%." + 
	"<br> You will receive an amount of " + "<span class='highlight'>" + I + "</span>" + 
	", <br> in the year " + "<span class='highlight'>" + yearNow + "</span>";

} 

function SliderValue()
{
    var slider = document.getElementById("R");
    var output = document.getElementById("rate_display");
    output.innerHTML = slider.value;
    slider.oninput = function() 
    {
        output.innerHTML = this.value;
    }  
}