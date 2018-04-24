function treeRightSide(height) {
  for (var i = 1; i <= height; i++) {
		var star = '';

		for (var j = 1; j <= i; j++) {
				star += '*';
		}
		
		console.log(star);
	}
}

function treeLeftSide(height) {
	for (var i = 1; i <= height; i++) {
		var row = '';
		
		for (var j = 1; j <= height - i; j++) {
			row += ' ';
		}
		
		for (var k = 1; k <= i; k++) {
			row += '*';
		}

		console.log(row);
	}
}

function treeBothSides(height) {
	for (var i = 1; i <= height; i++) {
		var row = '';
		
		for (var j = 1; j <= height - i; j++) {
			row += ' ';
		}
		
		for (var k = 1; k <= 2*i-1; k++) {
			row += '*';
		}

		console.log(row);
	}
}

treeRightSide(5);

console.log();
console.log('-----------------------------');
console.log();

treeLeftSide(5);

console.log();
console.log('-----------------------------');
console.log();

treeBothSides(5);