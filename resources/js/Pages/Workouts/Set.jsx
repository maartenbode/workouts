import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import Label from '@/Components/Label';
import Input from '@/Components/Input';
import InputError from '@/Components/InputError';
import Button from '@/Components/Button';

export default function Set(props) {
    const { data, setData, put, processing, errors, reset } = useForm({
        uuid: props.set.uuid,
        amount: props.set.amount,
        reps: props.set.reps,
        weight: props.set.weight,
    });

    const handleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault()

        put(route('workout-sets.update', props.set.uuid))
    }

    function handleDelete(e) {
        e.preventDefault()

        Inertia.delete(route('workout-sets.destroy', props.set.uuid))
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Set bewerken</h2>}
        >
            <Head title="Set bewerken"/>

            <div className="py-6">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg border-cream-dark border border-b-2 p-5">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Label forInput="amount" value="Sets" />

                                <Input
                                    type="number"
                                    name="amount"
                                    value={data.amount}
                                    className="mt-1 block w-full"
                                    handleChange={handleChange}
                                />

                                <InputError message={errors.amount} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <Label forInput="reps" value="Reps" />

                                <Input
                                    type="number"
                                    name="reps"
                                    value={data.reps}
                                    className="mt-1 block w-full"
                                    handleChange={handleChange}
                                />

                                <InputError message={errors.reps} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <Label forInput="weight" value="Gewicht" />

                                <Input
                                    type="number"
                                    name="weight"
                                    value={data.weight}
                                    className="mt-1 block w-full"
                                    handleChange={handleChange}
                                />

                                <InputError message={errors.weight} className="mt-2" />
                            </div>

                            <div className="text-right mt-4">
                                <Button>Opslaan</Button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <button className="text-sm text-red-600 font-bold hover:underline" onClick={handleDelete}>Verwijderen</button>
                </div>
            </div>
        </Authenticated>
    );
}
