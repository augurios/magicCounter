angular.module('mcounter.controllers', [])
    .controller('MainCtrl', ['$scope', function ($scope) {
	    console.log("init");
        $scope.player1name = "P1";
		$scope.player1Life = 20;
		$scope.player1energy = 1;
		$scope.player1poison = 1;
		$scope.player1walker = 1;
		
		$scope.player2name = "P2";
		$scope.player2Life = 20;
		$scope.player2energy = 1;
		$scope.player2poison = 1;
		$scope.player2walker = 1;
		
		$scope.counterOpennedP1 = false;
		$scope.counterOpennedP2 = false;
		
		var addLifeP1v = function() {
				$scope.player1Life++;
		}
		
		var removeLifeP1v = function() {
				$scope.player1Life--;
		}
		
		var addLifeP2v = function() {
				$scope.player2Life++;
		}
		
		var removeLifeP2v = function() {
				$scope.player2Life--;
		}
		
		$scope.addLifeP1 = function() {
				addLifeP1v();
		}
		
		$scope.removeLifeP1 = function() {
				removeLifeP1v();
		}
		
		$scope.addEnergyP1 = function() {
				$scope.player1energy++;
		}
		
		$scope.removeEnergyP1 = function() {
				$scope.player1energy--;
		}
		
		$scope.addpoisonP1 = function() {
				$scope.player1poison++;
		}
		
		$scope.removepoisonP1 = function() {
				$scope.player1poison--;
		}
		
		$scope.addwalkerP1 = function() {
				$scope.player1walker++;
		}
		
		$scope.removewalkerP1 = function() {
				$scope.player1walker--;
		}
		
		
		$scope.addLifeP2 = function() {
				addLifeP2v();
		}
		
		$scope.removeLifeP2 = function() {
				removeLifeP2v();
		}
		
		$scope.addEnergyP2 = function() {
				$scope.player2energy++;
		}
		
		$scope.removeEnergyP2 = function() {
				$scope.player2energy--;
		}
		
		$scope.addpoisonP2 = function() {
				$scope.player2poison++;
		}
		
		$scope.removepoisonP2 = function() {
				$scope.player2poison--;
		}
		
		$scope.addwalkerP2 = function() {
				$scope.player2walker++;
		}
		
		$scope.removewalkerP2 = function() {
				$scope.player2walker--;
		}
		
		$scope.openCounter = function(counterClass,wrapperClass) {
			$("." + wrapperClass +" .counter." + counterClass ).addClass("open");
			
			if(wrapperClass == 'player-one') {
				$scope.counterOpennedP1 = true;
			} else {
				$scope.counterOpennedP2 = true;
			}
			
		}
		
		$scope.closeCounter = function(counterClass,wrapperClass) {
			$("." + wrapperClass +" .counter." + counterClass ).removeClass("open");
			
			var siblings = $("." + wrapperClass +" .counter." + counterClass ).siblings('.open').length;
			
			if(wrapperClass == 'player-one' && siblings == 0) {
				$scope.counterOpennedP1 = false;
			} else if(siblings == 0) {
				$scope.counterOpennedP2 = false;
			}
		}
		
		$scope.counter = function(counterClass,wrapperClass) {
			if($("." + wrapperClass +" .counter." + counterClass ).hasClass("open")) {
				$scope.closeCounter(counterClass,wrapperClass);
			} else {
				$scope.openCounter(counterClass,wrapperClass);
			}
			
		}
		
		
		
		
		$scope.restart = function() {
			$scope.player1Life = 20;
			$scope.player1energy = 1;
			$scope.player1poison = 1;
			$scope.player1walker = 1;
			
			$scope.player2Life = 20;
			$scope.player2energy = 1;
			$scope.player2poison = 1;
			$scope.player2walker = 1;
			$scope.counterOpennedP1 = false;
			$scope.counterOpennedP2 = false;
			$(".counter").removeClass("open");
			
			
		}
		
		
		$('.player-one .lifecounter').swipe(function( direction, offset ) {
			if (direction.y === "down") {
				addLifeP1v();
				$scope.$digest()
				
			} else {
				removeLifeP1v();
				$scope.$digest()
			}
		    
		});
		
		$('.player-two .lifecounter').swipe(function( direction, offset ) {
			if (direction.y === "up") {
				addLifeP2v();
				$scope.$digest()
				
			} else {
				removeLifeP2v();
				$scope.$digest()
			}
		      
		});
		
		$(".player-one .dice").click(function(){
			var diceElement = $(this);
			var randomNumber = Math.floor(Math.random() * 20) + 1 ;
			var formattedNumber = ("0" + randomNumber).slice(-2);
			return diceElement.html('<p>'+formattedNumber+'</p>'), setTimeout(function(){ diceElement.empty(); }, 3000);
			
		});
		
		$(".player-two .dice").click(function(){
			var diceElement = $(this);
			var randomNumber = Math.floor(Math.random() * 20) + 1 ;
			var formattedNumber = ("0" + randomNumber).slice(-2);
			return diceElement.html('<p>'+formattedNumber+'</p>'), setTimeout(function(){ diceElement.empty(); }, 3000);
			
		});
    }])
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works!";
    }]);
