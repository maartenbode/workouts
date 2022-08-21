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

            <div className="py-12">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    {props.workouts.map(workout => (
                        <Link href={route('workouts.show', workout.uuid)} key={`workouts-${workout.uuid}`}>
                            <div className="bg-white hover:bg-stone-50 transition ease-in-out duration-150 overflow-hidden border-cream-dark border border-b-2 rounded-lg p-3 flex mb-1 items-center">
                                <img src={`/img/workouts/${workout.img_path}`} className="h-16 mr-4"/>

                                <div>
                                    <strong className="block">{workout.name}</strong>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Authenticated>
    );
}
