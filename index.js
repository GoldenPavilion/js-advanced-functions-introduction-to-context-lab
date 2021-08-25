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
    let [date, hour] = dateStamp.split(" ");

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    });
    return employee;
}

function hoursWorkedOnDate(employee, dateStamp){
    const inTime = employee.timeInEvents.find(element => element.date === dateStamp).hour;
    const outTime = employee.timeOutEvents.find(element => element.date === dateStamp).hour;
    return (outTime - inTime)/100;
}

function wagesEarnedOnDate(employee, dateStamp){
    const payRate = employee.payPerHour;
    const hoursWorked = hoursWorkedOnDate(employee, dateStamp);
    return payRate * hoursWorked;
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