window.addEventListener("load", currentResolution)

function currentResolution() {
	if (screen.width <= 600) {
		
	} else {
		document.getElementById("lorb").addEventListener("mouseenter", trust);
		function trust() {
			var lorbMove = document.getElementById("lorb");
			if (!lorbMove.style.left) {
				// Default to 500 to start
				lorbMove.style.left = "500px";
		} else {
			var posLeft = parseInt(lorbMove.style.left); // parseInt ignores the px on the end
			if (posLeft >= 500) {
            lorbMove.style.left = "200px";
        } else if (posLeft > 450) {
            posLeft += 150;
            lorbMove.style.left = (posLeft + 150) + "px";
        }
			}
				}		
					}
						}




