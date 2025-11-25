"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import CourseCard from "@/components/CourseCard";

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (!session) return;
    const fetchCourses = async () => {
      try {
        const res = await axios.get(
          `https://course-management-app-server.vercel.app/my-created-courses?email=${session.user.email}`
        );
        setCourses(res.data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch courses");
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, [session]);

  if (status === "loading" || loading) {
    return <p className="text-center mt-10">Loading your courses...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#ac18bc] mb-2 text-center">
        My Courses
      </h1>

      {courses.length === 0 ? (
        <p className="text-center text-gray-500">
          You have not created any courses yet.
        </p>
      ) : (
        <div>
          <p className="text-gray-500 text-center mb-10">
            Here are all the courses i have created
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
