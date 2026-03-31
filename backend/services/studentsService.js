import { loadData, saveData } from "../repositories/studentsRepository.js"

// Get all students
export async function getAllStudents(){
    return await loadData()
}

// Get student by <id>
export async function findStudentById(id){
    const students = await loadData()
    return students.find(student => student.id === parseInt(id))
}

// Create student
export async function createStudent(studentData){
    const students = await loadData();

    // Generate ID
    const id = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1
    const newStudent = { id: id, ...studentData }

    // Update JSON
    students.push(newStudent)
    await saveData(students)
    return newStudent
}

// Update student
export async function updateStudent(id, updatedData){
    const students = await loadData();

    const index = students.findIndex(s => s.id == parseInt(id))
    if (index === -1) return null;

    // Update JSON
    students[index] = { ...students[index], ...updatedData, id: parseInt(id) }  // updatedData would replace the old parts of ...students[index]; we re-put hard-coded id to prevent malicious user input (id: 99) which replaces id
    await saveData(students)
    return students[index]
}

// Delete student
export async function deleteStudent(id){
    const students = await loadData();

    // Filter out student
    const filtered = students.filter(s => s.id !== parseInt(id))
    if (students.length === filtered.length) return false

    await saveData(filtered)
    return true
}