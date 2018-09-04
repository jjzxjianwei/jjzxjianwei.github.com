

	 

	 //参考：https://www.cnblogs.com/weimingxin/p/7349564.html https://blog.csdn.net/qq_36947128/article/details/78594462
	 function getparameter(name){ //获取参数

	 //正则得到参数并解码输出
	 
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");//建立正则
	 
	  var f=window.location.search.substr(1);
	  
	  var r = window.location.search.substr(1).match(reg);//查询返回?后边部分内容并进行正则赛选
	  

	  if(r!=null){
		  
		  return decodeURI(r[2]); //将GET参数解码(decodeURI() 函数可对 encodeURI() 函数编码过的 URI 进行解)输出 return必须在函数中使用不然报错
		  
	  }else{
		  
		  return null;
	  }

	 }
	 
	 

	 //得到输入汉字
	 
	 var hanzi= getparameter("word");
  
 
	/*
    $.get("https://v.juhe.cn/chengyu/query?key=7166dccd7f522476455e9cce4c56b88c&word="+hanzi,function(data,status){
		
             console.log(data);
    });
	*/
	
	
/*
  	$.ajax({
		
		url:"https://v.juhe.cn/chengyu/query?key=7166dccd7f522476455e9cce4c56b88c&word="+hanzi,
		
		 type: "GET",
         dataType: 'JSON',
		
		
		success:function(result){
			//$("#div1").html(result);
			
			console.log(result);
		}});
		*/
		
		$.ajax({
    url : "https://v.juhe.cn/chengyu/query?key=7166dccd7f522476455e9cce4c56b88c&word="+hanzi,
    dataType : 'jsonp',
    success : function(json){
        console.log(json);
    }
	
	
	//无法跨越解决：https://zhidao.baidu.com/question/1540525815744974467.html
});
		
		
		
		
		
		
		
		
		

  


	 //并得到返回的JSON数据输出到当前页面下方
     //https://www.cnblogs.com/qingqingzou-143/p/7079725.html

  


  