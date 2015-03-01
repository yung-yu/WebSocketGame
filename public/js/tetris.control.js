
	var t;
	//<![CDATA[
		$(function(){
		    t = new Tetris();
			$('#go').click(function(){
				t.gameStart(); this.blur();
                
			});
			$('#pause').toggle(
				function(){ t.gamePause(); this.blur(); },
				function(){ t.gameResume(); this.blur(); }
			);
			$('#grid').toggle(
				function(){ t.hideGrid(); this.blur(); },
				function(){ t.showGrid(); this.blur(); }
			);
			$('#shadow').toggle(
				function(){ t.hideShadow(); this.blur(); },
				function(){ t.showShadow(); this.blur(); }
			);
		});
		function getTetris(){
			return t;
		}
// 用來產生類似 GUID 的字串
            function S4() {
               return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            }
 
            function NewGuid() {
               return (S4()+S4());
            }
 		
