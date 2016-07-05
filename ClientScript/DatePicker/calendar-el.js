﻿// ** I18N

// Modified by Joe Audette 8/21/2005 replaced special chars with numeric entity references
// this fixed errors I was getting during testing of localization


Calendar._DN = new Array
("&#922;&#965;&#961;&#953;&#945;&#954;&#951;",
 "&#916;&#949;&#965;&#964;&#949;&#961;&#945;",
 "&#932;&#961;&#953;&#964;&#951;",
 "&#932;&#949;&#964;&#945;&#961;&#964;&#951;",
 "&#928;&#949;&#956;&#960;&#964;&#951;",
 "&#928;&#945;&#961;&#945;&#963;&#954;&#949;&#965;&#951;",
 "&#931;&#945;&#946;&#946;&#945;&#964;&#959;",
 "&#922;&#965;&#961;#953;&#945;&#954;&#951;");

Calendar._SDN = new Array
("&#922;&#965;",
 "&#916;&#949;",
 "&#932;&#961;",
 "&#932;&#949;",
 "&#928;&#949;",
 "&#928;&#945;",
 "&#931;&#945;",
 "&#922;&#965;");
 
 // First day of the week. "0" means display Sunday first, "1" means display
// Monday first, etc.
Calendar._FD = 0;

Calendar._MN = new Array
("&#921;&#945;&#957;&#959;&#965;&#945;&#961;#953;&#959;&#962;",
 "&#934;&#949;&#946;&#961;&#959;&#965;&#945;&#961;#953;&#959;&#962;",
 "&#924;&#945;&#961;&#964;#953;&#959;&#962;",
 "&#913;&#960;&#961;&#953;&#955;#953;&#959;&#962;",
 "&#924;&#945;&#953;&#959;&#962;",
 "&#921;&#959;&#965;&#957;#953;&#959;&#962;",
 "&#921;&#959;&#965;&#955;#953;&#959;&#962;",
 "&#913;&#965;&#947;&#959;&#965;&#963;&#964;&#959;&#962;",
 "&#931;&#949;&#960;&#964;&#949;&#956;&#946;&#961;#953;&#959;&#962;",
 "&#927;&#954;&#964;&#969;&#946;&#961;#953;&#959;&#962;",
 "&#925;&#959;&#949;&#956;&#946;&#961;#953;&#959;&#962;",
 "&#916;&#949;&#954;&#949;&#956;&#946;&#961;#953;&#959;&#962;");

Calendar._SMN = new Array
("&#921;&#945;&#957;",
 "&#934;&#949;&#946;",
 "&#924;&#945;&#961;",
 "&#913;&#960;&#961;",
 "&#924;&#945;#953;",
 "&#921;&#959;&#965;&#957;",
 "&#921;&#959;&#965;&#955;",
 "&#913;&#965;&#947;",
 "&#931;&#949;&#960;",
 "&#927;&#954;&#964;",
 "&#925;&#959;&#949;",
 "&#916;&#949;&#954;");

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "&#915;#953;&#945; &#964;&#959; &#951;&#956;&#949;&#961;&#959;&#955;&#959;&#947;#953;&#959;";

Calendar._TT["ABOUT"] =
"&#917;&#960;#953;&#955;&#959;&#947;&#949;&#945;&#962; &#951;&#956;&#949;&#961;&#959;&#956;&#951;&#957;&#953;&#945;&#962;/&#969;&#961;&#945;&#962; &#963;&#949; DHTML\n" +
"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" + // don't translate this this ;-)
"&#915;#953;&#945; &#964;&#949;&#959;&#949;&#965;&#964;&#945;&#953;&#945; &#949;&#954;δ&#959;&#963;&#951;: http://www.dynarch.com/projects/calendar/\n" +
"Distributed under GNU LGPL.  See http://gnu.org/licenses/lgpl.html for details." +
"\n\n" +
"&#917;&#960;#953;&#955;&#959;&#947;&#951; &#951;&#956;&#949;&#961;&#959;&#956;&#951;&#957;&#953;&#945;&#962;:\n" +
"- &#935;&#961;&#951;&#963;#953;&#956;&#959;&#960;&#959;#953;&#949;&#953;&#963;&#964;&#949; &#964;&#945; &#954;&#959;&#965;&#956;&#960;#953;&#945; \xab, \xbb &#947;#953;&#945; &#949;&#960;#953;&#955;&#959;&#947;&#951; &#949;&#964;&#959;&#965;&#962;\n" +
"- &#935;&#961;&#951;&#963;#953;&#956;&#959;&#960;&#959;#953;&#949;&#953;&#963;&#964;&#949; &#964;&#945; &#954;&#959;&#965;&#956;&#960;#953;&#945; " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " &#947;#953;&#945; &#949;&#960;#953;&#955;&#959;&#947;&#951; &#956;&#951;&#957;&#945;\n" +
"- &#922;&#961;&#945;&#964;&#951;&#963;&#964;&#949; &#954;&#959;&#965;&#956;&#960;&#953; &#960;&#959;&#957;&#964;#953;&#954;&#959;&#965; &#960;&#945;&#964;&#951;&#956;&#949;&#957;&#959; &#963;&#964;&#945; &#960;&#945;&#961;&#945;&#960;&#945;&#957;&#969; &#954;&#959;&#965;&#956;&#960;#953;&#945; &#947;#953;&#945; &#960;#953;&#959; &#947;&#961;&#951;&#947;&#959;&#961;&#951; &#949;&#960;#953;&#955;&#959;&#947;&#951;.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"&#917;&#960;#953;&#955;&#959;&#947;&#951; &#969;&#961;&#945;&#962;:\n" +
"- &#922;&#945;&#957;&#964;&#949; &#954;&#955;#953;&#954; &#963;&#949; &#949;&#957;&#945; &#945;&#960;&#959; &#964;&#945; &#956;&#949;&#961;&#951; &#964;&#951;&#962; &#969;&#961;&#945;&#962; &#947;#953;&#945; &#945;&#965;&#958;&#951;&#963;&#951;\n" +
"- &#951; Shift-&#954;&#955;#953;&#954; &#947;#953;&#945; &#956;&#949;&#953;&#969;&#963;&#951;\n" +
"- &#951; &#954;&#955;#953;&#954; &#954;&#945;#953; &#956;&#949;&#964;&#945;&#954;&#953;&#957;&#951;&#963;&#951; &#947;#953;&#945; &#960;#953;&#959; &#947;&#961;&#951;&#947;&#959;&#961;&#951; &#949;&#960;#953;&#955;&#959;&#947;&#951;.";
//Calendar._TT["TOGGLE"] = "&#924;&#960;&#945;&#961;&#945; &#960;&#961;&#969;&#964;&#951;&#962; &#951;&#956;&#949;&#961;&#945;&#962; &#964;&#951;&#962; &#949;&#946;δ&#959;&#956;&#945;δ&#945;&#962;";
Calendar._TT["PREV_YEAR"] = "&#928;&#961;&#959;&#951;&#947;. &#949;&#964;&#959;&#962; (&#954;&#961;&#945;&#964;&#951;&#963;&#964;&#949; &#947;#953;&#945; &#964;&#959; &#956;&#949;&#957;&#959;&#965;)";
Calendar._TT["PREV_MONTH"] = "&#928;&#961;&#959;&#951;&#947;. &#956;&#951;&#957;&#945;&#962; (&#954;&#961;&#945;&#964;&#951;&#963;&#964;&#949; &#947;#953;&#945; &#964;&#959; &#956;&#949;&#957;&#959;&#965;)";
Calendar._TT["GO_TODAY"] = "&#931;&#951;&#956;&#949;&#961;&#945;";
Calendar._TT["NEXT_MONTH"] = "&#917;&#960;&#959;&#956;&#949;&#957;&#959;&#962; &#956;&#951;&#957;&#945;&#962; (&#954;&#961;&#945;&#964;&#951;&#963;&#964;&#949; &#947;#953;&#945; &#964;&#959; &#956;&#949;&#957;&#959;&#965;)";
Calendar._TT["NEXT_YEAR"] = "&#917;&#960;&#959;&#956;&#949;&#957;&#959; &#949;&#964;&#959;&#962; (&#954;&#961;&#945;&#964;&#951;&#963;&#964;&#949; &#947;#953;&#945; &#964;&#959; &#956;&#949;&#957;&#959;&#965;)";
Calendar._TT["SEL_DATE"] = "&#917;&#960;#953;&#955;&#949;ξ&#964;&#949; &#951;&#956;&#949;&#961;&#959;&#956;&#951;&#957;&#953;&#945;";
Calendar._TT["DRAG_TO_MOVE"] = "&#931;&#965;&#961;&#964;&#949; &#947;#953;&#945; &#957;&#945; &#956;&#949;&#964;&#945;&#954;#953;&#957;&#951;&#963;&#949;&#964;&#949;";
Calendar._TT["PART_TODAY"] = " (&#963;&#951;&#956;&#949;&#961;&#945;)";
//Calendar._TT["MON_FIRST"] = "Ε&#956;φ&#945;ν#953;&#963;&#951; &#916;&#949;&#965;&#964;&#949;&#961;&#945;&#962; &#960;&#961;ώ&#964;&#945;";
//Calendar._TT["SUN_FIRST"] = "Ε&#956;φ&#945;ν#953;&#963;&#951; &#922;&#965;&#961;#953;&#945;&#954;&#951;&#962; &#960;&#961;ώτ&#945;";

Calendar._TT["DAY_FIRST"] = "Display %s first";

Calendar._TT["WEEKEND"] = "0,6";

Calendar._TT["CLOSE"] = "&#922;&#955;&#949;&#953;&#963;#953;&#956;&#959;";
Calendar._TT["TODAY"] = "&#931;&#951;&#956;&#949;&#961;&#945;";
Calendar._TT["TIME_PART"] = "(Shift-)&#954;&#955;#953;&#954; &#951; &#956;&#949;&#964;&#945;&#954;*#953;&#957;&#951;&#963;&#951; &#947;#953;&#945; &#945;&#955;&#955;&#945;&#947;&#951;";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "dd-mm-y";
Calendar._TT["TT_DATE_FORMAT"] = "D, d M";

Calendar._TT["WK"] = "&#949;&#946;&#948;";
Calendar._TT["TIME"] = "Time:";

