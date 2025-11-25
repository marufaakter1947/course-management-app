"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../../Components/CourseCard";
import { FaSearch } from "react-icons/fa";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "https://course-management-app-server.vercel.app/courses"
        );
        setCourses(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.course_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4 md:px-10 py-6">
      <div className="mb-6 text-center">
        <h1 className="text-3xl  font-bold text-[#ac18bc]">All Courses</h1>
        <p className="text-gray-600 mt-1">
          Explore all available courses and enroll in the ones you like.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="mb-6 flex justify-center relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search courses..."
            className="border rounded px-3 py-2 w-full pr-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ac18bc]" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllCourses;
