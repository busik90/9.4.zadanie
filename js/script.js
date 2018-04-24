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

function treeBothSidesBackward(height) {
	for (var i = 1; i <= height; i++) {
		var row = '';
		
		for (var j = 1; j <= i - 1; j++) {
			row += ' ';
		}
		
		for (var k = 1; k <= height*2-i*2+1; k++) {
			row += '*';
		}

		console.log(row);
	}
}

function treeLyingRight(height) {
	for (var i = 1; i <= 2*height-1; i++) {
		var row = '';
		
		if (i <= height) {
			for (var j = 1; j <= i; j++) {
				row += '*';
			}

			console.log(row);
			continue;
		}
		else {
			for (var j = 1; j <= 2*height-i; j++) {
				row += '*';
			}
			
			console.log(row);
		}
	}
}

function treeLyingLeft(height) {
	for (var i = 1; i <= 2*height-1; i++) {
		var row = '';
		
		if (i <= height) {
			for (var j = 1; j <= height-i; j++) {
				row += ' ';
			}

			for (var j = 1; j <= i; j++) {
				row += '*';
			}
			console.log(row);
			continue;
		}
		else {
			for (var j = 1; j <= i-height; j++) {
				row += ' ';
			}

			for (var j = 1; j <= 2*height-i; j++) {
				row += '*';
			}
			console.log(row);
		}
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

console.log();
console.log('-----------------------------');
console.log();

treeBothSidesBackward(5);

console.log();
console.log('-----------------------------');
console.log();

treeLyingRight(5);

console.log();
console.log('-----------------------------');
console.log();

treeLyingLeft(5);