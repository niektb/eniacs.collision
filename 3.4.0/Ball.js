/* TODO:
 * - method to add a tag to the html code
 * - method to remove the tag from the html code
 **/
function Ball(x,y) {
	this.X=x;
	this.Y=y;
	this.dX=1;
	this.dY=0;
	this.ballId= "undefined";
	this.tag;

	Ball.prototype.Update = function() {
		this.X = this.X + this.dX;
		this.Y = this.Y + this.dY;

		// Update the html attributes
		//this.tag.setAttribute("top", this.Y);
		//this.tag.setAttribute("left", this.X);
		//this.tag.top = this.Y;
		//this.tag.left = this.X;
	}

	Ball.prototype.Show = function() {
		var wrapper = document.getElementById("balls");
		var balls = wrapper.getElementsByTagName("img");

		// create a unique id for the img element
		if (balls.length == 0)
			var ballNr = 1;
		else
			var ballNr = parseInt(balls[balls.length-1].id.substr(4)) + 1;
		this.ballId = "ball" + ballNr;

		this.tag = '<img id="' + this.ballId + '" src="images/green.png" style="position:absolute; top:' + this.Y + 'px; left:' + this.X + 'px;"/>';
		wrapper.innerHTML += this.tag;
	}
	
	Ball.prototype.Hide = function() {
		var wrapper = document.getElementById("balls");
		var tag = wrapper.childNodes[this.ballId];
		wrapper.removeChild(tag);
	}
}

