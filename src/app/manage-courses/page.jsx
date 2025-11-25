"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

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
          `http://localhost:5000/my-created-courses?email=${session.user.email}`
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

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/courses/${id}`);
        setCourses(courses.filter((course) => course._id !== id));
        Swal.fire("Deleted!", "Course has been deleted.", "success");
        toast.success("Course deleted successfully");
      } catch (err) {
        console.error(err);
        Swal.fire("Error!", "Failed to delete course.", "error");
        toast.error("Failed to delete course");
      }
    }
  };

  if (status === "loading" || loading)
    return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#ac18bc] mb-6 text-center">
        Manage Courses
      </h1>

      {courses.length === 0 ? (
        <p className="text-center text-gray-500">
          You have not created any courses yet.
        </p>
      ) : (
        <>
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-[#ac18bc] text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Title</th>
                  <th className="px-4 py-2 text-left">Capacity</th>
                  <th className="px-4 py-2 text-left">Platform</th>
                  <th className="px-4 py-2 text-left">Enrollment Deadline</th>
                  <th className="px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {courses.map((course) => (
                  <tr key={course._id} className="hover:bg-gray-50">
                    <td className="px-4 py-2">{course.course_name}</td>
                    <td className="px-4 py-2">{course.student_capacity}</td>
                    <td className="px-4 py-2">{course.class_platform}</td>
                    <td className="px-4 py-2">{course.enrollment_deadline}</td>
                    <td className="px-4 py-2 text-center">
                      <div className="flex justify-center gap-2">
                        <Link
                          href={`/course-details/${course._id}`}
                          className="px-3 py-1 bg-teal-500 text-white rounded hover:opacity-90"
                        >
                          View
                        </Link>
                        <button
                          onClick={() => handleDelete(course._id)}
                          className="px-3 py-1 bg-red-900 text-white rounded hover:opacity-90"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        
          <div className="md:hidden space-y-4">
            {courses.map((course) => (
              <div
                key={course._id}
                className="border rounded-lg p-4 shadow hover:shadow-md"
              >
                <h2 className="text-lg font-semibold text-[#ac18bc]">
                  {course.course_name}
                </h2>
                <p className="text-sm text-gray-600">{course.student_capacity}</p>
                <p className="text-sm text-gray-600">{course.class_platform}</p>
                <p className="text-sm text-gray-600">
                  Enrollment: {course.enrollment_deadline}
                </p>
                <div className="flex justify-between mt-3">
                  <Link
                    href={`/course-details/${course._id}`}
                    className="px-3 py-1 bg-teal-500 text-white rounded hover:opacity-90"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleDelete(course._id)}
                    className="px-3 py-1 bg-red-900 text-white rounded hover:opacity-90"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
