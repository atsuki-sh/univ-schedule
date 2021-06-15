<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::all();

        return view('courses/index', [
            'courses' => $courses,
        ]);
    }

    public function create(Request $request)
    {
        $course = new Course();
        $course->course_index = $request->course_index;
        $course->title = $request->title;
        $course->note = $request->note;
        $course->place = $request->place;
        $course->teacher = $request->teacher;

        $course->save();

        redirect('/{user_id}/schedule');
    }

    public function update(Request $request)
    {
        $course = DB::table('courses')->where('course_index', $request->course_index);
        $course->update([
            'title' => $request->title,
            'note' => $request->note,
            'place' => $request->place,
            'teacher' => $request->teacher,
        ]);

        redirect('/{user_id}/schedule');
    }


    public function delete(Request $request)
    {
        $course = DB::table('courses')->where('course_index', $request->course_index);
        $course->delete();

        redirect('/{user_id}/schedule');
    }
}
