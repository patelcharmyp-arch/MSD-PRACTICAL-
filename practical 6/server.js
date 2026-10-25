const express = require('express')
const app = express()
const PORT = 5000

app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})

const students = [
  { id: 1, name: 'Charmy Patel', course: 'MCA' },
  { id: 2, name: 'Riya Patel', course: 'BCA' },
  { id: 3, name: 'Yug patel', course: 'BSc IT' }
]

app.get('/', (req, res) => {
  res.json({ message: 'Student Records API is running' })
})

app.get('/api/students', (req, res) => {
  res.json(students)
})

app.get('/api/students/:id', (req, res) => {
  const student = students.find(
    s => s.id === Number(req.params.id)
  )

  if (!student) {
    return res.status(404).json({
      message: 'Student not found'
    })
  }

  res.json(student)
})

app.listen(PORT, () => {
  console.log(`Student Records API running at http://localhost:${PORT}`)
})