/* TODO:
 * - method to add a tag to the html code
 * - method to remove the tag from the html code
 **/
function Ball() {
	this.X=0;
	this.Y=0;
	this.dX=0;
	this.dY=0;
	this.ballId= "undefined";

	Ball.prototype.Update = function() {
		X = X + dX;
		Y = Y + dY;
	}

	Ball.prototype.AddToHTML = function() {
		var wrapper = document.getElementById("balls");
		var balls = wrapper.getElementsByTagName("img");
		var ballNr = parseInt(balls[balls.length-1].id.substr(4)) + 1;
		this.ballId = "ball" + ballNr;
		var tag = '<img id="' + this.ballId + '" src="images/green.png" style="position:absolute; top: 100px; left:110px;"/>';
		wrapper.innerHTML += tag;
	}
	
	Ball.prototype.RemoveFromHTML = function() {
		var wrapper = document.getElementById("balls");
		var tag = wrapper.childNodes[this.ballId];
		wrapper.removeChild(tag);
	}
}

