 //91.461 Assignment 7:  Creating an Interactive Dynamic Table
//Name: Alexander Li
//Email: Alexander_li1@student.uml.edu
//Affiliation: Umass Lowell Computer Science Undergraduate, in class 91.461 GUI Programming I
//Date Created: 11/5/2015
//Description: Js file that includes table creation and validation functions
 $(function() {
  
    // Setup form validation on the submit form
    $("#submitform").validate({
    
        // Specify the validation rules
        rules: {
            multiplierstart: {
                required: true,
                number: true
            },
            multiplierend: {
                required: true,
                number: true
            },
            multiplicandstart: {
                required: true,
                number: true
            },
            multiplicandend: {
                required: true,
                number: true
            }
        },
        
        // Specify the validation error messages
        messages: {
            multiplierstart: {
                required: "Please provide a starting multiplier value",
                number: "Please only submit numbers for starting multiplier value"
            },
            multiplierend: {
                required: "Please provide a ending multiplier value",
                number: "Please only submit numbers for ending multiplier value"
            },
            multiplicandstart: {
                required: "Please provide a starting multiplicand value",
                number: "Please only submit numbers for starting multiplicand value"
            },
            multiplicandend: {
                required: "Please provide a ending multiplicand value",
                number: "Please only submit numbers for ending multiplicand value"
            },
            submitHandler: function(form) {
            form.submit();
        }
        },
        errorElement : 'div',
        errorLabelContainer: '.errorTxt'
        
    });

  });
 
       // Generates multiplication table
       var createTable = function(){
           //Calculate amount of rows and cols based on user input
           var rows = document.getElementById("multiplierend").value - document.getElementById("multiplierstart").value + 1;
           console.log(rows);
           var cols = document.getElementById("multiplicandend").value - document.getElementById("multiplicandstart").value + 1;
           console.log(cols);
           var strheader = "<table border='1'>\n";
           var strbody = "";
           var curmultiplier = document.getElementById("multiplierstart").value;
           var curmultiplicand = document.getElementById("multiplicandstart").value;
           
           for(var i = 0; i <= rows; i++){
               strbody += "<tr>";
               for(var j = 0; j <= cols; j++){
                   strbody += "<td";
                   //check to see if it should display the multiplicand/multiplier (first row/column will show multiplier/multiplicand not the multiplication results)
                   if((i === 0) || (j ===0)){
                       //top left space needs to be left empty
                       if((i === 0) && (j ===0)){
                           strbody += " class='empty'>";
                       }
                       //show multiplier
                       if((i ===0) && (j !== 0)){
                           strbody += " class='outrow'>" + curmultiplicand + "";
                       }
                       //show multiplicand
                       if((i !== 0) && (j === 0)){
                           strbody += " class='outrow'>" + curmultiplier + "";
                       }
                           
                   }
                   //inside table so regular multiplication
                   else{
                       strbody += ">" + (curmultiplier * curmultiplicand) + "";
                   }
                   strbody += "</td>";
                   //increment multiplicand  if moving across a row on the inside table
                   if (j !== 0){
                       curmultiplicand++;
                   }
               }
               strbody += "</tr>\n";
               //increment multiplier if moving down a column on the inside table
               if (i !== 0){
                   curmultiplier++;
               }
               //reset multiplicand value to starting value each time we move down one row
               curmultiplicand = document.getElementById("multiplicandstart").value;
           }
           var strfooter = "</table>";
           document.getElementById("usertable").innerHTML = strheader + strbody + strfooter;
       }
