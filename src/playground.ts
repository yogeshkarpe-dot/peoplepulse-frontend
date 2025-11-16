// 1. Basic Types
let id: number = 101;
let name: string = "yogesh";
let isActive: boolean = true;

console.log(`Employee Name: ${name}, ID: ${id}, Active: ${isActive}`);

// 2. Arrays and Tuples
let skills: string[] = ["C#", "React", "TypeScript"];
let employeeTuple: [number, string] = [101, "yogesh"];

console.log(`Skills: ${skills.join(", ")}`);
console.log(`Employee Tuple: ID=${employeeTuple[0]}, Name=${employeeTuple[1]}`);

// 3. Union and Enums
type Role = "Admin" | "Manager" | "Employee";

const Department = {
  HR: "HR",
  IT: "IT",
  SALES: "Sales",
} as const;

type Department = (typeof Department)[keyof typeof Department];

let role: Role = "Admin";   
let dept: Department = Department.IT;

console.log(`Role: ${role}, Department: ${dept}`);

// 4. Objects and Interfaces
interface Employee {
    id: number;
    name: string;
    email?: string; // optional property
    skills: string[];
    department: Department;
}

const emp1: Employee = {
    id: 101,
    name: "yogesh",
    skills: ["C#", "React"],
    department: Department.IT,
};

console.log(`Employee: ${emp1}`);

// 5. Object destructuring
const { name: empName, department} = emp1;
console.log(`${empName} works in ${department} department.`);

// 6. Functions
// Normal + Arrow function
function greet(name: string): string {
    return `Hello, ${name}!`;
}

const greetArrow = (name: string): string => `Hello, ${name}!`;

console.log(greet("yogesh"));
console.log(greetArrow("karpe"));

// 7. Function with optional + default params
function calculateBonus(salary: number, bonuspercent: number = 10): number {
    return salary + (salary * bonuspercent) / 100;
}

console.log(calculateBonus(50000)); // default bonuspercent
console.log(calculateBonus(50000, 15)); // custom bonuspercent

// 8. Function with type alias
type addFn = (x: number, y: number) => number;

const add: addFn = (x, y) => x + y;
console.log(`Sum: ${add(10, 20)}`);

// 9. Generic Function
function wrapInArray<T>(value: T): T[] {
    return [value];
}

console.log(wrapInArray(5));
console.log(wrapInArray("TypeScript"));

// 10. Generic Interface
interface ApiResponse<T> {
    success: boolean;
    data: T;
}

const empResponse: ApiResponse<Employee> = {
    success: true,
    data: emp1,
};

console.log(`API Response: ${JSON.stringify(empResponse)}`);

// 11. Partial, Pick, Omit Utility Types
type EmployeeUpdate = Partial<Employee>;
type EmployeePreview = Pick<Employee, "id" | "name">;
type EmployeeWithoutSkills = Omit<Employee, "skills">;

const empUpdate: EmployeeUpdate = { email: "yogesh@gmail.com" };
console.log(empUpdate);

const empPreview: EmployeePreview = { id: 101, name: "yogesh" };
console.log(empPreview);

const empWithoutSkills: EmployeeWithoutSkills = {
    id: 101,
    name: "yogesh",
    department: Department.IT,
};
console.log(empWithoutSkills);

// 12. Async/Await with Promises
async function fetchEmployee(): Promise<Employee> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 101,
                name: "yogesh",
                skills: ["C#", "React"],
                department: Department.IT,
            });
        }, 1000);
    });
}

(async () => {
    const employee = await fetchEmployee();
    console.log(`Fetched Employee: ${JSON.stringify(employee)}`);
})();

// 13. Array and object operations

const employees: Employee[] = [
  emp1,
  { id: 2, name: "Frank", skills: ["Angular", "Node"], department: Department.IT },
  { id: 3, name: "Alex", skills: ["Salesforce"], department: Department.SALES },
];

// map, filter, find, reduce
const names = employees.map(emp => emp.name);
console.log("Names:", names);

const idDept = employees.filter(emp => emp.department === Department.IT);
console.log("Employees in IT Department:", idDept);

const empFrank = employees.find(emp => emp.name === "Frank");
console.log("Found Employee:", empFrank);

const totalEmployees = employees.reduce((count) => count + 1, 0);
console.log("Total Employees:", totalEmployees);