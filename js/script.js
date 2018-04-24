function treeRightSide(height) {
  for (var i = 0; i <= height; i++) {
		var star = '';
		for (var j = 0; j <= i; j++) {
				star += '*';
		}
		console.log(star);
	}
}

function treeLeftSide(height) {
	space = height - 1;

	for (var i = 0; i <= height; i++) {
		var row = '';
		
		for (var j = 0; j <= space; j++) {
			row += ' ';
		}
		
		for (var k = 0; k <= i; k++) {
			row += '*';
		}

		space--;
		console.log(row);
	}
}

treeRightSide(5);

console.log();
console.log('-----------------------------');
console.log();

treeLeftSide(5);