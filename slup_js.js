var Model=function(){
	this.id;
}
var Controller=function(){
	this.run=function(){} 	
}
var Display=function(name,width,height,widthCount,heightCount){
	this.name=name;
	this.width=width;
	this.height=height;
	this.widthCount=widthCount;
	this.heightCount=heightCount;
	this.canvas;
	
	this.init=function(){
		this.canvas=document.getElementById(this.name);
	}
	this.getBaseContext=function(){
		return "2d";
	}
	this.getCon=function(){
		return this.canvas.getContext(this.getBaseContext());
	}
	
	this.init();
	
	/**
	 * override
	 */
	this.run=function(){
		this.getCon().beginPath();
		this.getCon().moveTo(0, 0);
		this.getCon().lineTo(200, 200);
		this.getCon().stroke();	
	} 	
}
Display.prototype=new Controller();