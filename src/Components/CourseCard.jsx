"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CourseCard = ({ course }) => {
  const {
    _id,
    course_image,
    course_name,
    student_capacity,
    enrollment_deadline,
    course_description,
    course_price,
  } = course;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-48 overflow-hidden relative">
        <Image
          src={course_image}
          alt={course_name}
          fill
          className="object-cover hover:scale-110 transition-transform duration-300 rounded"
        />
      </figure>

      <div className="card-body p-4 rounded space-y-2">
        <div className="overflow-hidden">
          <h2 className="card-title text-[#ac18bc] line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
            {course_name}
          </h2>
        </div>

        {/* <p className="text-sm text-gray-700 line-clamp-2">
          {course_description}
        </p> */}

        <div className="text-xs flex justify-between items-center border-b border-gray-300 pb-1 font-semibold">
          Capacity: <span className="font-normal">{student_capacity}</span>
        </div>
        <div className="text-xs flex justify-between items-center border-b border-gray-300 pb-1 font-semibold">
          Course Price: <span className="font-normal">${course_price}</span>
        </div>

        {/* <div className="text-xs flex justify-between items-center border-b border-gray-300 pb-1 font-semibold">
          Enrollment Deadline:{" "}
          <span className="text-[#BC1823] font-medium">
            {enrollment_deadline}
          </span>
        </div> */}

        <Link
          href={`/course-details/${_id}`}
          className="btn rounded bg-linear-to-r from-[#ac18bc] to-[#b896bc] text-white w-full mt-3 py-2 block text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
