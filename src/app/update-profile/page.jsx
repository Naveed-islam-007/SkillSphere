"use client"
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const UpdateProfilePage = () => {
    const router = useRouter();
    const userData = authClient.useSession();
    const user = userData.data?.user;

    if (!user) return <div>Loading...</div>;

    const handleUpdate = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;

        const { error } = await authClient.updateUser({
            name,
            image,
        });

        if (!error) {
            router.push('/My-profile');
        } else {
            console.log(error);
        }
    };

    return (
        <div className='flex flex-row justify-center items-center min-h-[60vh]'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">Update Profile</h2>
                    <form onSubmit={handleUpdate}>
                        <label className="label">Name</label>
                        <input
                            name='name'
                            type="text"
                            className="input w-full"
                            placeholder="Enter new name"
                            defaultValue={user.name}
                        />

                        <label className="label mt-2">Photo URL</label>
                        <input
                            name='image'
                            type="text"
                            className="input w-full"
                            placeholder="Enter new image URL"
                            defaultValue={user.image || ''}
                        />

                        <button type="submit" className="btn btn-primary mt-4 w-full">
                            Update Information
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfilePage;