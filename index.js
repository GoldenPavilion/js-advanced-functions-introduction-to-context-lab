function createEmployeeRecord(employeeArray){
    let employeeRecord = {
        firstName: employeeArray[0],
        familyName: employeeArray[1], 
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return employeeRecord;
}

function createEmployeeRecords(employeesArray){
    return employeesArray.map(createEmployeeRecord);
}

function createTimeInEvent(employee, dateStamp){
    let [date, hour] = dateStamp.split(" ");
    
    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    });
    return employee;
}

function createTimeOutEvent(employee, dateStamp){
    // returns the employee record
    // Add an Object with keys to the timeOutEvents Arrays on the record Object
    // type - set to "TimeOut"
    // hour - derived from the arg
    // date - derived from the arg
}

function hoursWorkedOnDate(employee, dateStamp){
    // return hours worked, as an integer
    // given a date, find the number of hours elapsed between the date's timeInEvents and timeOutEvent
}

function wagesEarnedOnDate(employee, dateStamp){
    // returns pay owed
    // Using hoursWorkedOnDate, multiply the hours by the record's payRate to determine the amount owed.
    // Amount should be returned as a number
}

function allWagesFor(employee){
    // returns pay owed for all dates
    // using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context
    // Aamount should be returned as a number
    // You will need to find the available dates somehow...
}

function findEmployeeByFirstName(srcArray, firstName){
    // returns matching record or undefined
    // test the firstName field for a match with the firstName argument
}

function calculatePayroll(employee){
    // returns sum of pay owed to all employees for all dates, as a number
    // using wagedEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context
    // Anount should be returned as a number
}