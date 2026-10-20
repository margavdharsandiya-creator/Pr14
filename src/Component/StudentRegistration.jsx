import { useState } from "react";

function StudentRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollNo: "",
    course: "",
    gender: "",
    phone: "",
  });

  const [student, setStudent] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudent({ ...formData });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      rollNo: "",
      course: "",
      gender: "",
      phone: "",
    });
    setStudent(null);
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-3xl text-white shadow-lg">
          🎓
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
          Student Registration
        </h1>

        <p className="mt-2 text-slate-600">
          Enter your details to register for a course.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Registration Form */}
        <div className="rounded-3xl border border-white bg-white p-6 shadow-xl sm:p-8">
          <h2 className="mb-6 text-xl font-bold text-indigo-700">
            Registration Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="student@example.com"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Roll Number
              </label>
              <input
                type="text"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                placeholder="Enter roll number"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                pattern="[0-9]{10}"
                title="Enter a 10-digit phone number"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Select Course
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              >
                <option value="">Choose your course</option>
                <option value="BCA">BCA</option>
                <option value="B.Tech">B.Tech</option>
                <option value="BBA">BBA</option>
                <option value="B.Sc">B.Sc</option>
                <option value="MCA">MCA</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Gender
              </label>

              <div className="flex gap-5">
                {["Male", "Female", "Other"].map((gender) => (
                  <label
                    key={gender}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={formData.gender === gender}
                      onChange={handleChange}
                      required
                      className="accent-indigo-600"
                    />
                    {gender}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white shadow-md transition hover:bg-indigo-700 hover:shadow-lg active:scale-95"
              >
                Register Student
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-600 transition hover:bg-slate-100"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* Submitted Student Details */}
        <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold">Student Profile</h2>
            <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-200">
              {student ? "Registered" : "Preview"}
            </span>
          </div>

          {student ? (
            <div>
              <div className="mb-6 flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500 text-2xl font-bold">
                  {student.name.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold">{student.name}</h3>
                  <p className="break-all text-sm text-slate-300">
                    {student.email}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  ["Roll Number", student.rollNo],
                  ["Phone Number", student.phone],
                  ["Course", student.course],
                  ["Gender", student.gender],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 border-b border-white/10 pb-3"
                  >
                    <span className="text-sm text-slate-400">{label}</span>
                    <span className="text-right font-semibold">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-300">
                ✓ Registration submitted successfully!
              </div>
            </div>
          ) : (
            <div className="flex min-h-80 flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-4xl">
                📋
              </div>
              <h3 className="text-lg font-semibold text-slate-200">
                No student registered yet
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">
                Complete the registration form and click Register Student.
                Your submitted details will appear here.
              </p>
            </div>
          )}
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-slate-500">
        Student Registration Portal · React + Tailwind CSS
      </p>
    </div>
  );
}

export default StudentRegistration;