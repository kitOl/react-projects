import { Link, useNavigate, useParams } from "react-router-dom";
import courses from "../data/courses";
// import NotFound from "./NotFound";
import { useEffect } from "react";

function SingleCourse() {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.slug === params.courseSlug);

  // if (!course) {
  // return <NotFound />;
  // }
  useEffect(() => {
    if (!course) {
      navigate("..", { relative: "path" });
    }
  }, [course, navigate]);

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
}

export default SingleCourse;
