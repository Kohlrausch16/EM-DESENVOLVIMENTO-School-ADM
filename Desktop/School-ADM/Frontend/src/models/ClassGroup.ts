export type ClassData = {
    id: string;
    name: string;
    totalCost: number;
    classFee: number;
    materialFee: number;
    monthlyCourseFee: number;
    monthlyMaterialFee: number;
    totalMonthlyFee: number;
    instalments: number;
    weekDay: string;
    dayHour: number[];
    classroom: number;
    activeStatus: boolean;
    course: string;
    teacher: string;
    studentList: string[];
}