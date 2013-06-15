/**
 *
 * @param str
 * @constructor
 */


function StringBuilder (str){
	
	this._str = str == null ? "":str;
	
	this.append = function(str){
		this._str += str;
		return this;
	};
	
	this.remove = function(from, to){
        // possible bug, 'to' is not used
		this._str = this._str.slice(0, from);
		return this;
	};
	
	this.length = function(){
		return this._str.length;
	};
	
	this.toString = function(){
		return this._str;
	};
	
}