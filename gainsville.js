var goal, days, numDays, parts; // global variables that affect workout
var day_dict = {
  "sun": "<b>Sunday</b>",
  "mon": "<b>Monday</b>",
  "tue": "<b>Tuesday</b>",
  "wed": "<b>Wednesday</b>",
  "thu": "<b>Thursday</b>",
  "fri": "<b>Friday</b>",
  "sat": "<b>Saturday</b>"
};
 window.onload = function() { // pull information from query string
   var query = window.location.search;
   // Skip the leading ?
   if (query.substring(0, 1) == '?') {
     query = query.substring(1);
   }

   else {
     return 0;
   }

   parts = query.split(',');
   var temp = parts.splice(parts.length - 2, parts.length);
   days = temp[0];
   goal = temp[1];
   numDays = parseInt(days.charAt(days.length - 1))
   if(numDays == 1) {
     createTable(arrayFill(0), days.substring(0, 3));
   }

   else {
     var d = 3;
     for(var i = 0; i < numDays; i++) {
       // fill tables with alternating day 1 and day 2
       createTable(arrayFill((i % 2) + 1), days.substring(d - 3, d));
       d += 3;
     }
   }
 }

 function arrayFill(day) { // populate 2D array
   var tempArr = [];
   var counter = 1;
   var arrIndex = 1; // temp array index
   tempArr[0] = ["Muscle", "Exercise", "Sets x Reps"];
   if(day == 0) {
     while(counter < parts.length + 1) { // only 1 day of workout per week
       switch(parts[counter - 1]) { // populate array based on part
         case "deltoid":
           if(goal === "str") {
             tempArr[counter] = ["Deltoid", "Overhead Press", "3 x 5"];
           }

           else {
             tempArr[counter] = ["Deltoid", "Dumbbell Lateral Raise", "3 x 12"];
           }
           break;
         case "bicep":
           if(goal === "str") {
             tempArr[counter] = ["Bicep", "Barbell Bicep Curl", "3 x 8"];
           }

           else {
             tempArr[counter] = ["Bicep", "Incline Dumbbell Bicep Curl", "3 x 12"];
           }
           break;
         case "forearm":
           tempArr[counter] = ["Forearm", "Dumbbell Wrist Curl", "3 x 12"];
           break;
         case "quadricep":
           if(goal === "aes") {
             tempArr[counter] = ["Quadricep", "Leg Extension", "3 x 12"];
           }

           else if(parts.indexOf("glutes") != -1) { // include glutes in quads
             tempArr[counter] = ["Quadricep, Glutes", "Barbell Squat", "3 x 5"];
           }

           else {
             tempArr[counter] = ["Quadricep", "Barbell Squat", "3 x 5"];
           }
           break;
         case "chest":
           if(goal === "aes") {
             tempArr[counter] = ["Chest", "Cable Fly", "3 x 12"];
           }

           else {
             tempArr[counter] = ["Chest", "Bench Press", "3 x 5"];
           }
           break;
         case "tricep":
           if(goal === "str") {
             tempArr[counter] = ["Tricep", "Close Grip Bench Press", "3 x 8"];
           }

           else {
             tempArr[counter] = ["Tricep", "Cable Tricep Extension", "3 x 12"];
           }
           break;
         case "abdomen":
           tempArr[counter] = ["Abdomen", "Plank", "3 x As long as possible"];
           break;
         case "hamstring":
           if(goal === "str") {
             tempArr[counter] = ["Hamstring", "Leg Curl", "3 x 8"];
           }

           else {
             tempArr[counter] = ["Hamstring", "Leg Curl", "3 x 12"];
           }
           break;
         case "calves":
           tempArr[counter] = ["Calves", "Standing Calf Raise", "3 x 15"];
           break;
         case "trapezius":
           if(goal === "aes") {
             tempArr[counter] = ["Trapezius", "Barbell Shrug", "3 x 12"];
           }

           else if(parts.indexOf("lowerback") != -1) {
             break;
           }

           else {
             tempArr[counter] = ["Trapezius", "Barbell Shrug", "3 x 8"];
           }
           break;
         case "upper":
           if(goal === "aes") {
             tempArr[counter] = ["Upper Back", "Cable Row", "3 x 12"];
           }

           else {
             tempArr[counter] = ["Upper Back", "Barbell Row", "3 x 5"];
           }
           break;
         case "lower":
           if(goal === "aes") {
             tempArr[counter] = ["Lower Back", "Hyperextension", "3 x 12"];
           }

           else if(parts.indexOf("trapezius") != -1) { // include traps in back
             tempArr[counter] = ["Lower Back, Trapezius", "Deadlift", "3 x 5"];
           }

           else {
             tempArr[counter] = ["Lower Back", "Deadlift", "3 x 5"];
           }
           break;
         case "glutes":
           if(goal === "aes") {
             tempArr[counter] = ["Glutes", "Barbell Hip Thrust", "3 x 12"];
           } 

           else if(parts.indexOf("quadricep") != -1) {
             break;
           } 

           else {
            tempArr[counter] = ["Glutes", "Barbell Hip Thrust", "3 x 8"];
           }
           break;
         case "obliques":
           tempArr[counter] = ["Obliques", "Side Bends", "3 x 10"];
           break;
         case "lats":
           if(goal === "aes") {
            tempArr[counter] = ["Lats", "Lat Pulldown", "3 x 12"];
           }

           else {
            tempArr[counter] = ["Lats", "Pull-Ups", "3 x 8"];
           }
       }

       counter++; // move on to next part
     }
   }

   else if(day == 1) { // day 1 of workout
     while(counter < parts.length + 1) {
       switch(parts[counter - 1]) { // populate array based on part
         case "quadricep":
           if(goal === "aes") {
             tempArr[arrIndex++] = ["Quadricep", "Leg Extension", "3 x 12"];
           }

           else if(parts.indexOf("glutes") != -1) { // include glutes in quads
             tempArr[arrIndex++] = ["Quadricep, Glutes", "Barbell Squat", "3 x 5"];
           }

           else {
             tempArr[arrIndex++] = ["Quadricep", "Barbell Squat", "3 x 5"];
           }
           break;
         case "deltoid":
           if(goal === "str") {
             tempArr[arrIndex++] = ["Deltoid", "Overhead Press", "3 x 5"];
           }

           else {
             tempArr[arrIndex++] = ["Deltoid", "Dumbbell Lateral Raise", "3 x 12"];
           }
           break;
         case "upper":
           if(goal === "aes") {
             tempArr[arrIndex++] = ["Upper Back", "Cable Row", "3 x 12"];
           }

           else {
             tempArr[arrIndex++] = ["Upper Back", "Barbell Row", "3 x 5"];
           }
           break;
         case "bicep":
           if(goal === "str") {
             tempArr[arrIndex++] = ["Bicep", "Barbell Bicep Curl", "3 x 8"];
           }

           else {
             tempArr[arrIndex++] = ["Bicep", "Incline Dumbbell Bicep Curl", "3 x 12"];
           }
           break;
         case "forearm":
           tempArr[arrIndex++] = ["Forearm", "Dumbbell Wrist Curl", "3 x 12"];
           break;
         case "abdomen":
           tempArr[arrIndex++] = ["Abdomen", "Plank", "3 x As long as possible"];
           break;
         case "hamstring":
           if(goal === "str") {
             tempArr[arrIndex++] = ["Hamstring", "Leg Curl", "3 x 8"];
           }

           else {
             tempArr[arrIndex++] = ["Hamstring", "Leg Curl", "3 x 12"];
           }
           break;
         case "glutes":
           if(goal === "aes") {
             tempArr[arrIndex++] = ["Glutes", "Barbell Hip Thrust", "3 x 12"];
           } 

           else if(parts.indexOf("quadricep") != -1) {
             break;
           } 

           else {
            tempArr[arrIndex++] = ["Glutes", "Barbell Hip Thrust", "3 x 8"];
           }
           break;
         case "calves":
           tempArr[arrIndex++] = ["Calves", "Standing Calf Raise", "3 x 15"];
           break;
         case "obliques":
           tempArr[arrIndex++] = ["Obliques", "Side Bends", "3 x 10"];
           break;
         case "lats":
           if(goal === "aes") {
            tempArr[arrIndex++] = ["Lats", "Lat Pulldown", "3 x 12"];
           }

           else {
            tempArr[arrIndex++] = ["Lats", "Pull-Ups", "3 x 8"];
           }
       }

       counter++; // move on to next part
     }
   }

   else { // day 2 of workout
     while(counter < parts.length + 1) {
       switch(parts[counter - 1]) { // populate array based on part
         case "chest":
           if(goal === "aes") {
             tempArr[arrIndex++] = ["Chest", "Cable Fly", "3 x 12"];
           }

           else {
             tempArr[arrIndex++] = ["Chest", "Bench Press", "3 x 5"];
           }
           break;
         case "lower":
           if(goal === "aes") {
             tempArr[arrIndex++] = ["Lower Back", "Hyperextension", "3 x 12"];
           }

           else if(parts.indexOf("trapezius") != -1) { // include traps in back
             tempArr[arrIndex++] = ["Lower Back, Trapezius", "Deadlift", "3 x 5"];
           }

           else {
             tempArr[arrIndex++] = ["Lower Back", "Deadlift", "3 x 5"];
           }
           break;
         case "bicep":
           if(goal === "str") {
             tempArr[arrIndex++] = ["Bicep", "Dumbbell Bicep Curl", "3 x 8"];
           }

           else {
             tempArr[arrIndex++] = ["Bicep", "Incline Dumbbell Bicep Curl", "3 x 12"];
           }
           break;
         case "forearm":
           tempArr[arrIndex++] = ["Forearm", "Dumbbell Wrist Curl", "3 x 12"];
           break;

         case "tricep":
           if(goal === "str") {
             tempArr[arrIndex++] = ["Tricep", "Close Grip Bench Press", "3 x 8"];
           }

           else {
             tempArr[arrIndex++] = ["Tricep", "Cable Tricep Extension", "3 x 12"];
           }
           break;
         case "abdomen":
           tempArr[arrIndex++] = ["Abdomen", "Plank", "3 x As long as possible"];
           break;
         case "calves":
           tempArr[arrIndex++] = ["Calves", "Seated Calf Raise", "3 x 15"];
           break;
         case "trapezius":
           if(goal === "aes") {
             tempArr[arrIndex++] = ["Trapezius", "Barbell Shrug", "3 x 12"];
           }

           else if(parts.indexOf("lowerback") != -1) {
             break;
           }

           else {
             tempArr[arrIndex++] = ["Trapezius", "Barbell Shrug", "3 x 8"];
           }
           break;
         case "obliques":
           tempArr[arrIndex++] = ["Obliques", "Side Bends", "3 x 10"];
           break;
       }

       counter++; // move on to next part
     }
   }

   return tempArr;
 }

 function createTable(partsArray, daysOfWeek) { // creates table
   var col = 3; // number of columns
   var body = document.body,
       tbl  = document.createElement('table');
   tbl.className = "u-full-width";

   for(var i = 0; i < partsArray.length; i++) {
       var tr = tbl.insertRow();
       for(var j = 0; j < col; j++) {
         var td = tr.insertCell();
         td.appendChild(document.createTextNode('cell'));
       }
   }

   body.appendChild(tbl);
   var caption = tbl.createCaption();
   caption.innerHTML = day_dict[daysOfWeek];
   tbl.rows[0].cells[0].style.fontWeight = 'bold';
   tbl.rows[0].cells[1].style.fontWeight = 'bold';
   tbl.rows[0].cells[2].style.fontWeight = 'bold';
   for(var x = 0; x < partsArray.length; x++) {
     for(var y = 0; y < col; y++) {
       tbl.rows[x].cells[y].innerHTML = partsArray[x][y];
     }
   }

   tbl.style.marginBottom = "50px"; // spaces between tables
 }
