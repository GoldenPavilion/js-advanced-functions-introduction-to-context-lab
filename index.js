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
    let total = 0;
    for (let i = 0; i < employee.timeInEvents.length; i++){
        total += wagesEarnedOnDate(employee, employee.timeInEvents[i].date)
    };
    return total;
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(elememt => element.firstName === firstName);
}

function calculatePayroll(employee){
    const allPay = (employee.map((e) => {return allWagesFor(e)}))
    return allPay.reduce((accumulator, currentValue) => accumulator + currentValue)
}