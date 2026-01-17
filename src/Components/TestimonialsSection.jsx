"use client";

export default function TestimonialsSection() {
  return (
    <section id="testimonials"
      className="py-20 bg-cover bg-center bg-no-repeat relative mx-4 rounded overflow-hidden mb-10"
      style={{ backgroundImage: "url('/testimonial_img.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">What Our Students Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#f4cef4] backdrop-blur-md text-black font-semibold rounded shadow">
            <p className=" mb-4">
              "The React course helped me land my first frontend job!"
            </p>
            <h4 className="font-bold">— Nusrat J.</h4>
          </div>

          <div className="p-6 bg-[#f4cef4] text-black font-semibold backdrop-blur-md rounded shadow">
            <p className=" mb-4">
              "Flexible online courses made learning easy and fun."
            </p>
            <h4 className="font-bold">— Karim R.</h4>
          </div>

          <div className="p-6 bg-[#f4cef4] text-black font-semibold backdrop-blur-md rounded shadow">
            <p className=" mb-4">
              "Great instructors and hands-on projects!"
            </p>
            <h4 className="font-bold">— Farhana S.</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
