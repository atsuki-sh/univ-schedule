@foreach($courses as $course)
    <p>{{ $course->title }}</p>
    <p>{{ $course->note }}</p>
    <p>{{ $course->place }}</p>
    <p>{{ $course->teacher }}</p>
    <br>
@endforeach
