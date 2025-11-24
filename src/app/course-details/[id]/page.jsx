"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";

export default function Page() {
  const { id } = useParams();
  const router = useRouter();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/courses/${id}`);
        setCourse(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCourse();
  }, [id]);

  if (!course) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Loading course details...
      </p>
    );
  }

  const {
    course_name,
    course_image,
    instructor_name,
    instructor_email,
    student_capacity,
    class_platform,
    enrollment_deadline,
    course_description,
    course_status,
    course_creation_date,
    course_price,
  } = course;

  return (
    <div className="px-4 md:px-10 py-6 max-w-4xl mx-auto">
      <div className="relative h-64 md:h-96 mb-6 rounded overflow-hidden shadow-lg">
        <Image
          src={course_image}
          alt={course_name}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold text-[#ac18bc] mb-4 text-center">
        {course_name}
      </h1>

      <p className="text-gray-700 mb-6 text-center">{course_description}</p>

      <div className="space-y-2 text-sm">
        <div className=" flex justify-between items-center border-b border-gray-300 pb-1 font-semibold">
          Instructor Name:{" "}
          <span className="font-semibold">{instructor_name}</span>
        </div>
        <div className=" flex justify-between items-center border-b border-gray-300 pb-1 font-semibold">
          Instructor Email:{" "}
          <span className="font-semibold">{instructor_email}</span>
        </div>
        <div className=" flex justify-between items-center border-b border-gray-300 pb-1 font-semibold">
          Capacity: <span className="font-semibold">{student_capacity}</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-300 pb-1 font-semibold">
          <span className="font-semibold">Platform:</span>
          <span>{class_platform}</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-300 pb-1 font-semibold">
          <span className="font-semibold">Enrollment Deadline:</span>
          <span className="text-[#BC1823] font-medium">
            {enrollment_deadline}
          </span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-300 pb-1 font-semibold">
          <span className="font-semibold">Course Status:</span>
          <span>{course_status}</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-300 pb-1 font-semibold">
          <span className="font-semibold">Creation Date:</span>
          <span>{new Date(course_creation_date).toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-300 pb-1 font-semibold">
          <span className="font-semibold">Price:</span>
          <span>${course_price}</span>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={() => router.back()}
          className="bg-linear-to-r from-[#ac18bc] to-[#b896bc] font-semibold text-white px-6 py-2 rounded hover:opacity-90 cursor-pointer"
        >
          &larr; Back
        </button>
      </div>
    </div>
  );
}
