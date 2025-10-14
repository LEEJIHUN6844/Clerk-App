import Courses from "@/components/courses";
import { Course } from "@/types/courses";
import coursesData from "../api/courses/data.json";
export default function CoursesPage() {
  const courses: Course[] = coursesData;
  return (
    <div>
      <h1 className="text-4xl font-bold mt-6 ml-6">Courses</h1>
      <Courses courses={courses} />
    </div>
  );
}
