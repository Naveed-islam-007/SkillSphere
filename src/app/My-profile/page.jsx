"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';

const MyProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    if (!user) return <div className='min-h-[60vh] flex justify-center items-center tex-2xl font-bold'>No Users logged in</div>;

    return (
        <div className='flex flex-row justify-center items-center min-h-[60vh]'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image src={user.image || '/default-avatar.png'} width={100} height={100} alt='user image' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{user.name}</h2>
                    <p>{user.email}</p>
                    <div className="card-actions justify-end">
                        <Link href="/update-profile" className="btn btn-primary">Update Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;