/* SRM timetable - shared source data. Edit here only; both views read this file. */

var TIME = [
  ["08:00","08:50"],["08:50","09:40"],["09:45","10:35"],["10:40","11:30"],
  ["11:35","12:25"],["12:30","13:20"],["13:25","14:15"],["14:20","15:10"],
  ["15:10","16:00"],["16:00","16:50"],["16:50","17:30"],["17:30","18:10"]
];

var SLOTGRID = {
  1:["A","A","F","F","G","P6","P7","P8","P9","P10","L11","L12"],
  2:["P11","P12","P13","P14","P15","B","B","G","G","A","L21","L22"],
  3:["C","C","A","D","B","P26","P27","P28","P29","P30","L31","L32"],
  4:["P31","P32","P33","P34","P35","D","D","B","E","C","L41","L42"],
  5:["E","E","C","F","D","P46","P47","P48","P49","P50","L51","L52"]
};

var COURSES = {
  BTB:{code:"26BTB1001T",name:"Introduction to Computational Biology",credit:2,
    faculty:"Ambikah Gandhi Mathi A G",empId:"104022",fill:"var(--c-bio)",bar:"var(--c-bio-bar)",
    theory:{slot:"G",location:"Annexure-II",building:"University Building",floor:"7th floor",room:"702"}},
  MEE:{code:"26MEE1001L",name:"Workshop Practice",credit:2,
    faculty:"Dr. Rajprasad J",empId:"100983",fill:"var(--c-work)",bar:"var(--c-work-bar)",
    lab:{slot:"P7, P8, P9, P10",location:"Annexure-I",building:"Basic Engineering Lab (BEL)",floor:"Ground floor",room:"Sheet Metal Lab"}},
  CYB:{code:"26CYB1002J",name:"Chemistry for Computer Science",credit:4,
    faculty:"Dr. Arun Prakash P",empId:"103311",fill:"var(--c-chem)",bar:"var(--c-chem-bar)",
    theory:{slot:"B",location:"Annexure-II",building:"University Building",floor:"7th floor",room:"702"},
    lab:{slot:"P31, P32",location:"Annexure-II",building:"Chemistry Lab Block",floor:"1st floor",room:"Chemistry Laboratory 4"}},
  CSE:{code:"26CSE1002J",name:"Programming for Problem Solving",credit:3,
    faculty:"Dr. Aqib Khan",empId:"103566",fill:"var(--c-prog)",bar:"var(--c-prog-bar)",
    theory:{slot:"E",location:"Annexure-II",building:"University Building",floor:"7th floor",room:"702"},
    lab:{slot:"P47, P48",location:"Annexure-I",building:"Tech Park",floor:"4th floor",room:"Computer Forensics Lab"}},
  MAB:{code:"26MAB1001T",name:"Calculus and Linear Algebra",credit:4,
    faculty:"Dr. Suresh M",empId:"101984",fill:"var(--c-math)",bar:"var(--c-math-bar)",
    theory:{slot:"D",location:"Annexure-II",building:"University Building",floor:"7th floor",room:"702"}},
  LCA:{code:"26LCA1003J",name:"French",credit:3,
    faculty:"Dr. Velupula Krishnaiah",empId:"103405",fill:"var(--c-lca)",bar:"var(--c-lca-bar)",
    theory:{slot:"F",location:"Annexure-II",building:"University Building",floor:"5th floor",room:"504"}}
};
var ORDER = ["BTB","MEE","CYB","CSE","MAB","LCA"];

var TT = {
  1:{3:["LCA","theory"],4:["LCA","theory"],5:["BTB","theory"],7:["MEE","lab"],8:["MEE","lab"],9:["MEE","lab"],10:["MEE","lab"]},
  2:{6:["CYB","theory"],7:["CYB","theory"],8:["BTB","theory"],9:["BTB","theory"]},
  3:{4:["MAB","theory"],5:["CYB","theory"]},
  4:{1:["CYB","lab"],2:["CYB","lab"],6:["MAB","theory"],7:["MAB","theory"],8:["CYB","theory"],9:["CSE","theory"]},
  5:{1:["CSE","theory"],2:["CSE","theory"],4:["LCA","theory"],5:["MAB","theory"],7:["CSE","lab"],8:["CSE","lab"]}
};

var RAW = ["07-21|1|1","07-22|2|1","07-23|3|1","07-24|4|1","07-27|5|1","07-28|1|2","07-29|2|2","07-30|3|2","07-31|4|2","08-03|5|2","08-04|1|3","08-05|2|3","08-06|3|3","08-07|4|3","08-10|5|3","08-11|1|4","08-12|2|4","08-13|3|4","08-14|4|4","08-17|5|4","08-18|1|5","08-19|2|5","08-20|3|5","08-21|4|5","08-24|H|Classes Suspended","08-25|5|5","08-26|H|Milad-un-nabi","08-27|1|6","08-28|2|6","08-31|3|6","09-01|4|6","09-02|5|6","09-03|1|7","09-04|H|Krishna Jayanthi","09-07|2|7","09-08|3|7","09-09|4|7","09-10|5|7","09-11|1|8","09-14|H|Vinayagar Chathurthi","09-15|2|8","09-16|3|8","09-17|4|8","09-18|5|8","09-21|1|9","09-22|2|9","09-23|3|9","09-24|4|9","09-25|5|9","09-28|1|10","09-29|2|10","09-30|3|10","10-01|4|10","10-02|H|Gandhi Jayanthi","10-05|5|10","10-06|1|11","10-07|2|11","10-08|3|11","10-09|4|11","10-12|5|11","10-13|1|12","10-14|2|12","10-15|3|12","10-16|4|12","10-19|H|Ayutha Pooja","10-20|H|Vijaya Dasami","10-21|5|12","10-22|1|13","10-23|2|13","10-26|3|13","10-27|4|13","10-28|5|13","10-29|1|14","10-30|2|14","11-02|3|14","11-03|4|14","11-04|5|14","11-05|1|15","11-06|2|15","11-09|3|15","11-10|4|15","11-11|5|15","11-12|1|16","11-13|2|16","11-16|3|16","11-17|4|16","11-18|5|16","11-19|1|17","11-20|2|17|Last Working Day - PG","11-23|3|17","11-24|4|17","11-25|5|17","11-26|1|18","11-27|2|18","11-30|3|18","12-01|4|18","12-02|5|18","12-03|1|19","12-04|2|19","12-07|3|19|Last Working Day - UG First Year"];

var CAL = {};
RAW.forEach(function(l){
  var p = l.split("|"), k = "2026-" + p[0];
  CAL[k] = p[1] === "H" ? {holiday:p[2]} : {day:+p[1], week:+p[2], note:p[3] || ""};
});
