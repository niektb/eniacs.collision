/* TODO:
 * - An id generator
 * - method to add a tag to the html code
 * - method to remove the tag from the html code
 **/
function Ball() {
	this.X=0;
	this.Y=0;
	this.dX=0;
	this.dY=0;

	Ball.prototype.Update = function() {
		X = X + dX;
		Y = Y + dY;
	}
}

function AddHTML() {
this.addtag = '<img id="animateItem1" src="images/green.png" style="position:absolute; />';

document.getElementById('balls').innerHTML += tag;
}

function RemoveHTML() {
this.ballid = "animateItem1";
this.removetag = document.getElementById(ballid);

ballid.parentNode.removeChild(ballid);
}

