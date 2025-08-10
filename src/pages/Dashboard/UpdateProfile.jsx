import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error("Failed to update profile");
      console.error(err);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-base-200 rounded-lg shadow p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Update Your Profile</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block font-medium">Display Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input input-bordered w-full" />
        </div>
        <div>
          <label className="block font-medium">Photo URL</label>
          <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} className="input input-bordered w-full" />
        </div>
        <button type="submit" className="btn bg-blue-600 w-full">Update Profile</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
