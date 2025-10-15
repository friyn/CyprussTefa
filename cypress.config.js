const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      adminEmail: process.env.ADMIN_EMAIL,
      adminPassword: process.env.ADMIN_PASSWORD,
      studentEmail: process.env.STUDENT_EMAIL,
      studentPassword: process.env.STUDENT_PASSWORD,
      teacherEmail: process.env.TEACHER_EMAIL,
      teacherPassword: process.env.TEACHER_PASSWORD,
      staffEmail: process.env.STAFF_EMAIL,
      staffPassword: process.env.STAFF_PASSWORD,
    },
  },
});
