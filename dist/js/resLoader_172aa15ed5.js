webpackJsonp([3,4],[function(o,e,t){!function(o){var e=function(o){return"function"==typeof o},t=function(o){if(this.option={resourceType:"image",baseUrl:"./",resources:[],onStart:null,onProgress:null,onComplete:null},!o)return void alert("参数错误！");for(i in o)this.option[i]=o[i];this.status=0,this.total=this.option.resources.length||0,this.currentIndex=0};t.prototype.start=function(){this.status=1;for(var o=this,t=this.option.baseUrl,i=0,n=this.option.resources.length;n>i;i++){var a=this.option.resources[i],r="";r=0===a.indexOf("http://")||0===a.indexOf("https://")?a:t+a;var s=new Image;s.onload=function(){o.loaded()},s.onerror=function(){o.loaded()},s.src=r}e(this.option.onStart)&&this.option.onStart(this.total)},t.prototype.loaded=function(){e(this.option.onProgress)&&this.option.onProgress(++this.currentIndex,this.total),this.currentIndex===this.total&&e(this.option.onComplete)&&this.option.onComplete(this.total)},o.ResLoader=t}(window)}]);
//# sourceMappingURL=resLoader.js.map