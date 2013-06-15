

function BanglaUnicode(){


	var m = {};
	var k = {};
	var jkt = {};
	var djkt = {};
	var djktt = {};


	// character map
	m["o"] = "\u0985";
	m["O"] = "\u0993";
	m["a"] = "\u0986";
	m["A"] = "\u0986";
	m["S"] = "\u09B6";
	m["sh"] = "\u09B6";
	m["s"] = "\u09B8";
	m["Sh"] = "\u09B7";
	m["h"] = "\u09B9";
	m["H"] = "\u09B9";
	m["r"] = "\u09B0";
	m["R"] = "\u09DC";
	m["Rh"] = "\u09DD";
	m["k"] = "\u0995";
	m["K"] = "\u0995";
	m["q"] = "\u0995";
	m["qq"] = "\u0981";
	m["kh"] = "\u0996";
	m["g"] = "\u0997";
	m["G"] = "\u0997";
	m["gh"] = "\u0998";
	m["Ng"] = "\u0999";
	m["c"] = "\u099A";
	m["C"] = "\u099A";
	m["ch"] = "\u099B";
	m["j"] = "\u099C";
	m["jh"] = "\u099D";
	m["J"] = "\u099C";
	m["NG"] = "\u099E";
	m["T"] = "\u099F";
	m["Th"] = "\u09A0";
	m["TH"] = "\u09CE";
	m["f"] = "\u09AB";
	m["F"] = "\u09AB";
	m["ph"] = "\u09AB";
	m["i"] = "\u0987";
	m["I"] = "\u0988";
	m["e"] = "\u098F";
	m["E"] = "\u098F";
	m["u"] = "\u0989";
	m["U"] = "\u098A";
	m["b"] = "\u09AC";
	m["B"] = "\u09AC";
	m["w"] = "\u09AC";
	m["bh"] = "\u09AD";
	m["V"] = "\u09AD";
	m["v"] = "\u09AD";
	m["t"] = "\u09A4";
	m["th"] = "\u09A5";
	m["d"] = "\u09A6";
	m["dh"] = "\u09A7";
	m["D"] = "\u09A1";
	m["Dh"] = "\u09A2";
	m["n"] = "\u09A8";
	m["N"] = "\u09A3";
	m["z"] = "\u09AF";
	m["Z"] = "\u09AF";
	m["y"] = "\u09DF";
	m["l"] = "\u09B2";
	m["L"] = "\u09B2";
	m["m"] = "\u09AE";
	m["M"] = "\u09AE";
	m["P"] = "\u09AA";
	m["p"] = "\u09AA";
	m["ng"] = "\u0982";
	m["cb"] = "\u0981";
	m["x"] = "\u0995\u09CD\u09B8";
	m["OU"] = "\u0994";
	m["OI"] = "\u0990";
	m["hs"] = "\u09CD";
	m["nj"] = "\u099E\u09CD\u099C";
	m["nc"] = "\u099E\u09CD\u099A";

	
	// kar map
	k['o'] = "";
	k['a'] = "\u09BE";
	k['A'] = "\u09BE";
	k['e'] = "\u09C7";
	k['E'] = "\u09C7";
	k['O'] = "\u09CB";
	k['OI'] = "\u09C8";
	k['OU'] = "\u09CC";
	k['i'] = "\u09BF";
	k['I'] = "\u09C0";
	k['u'] = "\u09C1";
	k['U'] = "\u09C2";
	k['oo'] = "\u09C1";
	
	// jkt
	
	jkt["k"] = "kTtnNslw";
	jkt["g"] = "gnNmlw";
	jkt["ch"] = "w";
	jkt["Ng"] = "gkm";
	jkt["NG"] = "cj";
	jkt["g"] = "gnNmlw";
	jkt["G"] = "gnNmlw";
	jkt["th"] = "w";
	jkt["gh"] = "Nn";
	jkt["c"] = "c";
	jkt["j"] = "jw";
	jkt["T"] = "T";
	jkt["D"] = "D";
	jkt["R"] = "g";
	jkt["N"] = "DNmw";
	jkt["t"] = "tnmwN";
	jkt["d"] = "wdm";
	jkt["dh"] = "wn";
	jkt["n"] = "ndwmtsDT";
	jkt["p"] = "plTtns";
	jkt["f"] = "l";
	jkt["ph"] = "l";
	jkt["b"] = "jdbwl";
	jkt["v"] = "l";
	jkt["bh"] = "l";
	jkt["m"] = "npfwvmlb";
	jkt["l"] = "lwmpkgTDf";
	jkt["Sh"] = "kTNpmf";
	jkt["S"] = "clwnm";
	jkt["sh"] = "clwnm";
	jkt["s"] = "kTtnpfmlw";
	jkt["h"] = "Nnmlw";
	jkt["cb"] = "";
	jkt["jh"] = "";
	jkt["TH"] = "";
	jkt["qq"] = "";
	jkt["ng"] = "";
	jkt["kh"] = "";
	jkt["gg"] = "";
	jkt["dh"] = "";
	jkt["Th"] = "";
	
	// djkt
	
	djkt["kh"] = "Ngs";
	djkt["ch"] = "c";
	djkt["Dh"] = "N";
	djkt["ph"] = "mls";
	djkt["dh"] = "gdnbl";
	djkt["bh"] = "dm";
	djkt["Sh"] = "k";
	djkt["th"] = "tns";
	djkt["Th"] = "Nn";
	djkt["jh"] = "j";
	djkt["NG"] = "cj";

	//djkkt
	
	djktt["ch"] = "NG";
	djktt["gh"] = "Ng";
	djktt["Th"] = "Sh";
	djktt["jh"] = "NG";
	djktt["sh"] = "ch";

	
	
	
	this.getDual = function(x, carry){
		return m[carry+x];
	};
	this.get = function(x){
		return m[x];
	};
	this.getKar = function(x){
		return k[x];
	};
	this.getDualKar = function(x, carry){
		return k[carry+x];
	};
    this.getJkt = function(carry){
        return jkt[carry];
    };
    this.getDualJkt = function(secondCarry, carry){
        return jkt[secondCarry+carry];
    };
    this.getDjkt = function(secondCarry, carry){
        return djkt[secondCarry+carry];
    };
    this.getDjktt = function(secondCarry, carry){
        return djktt[secondCarry+carry];
    };
	
}


