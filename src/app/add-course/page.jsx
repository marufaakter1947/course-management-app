"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function AddCoursePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    course_name: "",
    course_description: "",
    course_price: "",
    student_capacity: "",
    class_platform: "",
    enrollment_deadline: "",
    course_image: "",
  });

  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    router.push("/login");
    return null;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/courses", {
        ...formData,
        instructor_name: session.user.name,
        instructor_email: session.user.email,
      });
      toast.success("Course added successfully!");
      setFormData({
        course_name: "",
        course_description: "",
        course_price: "",
        student_capacity: "",
        class_platform: "",
        enrollment_deadline: "",
        course_image: "",
      });
      router.push("/my-courses");
    } catch (err) {
      console.error(err);
      toast.error("Failed to add course");
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#ac18bc] mb-6 text-center">
        Add New Course
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="course_name"
          placeholder="Course Title"
          value={formData.course_name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ac18bc] focus:border-[#ac18bc] transition duration-150"
          required
        />

        <input
          type="text"
          name="course_description"
          placeholder="Short Description"
          value={formData.course_description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ac18bc] focus:border-[#ac18bc] transition duration-150"
          required
        />

        <input
          type="number"
          name="course_price"
          placeholder="Price"
          value={formData.course_price}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ac18bc] focus:border-[#ac18bc] transition duration-150"
          required
        />

        <input
          type="text"
          name="student_capacity"
          placeholder="Capacity"
          value={formData.student_capacity}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ac18bc] focus:border-[#ac18bc] transition duration-150"
          required
        />

        <input
          type="text"
          name="class_platform"
          placeholder="Class Platform"
          value={formData.class_platform}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ac18bc] focus:border-[#ac18bc] transition duration-150"
          required
        />

        <input
          type="date"
          name="enrollment_deadline"
          placeholder="Enrollment Deadline"
          value={formData.enrollment_deadline}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ac18bc] focus:border-[#ac18bc] transition duration-150"
          required
        />

        <input
          type="text"
          name="course_image"
          placeholder="Optional Image URL"
          value={formData.course_image}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ac18bc] focus:border-[#ac18bc] transition duration-150"
        />

        <button
          type="submit"
          className="w-full bg-linear-to-r from-[#ac18bc] to-[#b896bc] font-semibold cursor-pointer text-white px-4 py-2 rounded hover:opacity-90"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}
