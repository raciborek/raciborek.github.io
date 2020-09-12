// Vars
var version = "0.0.1";
var login_form = '<form><input type = "text" name = "username" value = "login" ></input></form>'

function StartClock(){
				clock = document.getElementById("clock");
				var date = get_date()
				run_clock(clock, date)
			}


			function run_clock(clock, date){
				if(show == true){
					var date_string  = date[0] + date[1] + "." + date[7] + "." + date[3] + "<br />" + date[4] + ":" + date[5] + ":" + date[6];
				}
				else{
					var date_string  = date[0] + date[1] + " " + date[2] + " " + date[3] + " " + date[4] + ":" + date[5] + ":" + date[6];
				}
				
				clock.innerHTML = date_string;
				setTimeout(StartClock, 1000)
			}


			function convert_month(month){
				var months = {
					0 : "Stycznia",
					1 : "Lutego",
					2 : "Marca",
					3 : "Kwietnia",
					4 : "Maja",
					5 : "Czerwca",
					6 : "Lipca",
					7 : "Sierpnia",
					8 : "Września",
					9 : "Października",
					10 : "Listopada",
					11 : "Grudnia"
				}
				return months[month]
			}
			function convert_day_of_week(day_of_week){
				days_of_week = {
					0 : "Niedziela, ",
					1 : "Poniedziałek, ",
					2 : "Wtorek, ",
					3 : "Środa, ",
					4 : "Czwartek, ",
					5 : "Piątek, ",
					6 : "Sobota, "
				}
				return days_of_week[day_of_week]
			}
			function get_date(){
				var date = new Date()
				var month = date.getMonth();
				var day = date.getDate();
				if(day < 10){
					day = "0" + day;
				}
				var year = date.getFullYear();
				var hours = date.getHours();
				if(hours < 10){
					hours = "0" + hours;
				}
				var minutes = date.getMinutes();
				if(minutes < 10){
					minutes = "0" + minutes;
				}
				var seconds = date.getSeconds();
				if(seconds < 10){
					seconds = "0" + seconds;
				}
				var day_of_week = date.getDay();
				var month_not_converted = month + 1;
				if(month_not_converted < 10){
					month_not_converted = "0" + month_not_converted;
				}
				var month = convert_month(month);
				var day_of_week = convert_day_of_week(day_of_week);

				
				date[0] = day_of_week;
				date[1] = day;
				date[2] = month;
				date[3] = year;
				date[4] = hours;
				date[5] = minutes;
				date[6] = seconds;
				date[7] = month_not_converted;

				return date;
			}
function mouse_over(object){
	div = document.getElementById(object);
	div.style.backgroundColor = "#666666";
}
function mouse_out_of(object){
	div = document.getElementById(object);
	div.style.backgroundColor = "#555555";
}
show = false;
function clock_clicked(){
	if(show == true){
		show = false;
		StartClock();
		document.getElementById("under_clock").style.fontSize = "0px";
	}
	else{
		show = true;
		StartClock();
	    document.getElementById("under_clock").style.fontSize = "15px";
    }
}

function panel_out(){
	panel = document.getElementById("left_side_panel");
	panel.style.left = 0;
}

function panel_in(){
	panel = document.getElementById("left_side_panel");
	panel.style.left = "-450px";
}
var loginswitch = false;

function login_click(){
	login = document.getElementById("login_button");
		loginswitch = true;
		login.innerHTML = '<b>'+login_form+'</b>'
}