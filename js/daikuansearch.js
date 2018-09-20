var arr = [];
var str = [];
function wholeInfo() {
    $.ajax({
        url: "https://api.palpitation.shop/index/bank/bankList",
        success: function(data) {
            var list = data.data;
            // console.log(list);
            // console.log(str);
            $(".searchBtn").click(function(){
                // console.log(111);
                if($("#sfzNumber").val()){
                    console.log("yes");
                    var searchCondition = $("#sfzNumber").val();
                    // console.log(searchCondition)
                    for(var i=0;i<list.length;i++){
                        // console.log(list[i]);
                        if(searchCondition===list[i].card_id){
                            console.log("所搜成果");
                            console.log(list[i].id)
                            console.log(list[i].user_name)
                            console.log(list[i].job_id)
                            console.log(list[i].play_id)
                            console.log(list[i].place_id)
                            var resultStr = "<tr><td>用户姓名：</td><td>"+list[i].user_name+"</td></tr>";
                            console.log(resultStr)
                            $(".searchResult").html(resultStr)
                        }
                    }
                    // if(searchCondition)
                    // console.log($("#sfzNumber").val())

                }else{
                    alert("请输入搜索条件")
                    console.log("no")
                }
            })

        },
        error: function() {
            console.log('error')
        }
    })
}
wholeInfo();

