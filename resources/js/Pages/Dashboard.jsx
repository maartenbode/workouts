import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden border-cream-dark border border-b-2 rounded-lg">
                        <div className="p-6 bg-white">Je bent ingelogd!</div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
