webpackJsonp([3,5],[function(e,o,t){!function(e){var o=function(e){return e.split("").reverse().join("")},t={numberStep:function(o,t){var a=Math.floor(o);e(t.elem).text(a)}},a=function(e){var o=e.elem;o.nodeType&&o.parentNode&&(o=o._animateNumberSetter,o||(o=t.numberStep),o(e.now,e))};e.Tween&&e.Tween.propHooks?e.Tween.propHooks.number={set:a}:e.fx.step.number=a,e.animateNumber={numberStepFactories:{append:function(o){return function(t,a){var n=Math.floor(t);e(a.elem).prop("number",t).text(n+o)}},separator:function(t,a){return t=t||" ",a=a||3,function(n,i){var r=Math.floor(n).toString(),s=e(i.elem);if(r.length>a){for(var l,c,p,d=r,u=a,h=d.split("").reverse(),r=[],m=0,f=Math.ceil(d.length/u);f>m;m++){for(l="",p=0;u>p&&(c=m*u+p,c!==d.length);p++)l+=h[c];r.push(l)}d=r.length-1,u=o(r[d]),r[d]=o(parseInt(u,10).toString()),r=r.join(t),r=o(r)}s.prop("number",n).text(r)}}}},e.fn.animateNumber=function(){for(var o=arguments[0],a=e.extend({},t,o),n=e(this),i=[a],r=1,s=arguments.length;s>r;r++)i.push(arguments[r]);if(o.numberStep){var l=this.each(function(){this._animateNumberSetter=o.numberStep}),c=a.complete;a.complete=function(){l.each(function(){delete this._animateNumberSetter}),c&&c.apply(this,arguments)}}return n.animate.apply(n,i)}}(jQuery)}]);
//# sourceMappingURL=jquery.animateNumber.min.js.map