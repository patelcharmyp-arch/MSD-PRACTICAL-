import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    age: '',
  });

  const [errors, setErrors] = useState({});
  const [students, setStudents] = useState([]);

  // Handle controlled form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course';
    }

    if (
      formData.age === '' ||
      Number(formData.age) < 16 ||
      Number(formData.age) > 60
    ) {
      newErrors.age = 'Age must be between 16 and 60';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newStudent = {
        id: Date.now(),
        ...formData,
      };

      setStudents([...students, newStudent]);

      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        age: '',
      });

      setErrors({});
      alert('Student added successfully!');
    }
  };

  // Delete student
  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Student Management System</h1>
        <p>Register and manage student information</p>
      </header>

      <section className="form-section">
        <h2>Add New Student</h2>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Student Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter student name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span className="error">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="error">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter 10-digit phone number"
              value={formData.phone}
              onChange={handleChange}
              maxLength={10}
            />
            {errors.phone && (
              <span className="error">{errors.phone}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              name="age"
              placeholder="Enter age (16–60)"
              value={formData.age}
              onChange={handleChange}
              min="16"
              max="60"
            />
            {errors.age && (
              <span className="error">{errors.age}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="course">Course</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select a course</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="B.Tech">B.Tech</option>
              <option value="MCA">MCA</option>
              <option value="MBA">MBA</option>
            </select>
            {errors.course && (
              <span className="error">{errors.course}</span>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Add Student
          </button>
        </form>
      </section>

      <section className="students-section">
        <h2>Student List ({students.length})</h2>

        {students.length === 0 ? (
          <p className="empty-message">
            No students added yet. Please fill out the form.
          </p>
        ) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Age</th>
                  <th>Course</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {students.map((student, index) => (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>{student.age}</td>
                    <td>{student.course}</td>
                    <td>
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => handleDelete(student.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;