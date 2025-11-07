import React from "react";
import Navbar from "../components/navbar";

export default function Profile() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container text-gray-800 mx-auto mt-10 p-6 bg-white shadow rounded">
                <h1 className="text-2xl font-bold mb-4">Profile</h1>
                <p>View and edit your profile information here.</p>
            </div>
        </div>
    );
}