<!DOCTYPE html>
<html>
	<head>
		<meta charset = "utf-8" />
		<link href = "style.css" rel = "stylesheet" type = "text/css" />
	</head>
	<body onload = StartClock()>
		<title>Zegarek Javascript</title>
	<div id = "container">
		<div id = "left_side_panel" onmouseover = 'panel_out()' onmouseout = 'panel_in()'>
				<p id = "test" style = "font-size: 15px;"></p>
			<div id = "div_clock" onmouseover = 'mouse_over("div_clock")' onmouseout = 'mouse_out_of("div_clock")' onclick = 'clock_clicked()'>
				<center>
					<b>Data i czas <br /></b>
					<b id = "clock" class = "in_clock"></b> <br />
					<b id = "under_clock" class = "in_clock_hidden"></b>
				</center>
			</div>
			<div id = "login_button" class = "login_button" onclick = "login_click()" onmouseover = 'mouse_over("login_button")' onmouseout = 'mouse_out_of("login_button")'>
				<center><br /><b>Zaloguj Się</b></center>
			</div>
	    </div>
	</div>
		<script src = "timer.js"></script>
	</body>
</html>
