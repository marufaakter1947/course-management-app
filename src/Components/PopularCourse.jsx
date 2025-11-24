"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../Components/CourseCard"; 
import Link from "next/link";

export default function PopularCourse() {
  const [popularCourses, setPopularCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/courses");
        const sorted = res.data.sort((a, b) => {
          const capA = parseInt(a.student_capacity.replace(/\D/g, ""), 10) || 0;
          const capB = parseInt(b.student_capacity.replace(/\D/g, ""), 10) || 0;
          return capB - capA;
        });
        setPopularCourses(sorted.slice(0, 6));
      } catch (err) {
        console.error(err);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <section className="px-4 md:px-10 py-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-[#ac18bc] mb-2.5 text-center">
          Popular Courses
        </h2>
        <p className="text-gray-600 text-center mb-8">
    Check out our top courses with the highest student enrollment
  </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCourses.length > 0 ? (
            popularCourses.map(course => (
              <CourseCard key={course._id} course={course} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No courses found.
            </p>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/courses"
            className="inline-block bg-[#ac18bc] text-white px-6 py-2 rounded hover:opacity-90"
          >
            Show All
          </Link>
        </div>
      </section>

    </div>
  );
}
