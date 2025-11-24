"use client";

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-[#eee5ee]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#ac18bc] mb-6">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded shadow">
            <p className="text-gray-600 mb-4">"The React course helped me land my first frontend job!"</p>
            <h4 className="font-bold">— Nusrat J.</h4>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <p className="text-gray-600 mb-4">"Flexible online courses made learning easy and fun."</p>
            <h4 className="font-bold">— Karim R.</h4>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <p className="text-gray-600 mb-4">"Great instructors and hands-on projects!"</p>
            <h4 className="font-bold">— Farhana S.</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
