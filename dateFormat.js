;var get_time=function(){
	/*	dateFormat v0.1
	**	ah.yiru@gmail.com 
	**	https://github.com/ahyiru/dateFormat
	*/
	Date.prototype.format=function(){
		var yy=this.getFullYear();
		var mm=this.getMonth()+1;
		var dd=this.getDate();
		var hh=this.getHours();
		var MM=this.getMinutes();
		var ss=this.getSeconds();
		mm=mm<10?'0'+mm:mm;
		dd=dd<10?'0'+dd:dd;
		hh=hh<10?'0'+hh:hh;
		MM=MM<10?'0'+MM:MM;
		ss=ss<10?'0'+ss:ss;
		return{
			day:function(){return yy+'-'+mm+'-'+dd;},
			time:function(){return yy+'-'+mm+'-'+dd+' '+hh+':'+MM+':'+ss;}
		}
	}

	var dm=86400000;
	var d=new Date();
	var yy=d.getFullYear();
	var ww=d.getDay();
	var mm=d.getMonth();
	var dd=d.getDate();
	var hh=d.getHours();
	var MM=d.getMinutes();
	var ss=d.getSeconds();
	
	var today=d.format().day();
	//1
	var today0=today+' 00:00:00';//本日0时
	var today1=d.format().time();//现在
	var yesterday2=(new Date(d-dm)).format().day()+' 23:59:59';//今日0时
	var yesterday0=(new Date(d-dm)).format().day()+' 00:00:00';//昨日0时
	var yesterday1=(new Date(d-dm)).format().time();//昨日现在

	//2
	var week0=(new Date(d-(ww-1)*dm)).format().day();//本周一
	var pweek2=(new Date(d-(ww)*dm)).format().day();//上周日
	var pweek0=(new Date(d-(ww+6)*dm)).format().day();//上周一
	var pweek1=(new Date(d-7*dm)).format().day();//上周今天
	//3
	var month0=(new Date(yy,mm,1)).format().day();//本月1号
	var pmonth2=(new Date(new Date(yy,mm,1)-dm)).format().day();//上月最后一天
	var pmonth0=(new Date(yy,mm-1,1)).format().day();//上月1号
	var pmonth1=(new Date(new Date(yy,mm-1,dd))).format().day();//上月今天
	//4
	var year0=(new Date(yy,0,1)).format().day();//今年第一天
	var pyear2=(new Date(yy-1,11,31)).format().day();//去年最后一天
	var pyear0=(new Date(yy-1,0,1)).format().day();//去年第一天
	var pyear1=(new Date(new Date(yy-1,mm,dd))).format().day();//去年今日
	
	var myt={
		"today":today,"today1":today1,
		"today0":today0,"yesterday2":yesterday2,"yesterday0":yesterday0,"yesterday1":yesterday1,
		"week0":week0,"pweek2":pweek2,"pweek0":pweek0,"pweek1":pweek1,
		"month0":month0,"pmonth2":pmonth2,"pmonth0":pmonth0,"pmonth1":pmonth1,
		"year0":year0,"pyear2":pyear2,"pyear0":pyear0,"pyear1":pyear1
	}
	return myt;
}