

$("input[type='text']").keypress(function (event) {
	if (event.which === 13) {

		uldelet();
		$("#my_image").attr("src","picture/1.jpg");
		var num = $(this).val();
		console.log(num);


		if(num>=0 && num<= 1058){
			$("#my_image").attr("src","picture/1.jpg");
		}
		else if(num>=1059 && num<= 2719){
			
		}
		else if(num>=2719 && num<= 4915){
			$("#my_image").attr("src","picture/3.jpg");
		}
		else if(num>=4915 && num<= 4984){
			$("#my_image").attr("src","picture/library.jpg");
		}
		else if(num>=4985 && num<= 5064){
			$("#my_image").attr("src","picture/sl.jpg");
		}



		if (num >= 1 && num <= 60) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 1101 Ka  <br><br>Floor: Ground <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}

		 else if (num >= 61 && num <= 110) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no :  1101 Kha <br><br>Floor: Ground  <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}

		else if (num >= 111 && num <= 160) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no :  1102 <br><br>Floor: Ground  <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}

		else if (num >= 161 && num <= 194) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no :  1125 Ka <br><br>Floor: Ground  <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}

		else if (num >= 195 && num <= 254) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 1125 Kha  <br><br>Floor: Ground  <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}

		else if (num >= 255 && num <= 302) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no :  1132 <br><br>Floor: Ground  <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}

		else if (num >= 303 && num <= 362) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no :  1142 <br><br>Floor: Ground  <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}

		else if (num >= 362 && num <= 412) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 1201 Ka  <br><br>Floor: 1st Floor <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}

		else if (num >= 413 && num <= 456) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 1204  <br><br>Floor: 1st Floor <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}

		else if (num >= 457 && num <= 496) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no :  1231 <br><br>Floor: 1st Floor <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}

		else if (num >= 497 && num <= 536) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 1234  <br><br>Floor:1st Floor  <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}

		else if (num >= 537 && num <= 572) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no :  1235 <br><br>Floor:1st Floor  <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}

		else if (num >= 573 && num <= 672) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no :  1301 <br><br>Floor: 2nd Floor <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}

		else if (num >= 673 && num <= 762) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no :  1302 Ka <br><br>Floor:  2nd Floor  <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}

		else if (num >= 763 && num <= 812) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no :  1302 Kha <br><br>Floor:  2nd Floor <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}

		else if (num >= 813 && num <= 922) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 1304  <br><br>Floor: 2nd Floor  <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}


		else if (num >= 923 && num <= 1048) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 1328  <br><br>Floor:  2nd Floor <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}

		else if (num >= 1049 && num <= 1178) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 1330  <br><br>Floor:  2nd Floor <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}

		else if (num >= 1179 && num <= 1288) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no :  1401 <br><br>Floor:  3rd Floor <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}


		else if (num >= 1289 && num <= 1334) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no :  1402 <br><br>Floor: 3rd Floor  <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}


		else if (num >= 1335 && num <= 1404) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 1403  <br><br>Floor:  3rd Floor <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}


		else if (num >= 1405 && num <= 1450) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no :  1423 <br><br>Floor: 3rd Floor  <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}

		else if (num >= 1451 && num <= 1538) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no :   1425 <br><br>Floor: 3rd Floor  <br><br>Dr. Satyendra Nath Bose Academic Building (Academic Buliding #1) </font></h1></span>');
		}





		else if (num >= 1539 && num <= 2712) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">not added </font></h1></span>');
			$("#my_image").attr("src","");
		}





		else if (num > 2712 && num < 2777) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3102  <br><br>Floor: Ground <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}
		else if (num > 2776 && num < 2841) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3103 <br><br>Floor: Ground <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 2840 && num < 2881) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3104 <br><br>Floor: Ground <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 2880 && num < 2921) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3105 <br><br>Floor: Ground <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 2920 && num < 2961) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3106 <br><br>Floor: Ground <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 2960 && num < 2991) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3107 <br><br>Floor: Ground <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}
		else if (num > 2990 && num < 3035) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3108 <br><br>Floor: Ground <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 3034 && num < 3077) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3109  <br><br>Floor: Ground <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 3076 && num < 3141) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3116 <br><br>Floor: Ground<br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 3140 && num < 3205) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3117 <br><br>Floor: Ground <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 3204 && num < 3265) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3124 <br><br>Floor: Ground <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 3264 && num < 3313) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3203 <br><br> Floor: 1st floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 3312 && num < 3345) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3204 <br><br>Floor: 1st floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 3344 && num < 3385) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3205 <br><br>Floor: 1st floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 3384 && num < 3449) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3206 <br><br>Floor: 1st floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 3448 && num < 3509) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3208 <br><br>Floor: 1st floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 3508 && num < 3569) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3209 <br><br>Floor: 1st floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 3568 && num < 3619) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3212 <br><br>Floor: 1st floor <br><br>Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 3618 && num < 3679) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3213 <br><br>Floor: 1st floor<br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 3678 && num < 3719) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3218 <br><br>Floor: 1st floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}
		else if (num > 3718 && num < 3919) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3219(Multi purpose Hall) <br><br>Floor: 1st floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 3918 && num < 3971) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3302 <br><br>Floor: 2nd floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}
		else if (num > 3970 && num < 4011) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3304 <br><br>Floor: 2nd floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 4010 && num < 4061) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3306 <br><br>Floor: 2nd floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 4060 && num < 4117) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3307 <br><br>Floor: 2nd floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 4116 && num < 4172) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3309 <br><br>Floor: 2nd floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 4171 && num < 4226) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3311 <br><br>Floor: 2nd floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 4225 && num < 4266) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3312 <br><br>Floor: 2nd floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 4265 && num < 4324) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3314 <br><br>Floor: 2nd floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 4323 && num < 4366) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3315(Phy-3) <br><br>Floor: 2nd floor<br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 4365 && num < 4396) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3319(Seminar Econ) <br><br>Floor: 2nd floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 4395 && num < 4456) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3320 <br><br>Floor: 2nd floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 4455 && num < 4526) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3401 <br><br>Floor: 3rd floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 4525 && num < 4561) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3403 <br><br>Floor: 3rd floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 4560 && num < 4605) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3405 <br><br>Floor: 3rd floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 4604 && num < 4647) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3704 <br><br>Floor: 3rd floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 4646 && num < 4687) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3409 <br><br>Floor: 3rd floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 4686 && num < 4745) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3411 <br><br>Floor: 3rd floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 4744 && num < 4793) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3417(Phy-2) <br><br>Floor: 3rd floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}
		else if (num > 4792 && num < 4837) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3420(Phy-1) <br><br>Floor: 3rd floor<br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 4836 && num < 4883) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3421(Seminar Ds) <br><br>Floor: 3rd floor<br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 4882 && num < 4915) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 3422(Phy msc) <br><br>Floor: 3rd floor <br><br> Kabi Jibanananda Das Academic Building(Academic Buliding #3) </font></h1></span>');
		}

		else if (num > 4914 && num < 4955) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 4101-A (IFA) <br><br>Library <br><br> Kazi Nazrul Islam Library Building(Central Library)</font></h1></span>');
		}

		else if (num > 4954 && num < 4985) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : 4101-B (IFA) <br><br>Library <br><br> Kazi Nazrul Islam Library Building(Central Library)</font></h1></span>');
		}

		else if (num > 4984 && num < 5025) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no : Sharly Islam Library -1 <br><br>Sharly <br><br> Sharly Islam Library</font></h1></span>');
		}

		else if (num > 5024 && num < 5065) {
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Room no :  Sharly Islam Library -2 <br><br>Sharly<br><br> Sharly Islam Library</font></h1></span>');
		}

		else if(num >=5065 && num < 12098){
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">KUET</h1></span>');
			$("#my_image").attr("src","");
		}
		else {
			
			$("ul").append('<span><h1  style="text-align: left; margin-top:5%;" color="black"><font size="30" color="black">Invalid Roll</h1></span>');
			$("#my_image").attr("src","");
		}
	}
});

function uldelet() {
	$("span").remove();
}
