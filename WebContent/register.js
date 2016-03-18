/**
 * 
 */
function formSubmit() {
		var username = document.getElementById("id_username").value;
		var password = document.getElementById("id_password").value;
		var repassword = document.getElementById("id_repassword").value;
		var age = document.getElementById("id_age").value;
		if (username.length == 0 || password.length == 0 || repassword.length == 0 || age.length == 0) {
			alert("用户名、密码、重复 密码、年龄的输入不能为空");
			return false;
		}
		var ageSearch = age.search(/^\d+$/);
		if (ageSearch != 0) {
			alert("年龄必须为数字");
			return false;
		}
		if(username.length < 8 || username.length > 12){
			alert("用户名长度在8~12之间");
			return false;
		}
		var sexRadio = document.getElementsByName("sex");
		var sex ;
		var isChooseSex = false;
		for(var i = 0;i < sexRadio.length ; i++){
			if(sexRadio[i].checked==true){
				sex = sexRadio[i].value;
				isChooseSex = true;
				break;
			}
		}
		if(!isChooseSex){
			alert("性别必须选择");
			return false;
		}
		var hobbyCheckBox = document.getElementsByName("hobby");
		var isChooseHobby = false;
		var hobby = "";
		for(var i = 0; i < hobbyCheckBox.length ;i++){
			if(hobbyCheckBox[i].checked == true){
				hobby = hobby + hobbyCheckBox[i].value;
				isChooseHobby = true;
			}
		}
		if(!isChooseHobby){
			alert("兴趣爱好至少选择一项");
			return false;
		}
		var degree = document.getElementById("id_degree").value;
		var introduce = document.getElementById("id_introduce").value;
		
		
		var info = "用户名:" + username + "\n";
		info = info + "密码:" + password + "\n";
		info = info + "年龄:" + age + "\n";
		if(sex == 1){
			info = info + "性别:男\n";
		}else{
			info = info + "性别:女\n";
		}
		if(degree == 1){
			info = info + "学历:专科\n";
		}else if(degree == 2){
			info = info + "学历:本科\n";
		}else if (degree == 3) {
			info = info + "学历:硕士\n";
		}else if (degree == 4) {
			info = info + "学历:博士\n";
		}
		var hobbyInfo = "";
		for(var i = 0 ; i < hobby.length ; i ++){
			var num = hobby.substring(i,i+1);
			if(num == 1){
				hobbyInfo = hobbyInfo + "睡觉,"
			}else if(num == 2){
				hobbyInfo = hobbyInfo + "逃课,"
			}else if(num == 3){
				hobbyInfo = hobbyInfo + "打游戏,"
			}else if(num == 4){
				hobbyInfo = hobbyInfo + "吃饭"
			}
		}
		info = info + "爱好:"+ hobbyInfo + "\n";
		info = info + introduce + "\n";
		alert(info);
		return true;
}