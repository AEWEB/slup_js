var Test=function(){
	this.outputList=new Array();
	this.equals=function($str,$correct){
		if($str!=$correct){
			this.outputError($str);
		}
		this.outputList.push($str);
	}
	this.outputError=function(str){
		throw new Error("Error: "+str);
	}
	this.outtput=function(){
		alert( this.outputList.join("\r\n") );
	}
	
}
