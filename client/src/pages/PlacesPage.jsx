import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import Perks from '../Perks';

export default function PlacesPage() {
    const { action } = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [photoLink, setPhotoLink] = useState('');
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);

    function inputHeader(text) {
        return <h2 className="text-2xl mt-4">{text}</h2>;
    }

    function inputDescription(text) {
        return <p className="text-gray-500 text-sm">{text}</p>;
    }

    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    }

    return (
        <div>
            {action !== 'new' && (
                <div className="text-center">
                    <Link
                        className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
                        to={'/account/places/new'}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                        Add new place
                    </Link>
                </div>
            )}
            {action === 'new' && (
                <div>
                    <form>
                        {preInput('Title', 'Title for your place')}
                        <input
                            type="text"
                            placeholder="title, for example: My apartment"
                        />
                        {preInput('Address', 'Address for your place')}
                        <input type="text" placeholder="address" />
                        {preInput('Photos', 'Your photos')}
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder={'Add using a link'}
                            />
                            <button className="bg-gray-200 px-4 rounded-2xl">
                                Add photo
                            </button>
                        </div>
                        <div className="grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4 mt-2">
                            <button className=" flex justify-center gap-1 border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                    />
                                </svg>
                                Upload
                            </button>
                        </div>
                        {preInput('Description', 'Description of your place')}
                        <textarea />
                        {preInput('Perks', ' Select all perks of place')}
                        <div className="grid gap-2 mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                            <Perks />
                        </div>
                        {preInput('Extra information', 'Rules')}
                        {/* <h2 className="text-2xl mt-4">Extra information</h2>
                        <p className="text-gray-500 text-sm">Rules</p> */}
                        <textarea />
                        {preInput(
                            'Check in/out time, max guests',
                            'add check in and out time'
                        )}
                        {/* <h2 className="text-2xl mt-4">
                            Check in/out time, max guests
                        </h2>
                        <p className="text-gray-500 text-sm">
                            add check in and out time
                        </p> */}
                        <div className="grid sm:grid-cols-3 gap-2">
                            <div>
                                <h3 className="mt-2 -mb-1">Check in time</h3>
                                <input type="text" placeholder="12:00" />
                            </div>
                            <div>
                                <h3 className="mt-2 -mb-1">Check out time</h3>
                                <input type="text" />
                            </div>
                            <div>
                                <h3 className="mt-2 -mb-1">
                                    Max number of guests
                                </h3>
                                <input type="text" />
                            </div>
                        </div>
                        <button className="primary my-4">Save</button>
                    </form>
                </div>
            )}
        </div>
    );
}
