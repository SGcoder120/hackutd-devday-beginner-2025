"use client";
import React, {useState, useEffect, use} from 'react'
import CourseCard from './coursecard'
import { nebulaFetch } from '../utils/api';
import data from '../data.json'

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCourses() {
      try {
        console.log('Fetching courses from Nebula API...');
        const apiResponse = await nebulaFetch('course/all');
        console.log('Finished, API Response:', apiResponse);
        setCourses(apiResponse.data || []);
      } catch (err) {
        console.error('API error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen text-center py-12 bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading course data...</p>
      </div>
    )
  }

  if (error)
    return <div>Error: {error}</div>;

  const relavantCourses = ['1337', '2305', '2340', '3341', '3345'];
  const filteredCourses = courses.filter(course => course.subject_prefix == "CS" && relavantCourses.includes(course.course_number));
  
  const unique = [];
  const seen = new Set();
  for (const course of filteredCourses) {
    if (!seen.has(course.course_number)) {
      seen.add(course.course_number);
      unique.push(course);
    }
  }
  
  return (
    <div className="py-12 bg-gray-100">
      {unique.map((course, idx) => (
        <div key={idx} className='mb-6'>
          <CourseCard
            courseCode={`${course.course_tag} ${course.course_number}`}
            title={course.course_name}
            description={course.course_description}
            creditHours={course.course_credits}
          />
        </div>
      ))}
    </div>
  )
}

export default Courses;