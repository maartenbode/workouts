import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';

export default function Index(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Workouts</h2>}
        >
            <Head title="Workouts" />

            <div className="py-3">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    {props.workouts.map(workout => (
                        <Link href={route('workouts.show', workout.uuid)} key={`workouts-${workout.uuid}`}>
                            <div className="bg-white hover:bg-stone-50 transition ease-in-out duration-150 overflow-hidden border-cream-dark border border-b-2 rounded-lg p-3 flex mb-1 items-center">
                                <img src={`/img/workouts/${workout.img_path}`} className="h-16 mr-4"/>

                                <div>
                                    <div className="mb-1">
                                        <strong className="block">{workout.name}</strong>
                                    </div>

                                    <div className="text-sm text-stone-600">
                                        <span className="mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                                            {workout.stats.max_weight > 0 ? workout.stats.max_weight : '— '}kg
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            {workout.stats.last_set ? (new Date(workout.stats.last_set)).toLocaleDateString() : '—'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Authenticated>
    );
}
