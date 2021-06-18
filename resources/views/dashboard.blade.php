<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
        <form method="POST" action="http://univ-schedule/logout">
            <input type="hidden" name="_token" value="YssaA3mjWQ4ttdzt82cWUL3szICKoX1jukiIE6vf">
            <a class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition" href="http://univ-schedule/logout" onclick="event.preventDefault();
                                                this.closest('form').submit();">Log Out</a>
        </form>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <x-jet-welcome />
            </div>
        </div>
    </div>
</x-app-layout>
