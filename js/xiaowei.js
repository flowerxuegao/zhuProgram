 $.validator.setDefaults({
 	submitHandler: function() {
 		// console.log("职业:"+$("#profession").val())
 		// console.log(11);
 		$.ajax({
 			type: "POST",
 			url: "https://api.palpitation.shop/index/bank/bankAdd",
 			data: JSON.stringify({
 				"user_name": $("#username").val(),
 				"card_id": parseInt($("#zjNumber").val()),
 				"job_id": parseInt($("#profession").val()),
 				"play_id": parseInt($("#loanUse").val()),
 				"place_id": parseInt($("#bankArea").val()),
 				"money": $("#loanMoney").val(),
 				"merage": $("#manager").val(),
 				"tel": parseInt($("#telphone").val()),
 				"yzm": $("#verificationCode").val()
 			}),
 			contentType: "application/json;charset=UTF-8",
 			dataType: "json",
 			success: function(data) {
 				alert("提交事件!");
 				console.log("success");
 				$("#commentForm").find("input").not(".applySubmit").val('');

 			},
 			error: function() {
 				console.log("error");
 			}
 		});

 	},
 	showErrors: function(map, list) {
 		// there's probably a way to simplify this
 		var focussed = document.activeElement;
 		if (focussed && $(focussed).is("input, textarea")) {
 			$(this.currentForm).tooltip("close", {
 				currentTarget: focussed
 			}, true)
 		}
 		this.currentElements.removeAttr("title").removeClass("ui-state-highlight");
 		$.each(list, function(index, error) {
 			$(error.element).attr("title", error.message).addClass("ui-state-highlight");
 		});
 		if (focussed && $(focussed).is("input, textarea")) {
 			$(this.currentForm).tooltip("open", {
 				target: focussed
 			});
 		}
 	}
 });
 $().ready(function() {
 	$("#commentForm").tooltip({
 		show: false,
 		hide: false
 	});
 	$("#commentForm").validate({
 		rules: {
 			username: {
 				required: true,

 			},
 			zjNumber: {
 				required: true,
 				isIdcard: true

 			},
 			telphone: {
 				required: true,
 				isTel: true
 			},
 		},
 		messages: {
 			username: {
 				required: "请填写用户名",

 			},
 			zjNumber: {
 				required: "请填写证件号码",
 				isIdcard: "请输入一个有效的证件号码"

 			},
 			telphone: {
 				required: "请输入您的联系电话",

 			},
 		}
 	});
 });
 jQuery.validator.addMethod("isTel", function(value, element) {
 	var tel = /^\d{3,4}-?\d{7,9}$/; //电话号码格式010-12345678   
 	return this.optional(element) || (tel.test(value));
 }, "请正确填写您的电话号码");
 jQuery.validator.addMethod("isIdcard", function(value, element) {
 	var idNumber = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
 	return this.optional(element) || (idNumber.test(value));
 }, "请正确填写您的证件号码");