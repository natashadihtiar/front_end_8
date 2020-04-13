/*eslint no-undefined:*/

function Student(name, surname, bYear) {
    const data = new Date;
    const arr = 30;
    const attendance = new Array(arr);
    const marks = new Array(arr);
    const min = 0;
    const max = 10;
    const coolMarks = 9;
    const coolAttendance = 0.9;

    this.name = name;
    this.surname = surname;
    this.bYear = bYear;

    this.age = () => data.getFullYear() - bYear;

    this.absent = () => {
        const i = attendance.findIndex((item) => item === undefined);
        return attendance[i] = false;
    };

    this.present = () => {
        const i = attendance.findIndex((item) => item === undefined);
        return attendance[i] = true;
    };


    this.mark = (newMark) => {
        if(newMark <= max && newMark >= min) {
            const i = marks.findIndex((item) => item === undefined);
            return marks[i] = newMark;
        }
    };

    this.summary = () => {

        const averageAttendances = () => {
            const averageAttendance = attendance.filter((item) => item !== undefined);
            return averageAttendance.reduce((prev, current) => prev + current) / averageAttendance.length;
        };

        const averageMarks = () => {
            const averageMark = marks.filter((item) => item !== undefined);
            return averageMark.reduce((prev, current) => prev + current) / averageMark.length;
        };

        if(averageMarks() > coolMarks && averageAttendances() > coolAttendance){
            return 'Ути какой молодчинка!';
        } else if (averageMarks() > coolMarks || averageAttendances() > coolAttendance) {
            return 'Норм, но можно лучше';
        } else {
            return 'Редиска!';
        }
    };
}


