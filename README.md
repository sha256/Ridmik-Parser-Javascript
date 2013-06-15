# Ridmik Parser #
*Javascript implementation*

**English to Bangla Phonetic Converter**

-----

__Ridmik Parser__ is used in **Ridmik Keyboard**, an on screen keyboard for the Android OS.

It's very light-weight, fast and can be converted to any other language very easily. This is the JavaScript implementation.

*Please feel free to send pull request*


**Usage:**

include all neccessary javascript files

	<script src='js/ridmikmap.js'></script>
	<script src='js/StringBuilder.js'></script>
	<script src='js/ridmikparser.js'></script>

then its pretty straight forward:

	var parser = new RidmikParser();
	var bangla = parser.toBangla("amar sOnar bangla");
	document.write(bangla);

Output:
	
	আমার সোনার বাংলা


**License: New BSD License**




