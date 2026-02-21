const courseTitle = "Introduction to React";

function App() {
  const studentName = "Eya Boulila";

  const student = {
    name: "Eya Boulila",
    age: 19,
    track: "Computer Science"
  };

  const sayHello = () => {
    return `Hello, ${studentName}! Welcome to ${courseTitle}.`;
  };

  return (
    <div>
      <h1>My First React Lab</h1>

      <p>Student Name: {studentName}</p>

      <p>Welcome to {courseTitle}, {studentName}!</p>

      <label htmlFor="nameInput">Enter your name: </label>
      <input type="text" id="nameInput" />

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>

      <p>{sayHello()}</p>
    </div>
  );
}

export default App;



// how to define variables and dsipaly them 
// i still have problems with syntaxe i mix thing up
// i mixed the objet student first and i made seprate variables

