// 斗鱼获取直播源
function dyInfo(){
   $.get("http://res.niin.xin/softapi/douyujx.php?roomid=" + $("#roomId").val(),function(data,status){
       // $(".highlight-container:nth-of-type(2) .line").text(data.Rendata.link)
       $("#info").text(data.info)
       if(data.state=="SUCCESS"){
           $(".note .highlight-container .line").text(data.Rendata.link)
           $("#nickname").text(data.Rendata.data.nickname)
           $("#roomName").text(data.Rendata.data.roomName)
           $("#roominfo").text(data.Rendata.data.roominfo)
       }
  });
}

