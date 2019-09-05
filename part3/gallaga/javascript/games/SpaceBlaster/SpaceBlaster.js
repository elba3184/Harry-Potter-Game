var SpaceBlaster = {};
var completion = 0;

function endGallaga(){

	var answer = confirm("Wow! You were able to get rid of 5 dementors in a row!!");
	if(answer){
		window.open("../../winner/winningPage.html");
	}

// 	// Get the modal
// 	var modal = document.getElementById("myModal");

// 	// Get the button that opens the modal
// 	var btn = document.getElementById("myBtn");

// 	// Get the <span> element that closes the modal
// 	var span = document.getElementsByClassName("close")[0];

// 	// When the user clicks on the button, open the modal 
// 	btn.onclick = function() {
//   	modal.style.display = "block";
// 	}

// 	// When the user clicks on <span> (x), close the modal
// 	span.onclick = function() {
//   	modal.style.display = "none";
// }

// 	// When the user clicks anywhere outside of the modal, close it
// 	window.onclick = function(event) {
//   		if (event.target == modal) {
//     		modal.style.display = "none";
//   		}
// 	}
}

(function(){
	var scene = SpaceBlaster.initial = {
		init: function() {
			scene.elapsedTime = 0;
			scene.createObjects();

			// Push methods to run every frame
			Game.frames.actions = [
				Game.clearCanvas,
				scene.updateTime,
				scene.updateShip,
				scene.updateMissles,
				scene.updateEnemies
			];
		},

		checkCollisions: function(enemy) {
			// Enemies and missiles
			for (var i = scene.missiles.length; i--;) {
				var missile = scene.missiles[i];

				if(Game.isCollision(enemy, missile)) {
					missile.explode();
					!enemy.isHit && enemy.destroy();
					return true;
				}
			}

			// Enemies and ship
			if(Game.isCollision(enemy, scene.ship)) {
				scene.ship.die();
				// Reset Game
				Game.loadScene('initial');
			}
		},

		createObjects: function() {
			scene.missiles = [];
			scene.ship = new SpaceBlaster.Ship({
				speed: 500,
				maxMissiles: 3,
				repeatRate: 30
			});
			scene.loadEnemies(5);
		},

		loadEnemies: function(count) {
			scene.enemies = [];
			var x = 100;
			var y = -count * 100;
			var i = 0;

			while (i < count) {
				var enemy = new SpaceBlaster.Enemy(x, y - Game.getRandomNumber(0, 100));
				enemy.original.vy = enemy.vy += (scene.elapsedTime * 50);
				scene.enemies.push(enemy);
				x += 200;
				y += 100;
				i++;
				if( x > Game.width - 200) {
					x = 100;
				}
			}
		},

		updateShip: function() {
			scene.ship.respondToInput();
			scene.ship.move();
			scene.ship.draw();
		},

		updateEnemies: function() {
			var anyDestroyed = false;

			for (i = scene.enemies.length; i--;) {
				var enemy = scene.enemies[i];
				if(enemy.isDestroyed) {
					anyDestroyed = true;
					delete scene.enemies[i];
					completion++;
					if(completion == 5){
						endGallaga();
					}
				} else {
					scene.checkCollisions(enemy);
					enemy.move();
					enemy.draw();
				}
			}

			if(anyDestroyed) {
				scene.enemies.clean();
				if(scene.enemies.length < 1) {
					scene.loadEnemies(5);
				}
			}
		},

		updateTime: function() {
			scene.elapsedTime += (Game.frames.delta / 10);
		},

		updateMissles: function() {
			for (var i = scene.missiles.length; i--;) {
				var missile = scene.missiles[i];
				if(missile.isLive) {
					missile.move();
					missile.draw();
				}
			}
		}
	}
	// if(completion == 5){
	// 	console.log("hi")
	// }
})();