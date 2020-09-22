// Load module node-persist
const storage = require('node-persist');

// Hàm khởi tạo
// Load dữ liệu đã lưu trên ổ đĩa
storage.init({
  dir: "students" // cấu hình nơi lưu trữ dữ liệu nằm trong thư mục students
}).then(r => {
  console.log(r)
});

// Hàm lấy danh sách sinh viên
function getAllStudents()
{
  //Lấy danh sách sinh viên từ nơi lưu trữ
  let students = storage.getItem('students');

  //Nếu không có sinh viên thì trả về mảng rỗng
  if(typeof  students === 'undefined'){
    return [];
  }
  //Ngược lại trả về danh sách sinh viên
  return students;
}
// Hàm lấy chi tiết sinh viên
function getStudent(studentId)
{
  //Lấy danh sách sinh viên
  let student = getAllStudents();
  //Biến lưu trữ sinh viên được tìm thấy
  let matchedStudent = null;

  //Lặp để tìm kiếm sinh viên
  for (let i = 0; i < student.length; i++) {
    if(students[i].id === studentID){
      matchedStudent = students[i];
      break;
    }
  }
  return matchedStudent;
}
// Hàm thêm một sinh viên
function addStudent(id, fullname)
{
  var students = getAllStudents();

  students.push({
    id : id,
    fullname : fullname
  });

  storage.setItem('students', students);
}
// Hàm xóa sinh viên
function removeStudent(studentId)
{
  let students = getAllStudents();

  for (let i = 0; i < students.length; i++) {
    if(students[i].id === studentId){
      students.splice(i, 1);
    }
  }
  storage.setItem('students', students);
}
// Hàm sửa sinh viên
function editStuent(studentId, studentName)
{
  let students = getAllStudents();

  for (let i = 0; i < students.length; i++) {
    if(students[i].id === studentId){
      students[i].fullname = studentName;
    }
  }
  storage.setItem('students', students);
}
// Hàm hiển thị danh sách sinh viên
function showStudents()
{
  let students = getAllStudents();

  students.forEach(function(student){
    console.log('Student: ', student.fullname + '(' + student.id + ')');
  })
}

// Thêm sinh viên
addStudent(1, 'Cuong');
addStudent(2, 'Kinh');
addStudent(3, 'Chinh');
addStudent(4, 'Quyen');

// Hiển thị danh sách sinh viên
showStudents();
