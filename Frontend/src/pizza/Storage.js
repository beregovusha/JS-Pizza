var basil	=	require('basil.js');
basil	=	new	basil();
exports.get =	function(key)	{
    return	basil.get(key);
};
exports.set =	function(key,	value)	{
    return	basil.set(key,	value);
};/**
 * Created by Angelina on 03.02.2016.
 */
