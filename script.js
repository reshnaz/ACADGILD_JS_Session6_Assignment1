
//This function is called on click of "Compute Revised Salary" button form index.html

function findSal(bSal,wrkHrs) {

	bSal=Number(bSal); //Convert type of salary to number
	wrkHrs=Number(wrkHrs); //Convert type of work hours to number

	//If condition executes if salary>than 15000 and work hours>10
	if(bSal>=15000 & wrkHrs>10){
		bSal+=(0.1*bSal); //Add 10% bonus to basic salary
		document.getElementById('result').innerHTML="Your salary after increment of 10% bonus computes to: Rs."+bSal //Display final salary
	}
	//Else condition executes if the IF condition fails
	else{
		bSal+=(0.05*bSal); //Add 5% bonus to basic salary
		document.getElementById('result').innerHTML="Your salary after increment of 5% bonus computes to: Rs."+bSal //Display final salary
	}
}
