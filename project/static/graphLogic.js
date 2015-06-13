




// function takeoutExtraInfoAndCutDataInHalf(n){
//   var result = []

//   n.forEach(function(inputArr){
//     var arr = [];
//     for(var i = 0; i < inputArr.length; i++){
//       if(i < 7){
//         arr.push(inputArr[i]);
//       }
//     }
//     result.push(arr);
//   });
//   return result;
// }
// var data = takeoutExtraInfoAndCutDataInHalf(data)
// console.log(data)

queue()
    .defer(d3.json, "/")
    .await(makeGraphs);

// makeGraphs()
function makeGraphs(){
  console.log("IN MAKE GRAPHS")

  //["Date", "Open", "High", "Low", "Close", "Volume", "Ex-Dividend", "Split Ratio", "Adj. Open", "Adj. High", "Adj. Low", "Adj. Close", "Adj. Volume"]
  var data = [
  [ '2015-06-30', 28.47, 28.91, 28.27, 28.66, 25630702, 0 ],
  [ '2015-05-31', 29.32, 29.59, 29.19, 29.33, 25217443, 0 ],
  [ '2015-04-30', 28.85, 29.015, 28.68, 28.83, 26037228, 0 ],
  [ '2015-03-31', 27.34, 27.69, 27.28, 27.525, 27315552, 0.21 ],
  [ '2015-02-28', 29.89, 29.91, 29.38, 29.51, 29113520, 0 ],
  [ '2015-01-31', 26.88, 27.11, 26.32, 26.365, 38153354, 0 ],
  [ '2014-12-31', 28.28, 28.41, 27.81, 27.82, 21478700, 0 ],
  [ '2014-11-30', 27.52, 27.78, 27.36, 27.64, 18138900, 0 ],
  [ '2014-10-31', 24.59, 24.64, 24.18, 24.47, 30379100, 0 ],
  [ '2014-09-30', 24.9, 25.25, 24.85, 25.17, 36919300, 0.19 ],
  [ '2014-08-31', 24.9, 24.99, 24.76, 24.99, 17972300, 0 ],
  [ '2014-07-31', 25.48, 25.5, 25.17, 25.23, 28219900, 0 ],
  [ '2014-06-30', 24.67, 24.9, 24.62, 24.85, 23992100, 0 ],
  [ '2014-05-31', 24.71, 24.75, 24.48, 24.62, 29381600, 0 ],
  [ '2014-04-30', 23.08, 23.14, 22.92, 23.11, 23948500, 0 ],
  [ '2014-03-31', 22.49, 22.64, 22.4, 22.42, 32887800, 0 ],
  [ '2014-02-28', 21.97, 22.11, 21.7, 21.8, 40863200, 0 ],
  [ '2014-01-31', 21.61, 21.99, 21.61, 21.91, 43325300, 0 ],
  [ '2013-12-31', 22.25, 22.47, 22.15, 22.43, 33240500, 0 ],
  [ '2013-11-30', 21.39, 21.44, 21.2, 21.25, 25043700, 0 ],
  [ '2013-10-31', 22.64, 22.71, 22.44, 22.56, 34497400, 0 ],
  [ '2013-09-30', 23.12, 23.53, 23.02, 23.43, 40335700, 0 ],
  [ '2013-08-31', 23.46, 23.55, 23.22, 23.31, 35248400, 0 ],
  [ '2013-07-31', 25.8, 25.89, 25.55, 25.59, 30709400, 0 ],
  [ '2013-06-30', 24.43, 24.61, 24.3, 24.34, 35574300, 0 ],
  [ '2013-05-31', 24.2, 24.53, 24.08, 24.12, 40885800, 0 ],
  [ '2013-04-30', 20.99, 21.25, 20.8, 20.92, 37777300, 0 ],
  [ '2013-03-31', 20.84, 20.94, 20.77, 20.9, 28323200, 0 ],
  [ '2013-02-28', 20.89, 21.05, 20.74, 20.86, 30337500, 0 ],
  [ '2013-01-31', 20.62, 20.9, 20.56, 20.57, 29992500, 0 ],
  [ '2012-12-31', 19.38, 19.76, 19.31, 19.65, 32388300, 0 ],
  [ '2012-11-30', 19.04, 19.13, 18.83, 18.91, 45199100, 0 ],
  [ '2012-10-31', 17.38, 17.43, 17.01, 17.15, 36797100, 0 ],
  [ '2012-09-30', 19, 19.36, 19, 19.1, 61124700, 0 ],
  [ '2012-08-31', 19.1, 19.25, 18.92, 19.08, 38502400, 0 ],
  [ '2012-07-31', 15.87, 16.11, 15.85, 15.95, 33961900, 0 ],
  [ '2012-06-30', 16.79, 17.17, 16.73, 17.17, 51020200, 0 ],
  [ '2012-05-31', 16.36, 16.52, 16.26, 16.33, 51969400, 0 ],
  [ '2012-04-30', 19.85, 20.17, 19.82, 20.16, 36405500, 0 ],
  [ '2012-03-31', 21.12, 21.19, 20.98, 21.15, 35673900, 0 ],
  [ '2012-02-29', 20.18, 20.2, 19.84, 19.88, 46229800, 0 ],
  [ '2012-01-31', 19.69, 19.73, 19.44, 19.65, 40629600, 0 ],
  [ '2011-12-31', 18.19, 18.29, 18.05, 18.08, 20775000, 0 ],
  [ '2011-11-30', 18.24, 18.79, 18.16, 18.64, 74532800, 0 ],
  [ '2011-10-31', 18.34, 18.55, 18.21, 18.53, 50718200, 0 ],
  [ '2011-09-30', 15.63, 15.77, 15.48, 15.5, 50447300, 0 ],
  [ '2011-08-31', 15.73, 15.95, 15.54, 15.67, 50687300, 0 ],
  [ '2011-07-31', 15.9, 16.13, 15.8, 15.97, 66844900, 0 ],
  [ '2011-06-30', 15.36, 15.66, 15.34, 15.61, 52609600, 0 ],
  [ '2011-05-31', 16.59, 16.82, 16.51, 16.8, 56638700, 0 ],
  [ '2011-04-30', 17.32, 17.56, 17.26, 17.52, 137455300, 0 ],
  [ '2011-03-31', 17.32, 17.45, 17.15, 17.15, 64974000, 0 ],
  [ '2011-02-28', 18.62, 18.75, 18.51, 18.56, 62256300, 0 ],
  [ '2011-01-31', 20.93, 21.18, 20.71, 21.15, 40390800, 0 ],
  [ '2010-12-31', 20.24, 20.24, 20.08, 20.23, 28677200, 0 ],
  [ '2010-11-30', 19.24, 19.35, 19.13, 19.16, 63406700, 0 ],
  [ '2010-10-31', 23.12, 23.22, 22.82, 22.86, 44587900, 0 ],
  [ '2010-09-30', 22.05, 22.28, 21.67, 21.9, 56848900, 0 ],
  [ '2010-08-31', 20.11, 20.37, 19.82, 19.99, 94440300, 0 ],
  [ '2010-07-31', 23.02, 23.4, 22.88, 23.07, 42185400, 0 ],
  [ '2010-06-30', 21.52, 21.73, 21.24, 21.31, 57128000, 0 ],
  [ '2010-05-31', 23.52, 23.57, 22.99, 23.16, 56435900, 0 ],
  [ '2010-04-30', 27.68, 27.74, 26.92, 26.93, 41886700, 0 ],
  [ '2010-03-31', 26.52, 26.61, 25.96, 26.03, 54745100, 0 ],
  [ '2010-02-28', 24.36, 24.46, 24.21, 24.33, 30719800, 0 ],
  [ '2010-01-31', 22.95, 23.13, 22.44, 22.47, 73431900, 0 ],
  [ '2009-12-31', 24.1, 24.17, 23.94, 23.94, 25208100, 0 ],
  [ '2009-11-30', 23.31, 23.54, 23.19, 23.4, 34349100, 0 ],
  [ '2009-10-31', 23.46, 23.48, 22.64, 22.81, 61218300, 0 ],
  [ '2009-09-30', 23.55, 23.79, 22.96, 23.54, 64479300, 0 ],
  [ '2009-08-31', 21.74, 21.84, 21.51, 21.6, 31405700, 0 ],
  [ '2009-07-31', 21.94, 22.18, 21.85, 22.01, 41668100, 0 ],
  [ '2009-06-30', 18.94, 19.07, 18.53, 18.65, 53792300, 0 ],
  [ '2009-05-31', 18.54, 18.6, 18.09, 18.5, 61032200, 0 ],
  [ '2009-04-30', 19.69, 19.93, 19.1, 19.32, 60350800, 0 ],
  [ '2009-03-31', 16.53, 17.01, 16.37, 16.77, 59050200, 0 ],
  [ '2009-02-28', 14.3, 14.82, 14.3, 14.57, 76734300, 0 ],
  [ '2009-01-31', 15.91, 16.09, 14.91, 14.97, 75292400, 0 ],
  [ '2008-12-31', 16.18, 16.55, 16.12, 16.3, 37513700, 0 ],
  [ '2008-11-30', 16.19, 16.55, 16.16, 16.54, 22344900, 0 ],
  [ '2008-10-31', 17.79, 17.98, 17.32, 17.77, 82517500, 0 ],
  [ '2008-09-30', 22.25, 22.61, 21.84, 22.56, 60991400, 0 ],
  [ '2008-08-31', 24.35, 24.35, 23.91, 24.05, 33139500, 0 ],
  [ '2008-07-31', 22.06, 22.6, 21.98, 21.99, 56591900, 0 ],
  [ '2008-06-30', 23.47, 23.73, 23.16, 23.26, 48836500, 0 ],
  [ '2008-05-31', 26.15, 26.92, 26.13, 26.72, 61435900, 0 ],
  [ '2008-04-30', 25.69, 25.97, 25.51, 25.64, 52347900, 0 ],
  [ '2008-03-31', 24.08, 24.41, 23.96, 24.09, 51471000, 0 ],
  [ '2008-02-29', 24.3, 24.77, 24.28, 24.39, 72410000, 0 ],
  [ '2008-01-31', 23.98, 24.7, 23.89, 24.5, 76312400, 0 ],
  [ '2007-12-31', 27.25, 27.5, 27, 27.07, 60736600, 0 ],
  [ '2007-11-30', 28.4, 28.41, 27.68, 28.02, 65641700, 0 ],
  [ '2007-10-31', 32.94, 33.19, 32.49, 33.06, 54876500, 0 ],
  [ '2007-09-30', 33.14, 33.38, 32.97, 33.13, 33792100, 0 ],
  [ '2007-08-31', 31.87, 31.98, 31.67, 31.92, 39064400, 0 ],
  [ '2007-07-31', 29.82, 29.86, 28.91, 28.91, 53750200, 0 ],
  [ '2007-06-30', 27.98, 28.06, 27.65, 27.85, 44996100, 0 ],
  [ '2007-05-31', 26.74, 26.99, 26.49, 26.92, 76344400, 0 ],
  [ '2007-04-30', 27, 27.2, 26.74, 26.74, 50368000, 0 ],
  [ '2007-03-31', 25.43, 25.65, 25.11, 25.53, 38922900, 0 ],
  [ '2007-02-28', 25.8, 26.25, 25.75, 25.94, 63725500, 0 ],
  [ '2007-01-31', 26.19, 26.81, 26.05, 26.62, 60517900, 0 ],
  [ '2006-12-31', 27.33, 27.63, 27.29, 27.33, 27125900, 0 ],
  [ '2006-11-30', 27.02, 27.05, 26.8, 26.91, 45935300, 0 ],
  [ '2006-10-31', 24.16, 24.39, 24.02, 24.13, 45209900, 0 ],
  [ '2006-09-30', 23.44, 23.53, 22.96, 22.98, 38149200, 0 ],
  [ '2006-08-31', 21.65, 22.15, 21.65, 21.99, 85353600, 0 ],
  [ '2006-07-31', 17.99, 18.36, 17.85, 17.88, 49167000, 0 ],
  [ '2006-06-30', 20.01, 20.03, 19.52, 19.53, 52846800, 0 ],
  [ '2006-05-31', 19.81, 20.03, 19.51, 19.68, 56955900, 0 ],
  [ '2006-04-30', 21, 21.3, 20.77, 20.95, 42941100, 0 ],
  [ '2006-03-31', 21.95, 22, 21.67, 21.67, 54881800, 0 ],
  [ '2006-02-28', 19.96, 20.4, 19.86, 20.24, 137099800, 0 ],
  [ '2006-01-31', 18.7, 18.74, 18.32, 18.57, 64719200, 0 ],
  [ '2005-12-31', 17.12, 17.19, 17.07, 17.12, 39290000, 0 ],
  [ '2005-11-30', 17.52, 17.75, 17.5, 17.54, 47405500, 0 ],
  [ '2005-10-31', 17.16, 17.54, 17.15, 17.45, 79135500, 0 ],
  [ '2005-09-30', 17.79, 17.94, 17.65, 17.92, 56270900, 0 ],
  [ '2005-08-31', 17.55, 17.67, 17.44, 17.62, 41540900, 0 ],
  [ '2005-07-31', 19.32, 19.4, 19.11, 19.15, 38389000, 0 ],
  [ '2005-06-30', 19.44, 19.49, 19.06, 19.08, 44756000, 0 ],
  [ '2005-05-31', 19.61, 19.63, 19.34, 19.4, 61667800, 0 ],
  [ '2005-04-30', 17.19, 17.3, 17.04, 17.27, 49386700, 0 ],
  [ '2005-03-31', 18.02, 18.14, 17.86, 17.89, 46338200, 0 ],
  [ '2005-02-28', 17.2, 17.56, 17.17, 17.42, 62138100, 0 ],
  [ '2005-01-31', 18.15, 18.3, 17.98, 18.04, 51573700, 0 ],
  [ '2004-12-31', 19.39, 19.5, 19.26, 19.32, 29132500, 0 ],
  [ '2004-11-30', 18.85, 19.15, 18.71, 18.75, 63515000, 0 ],
  [ '2004-10-31', 18.96, 19.37, 18.9, 19.21, 73345000, 0 ],
  [ '2004-09-30', 18.28, 18.36, 18.05, 18.1, 40058700, 0 ],
  [ '2004-08-31', 19.15, 19.19, 18.43, 18.76, 64745900, 0 ],
  [ '2004-07-31', 20.82, 21.3, 20.75, 20.92, 49267200, 0 ],
  [ '2004-06-30', 23.78, 23.98, 23.5, 23.7, 50526900, 0 ],
  [ '2004-05-31', 22.6, 22.61, 22.15, 22.37, 36220400, 0 ],
  [ '2004-04-30', 21.73, 21.91, 20.82, 20.91, 88594800, 0 ],
  [ '2004-03-31', 23.93, 23.99, 23.5, 23.57, 51583000, 0 ],
  [ '2004-02-29', 23.49, 23.69, 23.06, 23.16, 51031700, 0 ],
  [ '2004-01-31', 26.37, 26.45, 25.4, 25.71, 71799500, 0 ],
  [ '2003-12-31', 24.17, 24.31, 23.99, 24.23, 30388600, 0 ],
  [ '2003-11-30', 22.71, 22.86, 22.61, 22.7, 13572800, 0 ],
  [ '2003-10-31', 20.98, 21.12, 20.83, 20.93, 38105900, 0 ],
  [ '2003-09-30', 20.06, 20.13, 19.3, 19.59, 64659700, 0 ],
  [ '2003-08-31', 19.1, 19.37, 19.07, 19.14, 30008800, 0 ],
  [ '2003-07-31', 19.47, 19.81, 19.4, 19.49, 71706500, 0 ],
  [ '2003-06-30', 17.08, 17.22, 16.52, 16.79, 46270100, 0 ],
  [ '2003-05-31', 16.8, 16.86, 16.27, 16.41, 67567500, 0 ],
  [ '2003-04-30', 15.19, 15.22, 14.94, 15, 64638700, 0 ],
  [ '2003-03-31', 13.02, 13.15, 12.86, 12.98, 66180200, 0 ],
  [ '2003-02-28', 13.76, 14.09, 13.75, 13.98, 57993200, 0 ],
  [ '2003-01-31', 13.56, 13.74, 13.16, 13.37, 103330200, 0 ],
  [ '2002-12-31', 12.95, 13.17, 12.9, 13.1, 46597500, 0 ],
  [ '2002-11-30', 15.12, 15.19, 14.89, 14.92, 29261000, 0 ],
  [ '2002-10-31', 11.05, 11.4, 10.9, 11.18, 94259100, 0 ],
  [ '2002-09-30', 10.99, 11.08, 10.39, 10.48, 103352600, 0 ],
  [ '2002-08-31', 13.95, 14.09, 13.71, 13.82, 48710400, 0 ],
  [ '2002-07-31', 13.15, 13.25, 12.7, 13.19, 79309000, 0 ],
  [ '2002-06-30', 13.74, 14.3, 13.58, 13.95, 80577100, 0 ],
  [ '2002-05-31', 16.29, 16.54, 15.75, 15.78, 50648100, 0 ],
  [ '2002-04-30', 14.02, 14.98, 14.01, 14.65, 73316700, 0 ],
  [ '2002-03-31', 16.42, 17.12, 16.3, 16.93, 52836300, 0 ],
  [ '2002-02-28', 14.5, 14.99, 14.24, 14.27, 100935200, 0 ],
  [ '2002-01-31', 19.48, 19.81, 19.04, 19.8, 62995800, 0 ],
  [ '2001-12-31', 18.45, 18.93, 18.06, 18.11, 61550500, 0 ],
  [ '2001-11-30', 19.95, 20.5, 19.81, 20.44, 74661300, 0 ],
  [ '2001-10-31', 17.14, 17.41, 16.61, 16.92, 85724000, 0 ],
  [ '2001-09-30', 11.58, 12.23, 11.47, 12.18, 92085300, 0 ],
  [ '2001-08-31', 15.88, 17, 15.75, 16.33, 45434400, 0 ],
  [ '2001-07-31', 19.04, 19.75, 18.68, 19.22, 61467400, 0 ],
  [ '2001-06-30', 18.77, 20, 18.1, 18.2, 87250800, 0 ],
  [ '2001-05-31', 19.09, 20.16, 19.05, 19.26, 57099600, 0 ],
  [ '2001-04-30', 16.5, 17.55, 16.5, 16.98, 88925800, 0 ],
  [ '2001-03-31', 15.56, 16.25, 15, 15.81, 99565700, 0 ],
  [ '2001-02-28', 24.38, 25, 23.25, 23.69, 118246500, 0 ],
  [ '2001-01-31', 38.81, 39.5, 37.31, 37.44, 83891100, 0 ],
  [ '2000-12-31', 38.88, 39.5, 37, 38.25, 72819200, 0 ],
  [ '2000-11-30', 50.19, 50.94, 45.19, 47.88, 10840500, 0 ],
  [ '2000-10-31', 48.38, 54.5, 48.19, 53.88, 87881100, 0 ],
  [ '2000-09-30', 58.86, 59.31, 55.19, 55.25, 44248700, 0 ],
  [ '2000-08-31', 66.94, 68.94, 66.81, 68.62, 46835300, 0 ],
  [ '2000-07-31', 62.89, 66, 62.56, 65.44, 51109200, 0 ],
  [ '2000-06-30', 60.81, 63.69, 60.12, 63.56, 34402600, 0 ],
  [ '2000-05-31', 58.94, 60.25, 56.38, 56.94, 49611300, 0 ],
  [ '2000-04-30', 69.38, 70, 68.06, 69.33, 34352200, 0 ],
  [ '2000-03-31', 74.36, 77.81, 72.25, 77.31, 53212600, 0 ],
  [ '2000-02-29', 132.36, 133.94, 129.27, 132.19, 20844300, 0 ],
  [ '2000-01-31', 102.94, 109.62, 100, 109.5, 33457300, 0 ],
  [ '1999-12-31', 106.69, 107.19, 105.94, 107.12, 5363200, 0 ],
  [ '1999-11-30', 92.62, 92.62, 88.38, 89.19, 21766800, 0 ],
  [ '1999-10-31', 72.5, 74.5, 72.25, 74, 28303800, 0 ],
  [ '1999-09-30', 67.38, 68.94, 66.38, 68.56, 19406100, 0 ],
  [ '1999-08-31', 67.25, 68.62, 66, 67.81, 20315100, 0 ],
  [ '1999-07-31', 62.19, 63.81, 62, 62.12, 15465800, 0 ],
  [ '1999-06-30', 62.38, 65.44, 61.62, 64.44, 28631300, 0 ],
  [ '1999-05-31', 107.88, 109.12, 106.5, 109, 7333000, 0 ],
  [ '1999-04-30', 112.19, 114.25, 109.75, 114.06, 13793600, 0 ],
  [ '1999-03-31', 111.31, 112.5, 109.38, 109.56, 11591900, 0 ],
  [ '1999-02-28', 98.25, 98.38, 95.5, 97.81, 14424800, 0 ],
  [ '1999-01-31', 109, 112, 106.88, 111.56, 19043500, 0 ],
  [ '1998-12-31', 92.88, 94, 91.81, 92.81, 7255400, 0 ],
  [ '1998-11-30', 80.12, 80.38, 74.81, 75.38, 14538400, 0 ],
  [ '1998-10-31', 63.5, 63.75, 62, 63, 14386400, 0 ],
  [ '1998-09-30', 63.44, 64.38, 61, 61.81, 18426000, 0 ],
  [ '1998-08-31', 94.69, 95.88, 81.5, 81.87, 37385866.666667, 0 ],
  [ '1998-07-31', 98.94, 100, 95.25, 95.75, 10113866.666667, 0 ],
  [ '1998-06-30', 91.38, 94.25, 90.38, 92.06, 12950000, 0 ],
  [ '1998-05-31', 78.06, 78.12, 75.44, 75.63, 5994000, 0 ],
  [ '1998-04-30', 72.94, 74.75, 72.87, 73.25, 9176000, 0 ],
  [ '1998-03-31', 68, 69, 67.62, 68.37, 6098266.6666667, 0 ],
  [ '1998-02-28', 67.12, 68.5, 65.88, 65.88, 9739866.6666667, 0 ],
  [ '1998-01-31', 64.31, 64.38, 62.75, 63.06, 8654800, 0 ],
  [ '1997-12-31', 56.37, 57.25, 55.25, 55.75, 7506800, 0 ],
  [ '1997-11-30', 84.88, 86.81, 84.44, 86.25, 2037200, 0 ],
  [ '1997-10-31', 81, 82.25, 79.44, 82.03, 12273066.666667, 0 ],
  [ '1997-09-30', 73.25, 74.63, 73, 73.06, 7000977.7777778, 0 ],
  [ '1997-08-31', 74.63, 76.19, 74.38, 75.38, 4564844.4444444, 0 ],
  [ '1997-07-31', 79.75, 80.13, 78.75, 79.56, 4355244.4444444, 0 ],
  [ '1997-06-30', 66.44, 68.19, 65, 67.12, 7802044.4444444, 0 ],
  [ '1997-05-31', 63.5, 68, 62.5, 67.75, 15940266.666667, 0 ],
  [ '1997-04-30', 49.75, 53.13, 49.63, 51.75, 18784977.777778, 0 ],
  [ '1997-03-31', 50.37, 50.88, 48.12, 48.12, 13918000, 0 ],
  [ '1997-02-28', 55.25, 57.31, 53.87, 55.63, 14494266.666667, 0 ],
  [ '1997-01-31', 67.88, 69.88, 67.88, 69.75, 12822666.666667, 0 ],
  [ '1996-12-31', 65, 65.12, 63.56, 63.62, 2689466.6666667, 0 ],
  [ '1996-11-30', 68.12, 68.25, 67.63, 67.88, 1169644.4444444, 0 ],
  [ '1996-10-31', 58.25, 61.88, 58.25, 61.88, 8699866.6666667, 0 ],
  [ '1996-09-30', 63, 63.75, 62, 62.06, 4409644.4444444, 0 ],
  [ '1996-08-31', 54.13, 54.25, 52.37, 52.75, 4613377.7777778, 0 ],
  [ '1996-07-31', 51.5, 52.13, 50.37, 51.75, 5891066.6666667, 0 ],
  [ '1996-06-30', 55.25, 57.12, 55.12, 56.63, 6467644.4444444, 0 ],
  [ '1996-05-31', 54.62, 55.25, 54.38, 54.75, 4283777.7777778, 0 ],
  [ '1996-04-30', 51.75, 52.13, 51.37, 51.88, 3279600, 0 ],
  [ '1996-03-31', 46.25, 47.28, 46.25, 46.38, 5920400, 0 ],
  [ '1996-02-29', 47.12, 48.5, 46.12, 47.5, 8175777.7777778, 0 ],
  [ '1996-01-31', 82.38, 84.25, 81.37, 83.25, 5280488.8888889, 0 ],
  [ '1995-12-31', 75.25, 75.75, 74.37, 74.62, 3628000, 0 ],
  [ '1995-11-30', 85.13, 85.38, 83.13, 84.12, 5367800, 0 ],
  [ '1995-10-31', 81.25, 81.37, 77.5, 77.5, 4649688.8888889, 0 ],
  [ '1995-09-30', 71.13, 71.39, 68.25, 69, 4730888.8888889, 0 ],
  [ '1995-08-31', 64.63, 66.5, 64.25, 65.62, 4889000, 0 ],
  [ '1995-07-31', 56.5, 56.75, 54.75, 55.75, 2756200, 0 ],
  [ '1995-06-30', 51.13, 51.5, 50.37, 50.56, 2166400, 0 ],
  [ '1995-05-31', 43.75, 43.88, 42.25, 43.75, 5877800, 0 ],
  [ '1995-04-30', 39.5, 40.13, 38.5, 39.88, 2708288.8888889, 0 ],
  [ '1995-03-31', 36.12, 38.25, 35.38, 38.13, 6011600, 0 ],
  [ '1995-02-28', 33.75, 34, 33.11, 33.75, 3363200, 0 ],
  [ '1995-01-31', 32.75, 33.87, 32.5, 33.38, 3645400, 0 ],
  [ '1994-12-31', 35, 35.25, 34.5, 35.13, 1689688.8888889, 0 ],
  [ '1994-11-30', 33, 33.38, 32.25, 32.25, 3188600, 0 ],
  [ '1994-10-31', 30, 30.38, 29.87, 30.12, 3878288.8888889, 0 ],
  [ '1994-09-30', 26.13, 27.62, 26, 27.37, 11673088.888889, 0 ],
  [ '1994-08-31', 26, 26.13, 24.75, 24.81, 3432888.8888889, 0 ],
  [ '1994-07-31', 20.25, 21.25, 20.13, 21, 8604688.8888889, 0 ],
  [ '1994-06-30', 24, 24.44, 23.12, 23.37, 1958488.8888889, 0 ],
  [ '1994-05-31', 25.37, 25.5, 24.63, 24.75, 2199888.8888889, 0 ],
  [ '1994-04-30', 31.25, 31.5, 30.25, 30.31, 3779800, 0 ],
  [ '1994-03-31', 32.75, 34.5, 32, 34.25, 5075488.8888889, 0 ],
  [ '1994-02-28', 73.75, 75, 73.25, 73.75, 1719300, 0 ],
  [ '1994-01-31', 70.5, 72.5, 70.5, 72.5, 2842300, 0 ],
  [ '1993-12-31', 65.5, 65.75, 64.5, 64.63, 2653000, 0 ],
  [ '1993-11-30', 55.75, 57, 55.25, 56.25, 1440600, 0 ],
  [ '1993-10-31', 50, 52, 49.75, 51.25, 1860300, 0 ],
  [ '1993-09-30', 51.75, 52, 49.75, 50, 2430100, 0 ],
  [ '1993-08-31', 50.5, 51, 47.25, 47.75, 7352400, 0 ],
  [ '1993-07-31', 52.25, 52.5, 51.25, 51.87, 1266700, 0 ],
  [ '1993-06-30', 55.75, 56.75, 54, 54.75, 1515500, 0 ],
  [ '1993-05-31', 54.5, 54.5, 51.75, 54, 2377500, 0 ],
  [ '1993-04-30', 43.75, 44.5, 41, 41.25, 2481800, 0 ],
  [ '1993-03-31', 44.25, 46, 43.75, 44.75, 1428700, 0 ],
  [ '1993-02-28', 87, 88.75, 86.5, 87.75, 957100, 0 ],
  [ '1993-01-31', 88.25, 88.75, 87.25, 88.5, 589300, 0 ],
  [ '1992-12-31', 78.75, 80.25, 78.25, 78.62, 601500, 0 ],
  [ '1992-11-30', 74.75, 75, 72.75, 74.75, 1678200, 0 ],
  [ '1992-10-31', 61.25, 61.25, 59.25, 60, 789800, 0 ],
  [ '1992-09-30', 53.25, 53.25, 52.25, 52.88, 280300, 0 ],
  [ '1992-08-31', 46.5, 47, 45.25, 46.87, 628500, 0 ],
  [ '1992-07-31', 52.75, 53.75, 52, 53.38, 628800, 0 ],
  [ '1992-06-30', 47.25, 47.38, 46.25, 47, 942000, 0 ],
  [ '1992-05-31', 42, 45.75, 42, 45.75, 2200600, 0 ],
  [ '1992-04-30', 35.75, 37.75, 35.25, 36.5, 1042100, 0 ],
  [ '1992-03-31', 39, 40.75, 39, 39.5, 783300, 0 ],
  [ '1992-02-29', 82.25, 83.13, 81, 81.5, 287000, 0 ],
  [ '1992-01-31', 74.5, 76.5, 73.75, 75.12, 624800, 0 ],
  [ '1991-12-31', 68, 68.25, 65.25, 66.25, 738000, 0 ],
  [ '1991-11-30', 49.5, 50, 49, 49.5, 168500, 0 ],
  [ '1991-10-31', 47.5, 49.5, 47.25, 48.75, 913000, 0 ],
  [ '1991-09-30', 39.75, 41.25, 39.25, 41, 535900, 0 ],
  [ '1991-08-31', 45.25, 45.75, 45, 45.37, 178300, 0 ],
  [ '1991-07-31', 38.75, 39.5, 37.25, 39.25, 805400, 0 ],
  [ '1991-06-30', 31.25, 31.25, 29.5, 30.5, 494500, 0 ],
  [ '1991-05-31', 33, 33, 31.75, 32.25, 425700, 0 ],
  [ '1991-04-30', 28.5, 29.75, 28.25, 29.75, 541500, 0 ],
  [ '1991-03-31', 26.5, 26.5, 24, 24.37, 2095200, 0 ],
  [ '1991-02-28', 54.25, 56.38, 54, 56, 460500, 0 ],
  [ '1991-01-31', 57.5, 59.5, 57.12, 58.5, 480700, 0 ],
  [ '1990-12-31', 44.25, 45.12, 44, 44.88, 103000, 0 ],
  [ '1990-11-30', 38, 39.5, 37.75, 39.5, 355200, 0 ],
  [ '1990-10-31', 29.25, 30.25, 29, 29.5, 282100, 0 ],
  [ '1990-09-30', 22.25, 22.5, 21.75, 22.5, 538300, 0 ],
  [ '1990-08-31', 24.75, 25.25, 24.75, 24.75, 42300, 0 ],
  [ '1990-07-31', 26, 26, 25.5, 25.5, 32400, 0 ],
  [ '1990-06-30', 26.25, 26.5, 26, 26.5, 167600, 0 ],
  [ '1990-05-31', 23.25, 25, 23.25, 24.75, 357600, 0 ],
  [ '1990-04-30', 23.25, 24.25, 23, 23.75, 119200, 0 ],
  [ '1990-03-31', 24, 24, 23, 23.5, 99800, 0 ] 
  ]

  var dateFormat = d3.time.format("%Y-%m-%d");
  data.forEach(function(d) {
    d[0] = dateFormat.parse(d[0]);
  });


  var ndx = crossfilter(data);
  var dateDim = ndx.dimension(function(d) { return d[0]; });
  var openDim = ndx.dimension(function(d) { return d[1]; });
  var highDim = ndx.dimension(function(d) { return d[2]; });
  var lowDim  = ndx.dimension(function(d) { return d[3]; });
  var closeDim = ndx.dimension(function(d) { return d[4]; });
  var volDim = ndx.dimension(function(d) { return d[5]/1000000; });
  var numVolumeByDate = dateDim.group().reduceSum(function(d) { return d[5]/1000000; });
  var numOpenByDate = dateDim.group().reduceSum(function(d) { return d[1]; });


  var all = ndx.groupAll();
  var minDate = dateDim.bottom(1)[0][0];
  var maxDate = dateDim.top(1)[0][0];

  var openChart = dc.barChart("#open-chart");

  openChart
    .width(330)
    .height(240)
    .margins({top: 10, right: 20, bottom: 50, left: 30})
    .dimension(dateDim)
    .group(numOpenByDate)  
    .transitionDuration(500)
    .x(d3.time.scale().domain([minDate, maxDate]))
    .elasticX(true)
    .elasticY(true)
    .yAxisLabel("$Price")
    .xAxisLabel("Year")
    .yAxis().ticks(8);

    dc.renderAll();

}

