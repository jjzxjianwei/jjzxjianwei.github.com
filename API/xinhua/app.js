

	 

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
	 
	 

	 //判断参数长度输出
	 
	 var hanzi= getparameter("word");
  
 
  //参考https://www.cnblogs.com/henw/archive/2011/07/25/2116271.html
  
function getStrLength(str) {   //1个汉字等于两个字符 一个英文等于1个字符  获取字符串长度方法
    var cArr = str.match(/[^\x00-\xff]/ig);  
    return str.length + (cArr == null ? 0 : cArr.length);  
}  
  
  
  
  
//根据选择条件进行判断链接不同类型的API接口
  
  
  function Select(hanzi){
  

  var hzlenght=getStrLength(hanzi);//得到输入汉字长度
  
  

//根据选择条件进行判断链接不同类型的API接口


if(hzlenght==2){    //1个汉字解释请求
	
	
	//console.log("词");
     
	 
	 var zi = new Array("word","word");
	
     return zi;
	
	
	//https://www.pwxcoo.com/dictionary?type=word&word=hanzi   
	
	
	
	
	
	
	
	
	
	
	
	
	
}



if(hzlenght==8){ //四字成语解释
		
		
	//console.log("成语");	
	
	 var zi = new Array("idiom","word");
	 return zi;
	
}



//大于一个汉字而且必须不等于4个汉字
if(hzlenght>2 && hzlenght!=8){ //歇后语搜索支持模糊查询
	
	
	// console.log("歇后语");
	
		 var zi = new Array("xiehouyu","riddle");
	
	 return zi;
	
}
  }
  
  
   var cd= Select(hanzi);
   
   
   console.log(cd[0]);
   

  


		
	
		

  
  
  
  
  		$.ajax({
    url : "https://www.pwxcoo.com/dictionary?type="+cd[0]+"&"+cd[1]+"="+hanzi,
    dataType : 'jsonp',
    success : function(json){
        console.log(json);
    }
	
	
	//无法跨越解决：https://zhidao.baidu.com/question/1540525815744974467.html
});
		
  
  
  
  
  
  
  
  
  
  


	 //并得到返回的JSON数据输出到当前页面下方
     //https://www.cnblogs.com/qingqingzou-143/p/7079725.html

  


  