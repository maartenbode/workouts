import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Detail(props) {
    const [values, setValues] = useState({
        amount: "",
        reps: "",
        weight: "",
        workout_uuid: props.workout.uuid
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value

        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        Inertia.post(route('workout-sets.store'), values)
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{props.workout.name}</h2>}
        >
            <Head title={props.workout.name}/>

            <div className="py-4">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <h2 className="font-bold mb-3">Set toevoegen</h2>

                    <div className="mb-5">
                        <form onSubmit={handleSubmit}>
                            <div className="flex justify-between">
                                <div className="w-1/5 mr-1">
                                    <span className="text-stone-600 text-sm">Sets</span>
                                    <input type="number" step={1} inputMode="decimal" value={values.amount} id="amount" onChange={handleChange} className="border-stone-300 shadow-sm rounded-lg w-full"/>
                                </div>
                                <div className="w-1/5 mr-1">
                                    <span className="text-stone-600 text-sm">Reps</span>
                                    <input type="number" step={1} inputMode="decimal" value={values.reps} id="reps" onChange={handleChange} className="border-stone-300 shadow-sm rounded-lg w-full"/>
                                </div>
                                <div className="w-2/5 mr-1">
                                    <span className="text-stone-600 text-sm">KG</span>
                                    <input type="number" step={1} inputMode="decimal" value={values.weight} id="weight" onChange={handleChange} className="border-stone-300 shadow-sm rounded-lg w-full"/>
                                </div>
                                <div className={"w-1/5"}>
                                    <span className="text-stone-600 text-sm">&nbsp;</span>
                                    <button type="submit" className="bg-stone-900 text-white py-1.5 border border-stone-900 rounded-lg font-bold shadow-sm text-xl w-full">
                                        +
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <h2 className="font-bold mb-3">Geschiedenis</h2>

                    {Object.keys(props.sets).length ? (
                        <>
                            {Object.keys(props.sets).map((index) => (
                                <div className="mb-4" key={`set-group-${index}`}>
                                    <div className="mb-2">
                                        <span className="text-stone-700 text-sm">{index}</span>
                                    </div>

                                    <div className="bg-white rounded-lg border-cream-dark border border-b-2">
                                        {props.sets[index].map((set, index) => (
                                            <Link href={route('workout-sets.show', set.uuid)} key={`set-${set.uuid}`} className={`p-3 flex justify-between ${index !== 0 && 'border-t'}`}>
                                                <span>
                                                    {set.amount}x{set.reps}
                                                </span>

                                                <div>
                                                    <strong className="mr-2">{set.weight}kg</strong>

                                                    <span>→</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <div className="text-stone-600 text-sm">Nog geen sets...</div>
                    )}
                </div>
            </div>
        </Authenticated>
    );
}
