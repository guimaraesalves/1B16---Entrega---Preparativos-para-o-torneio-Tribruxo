import Card from "../Card/Card";
import "./Student.css";

function Student({ student }) {
  return (
    <div className="container">
      {student.map((student, index) => (
        <Card student={student} key={index} />
      ))}
    </div>
  );
}

export default Student;
