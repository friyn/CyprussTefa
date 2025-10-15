const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    // baseUrl: process.env.BASE_URL,
    env: {
      baseUrl: process.env.BASE_URL,
      adminEmail: process.env.ADMIN_EMAIL,
      adminPassword: process.env.ADMIN_PASSWORD,
      adminUrl: process.env.ADMIN_URL,
      studentEmail: process.env.STUDENT_EMAIL,
      studentPassword: process.env.STUDENT_PASSWORD,
      studentUrl: process.env.STUDENT_URL,
      teacherEmail: process.env.TEACHER_EMAIL,
      teacherPassword: process.env.TEACHER_PASSWORD,
      teacherUrl: process.env.TEACHER_URL,
      staffEmail: process.env.STAFF_EMAIL,
      staffPassword: process.env.STAFF_PASSWORD,
      staffUrl: process.env.STAFF_URL,
    },
  },
});
