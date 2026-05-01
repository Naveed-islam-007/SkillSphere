'use client';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/My-profile', label: 'My Profile' },
];

const authLinks = [
  { href: '/signup', label: 'SignUp' },
  { href: '/signin', label: 'SignIn' },
];

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const pathname = usePathname();

  return (
    <div className="navbar bg-base-100 shadow-sm">

      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>
          <div tabIndex={0} className="dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow flex flex-col">
            <ul className="list-none flex flex-col">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`p-2 hover:bg-base-200 rounded block pb-1 border-b-2 transition-colors ${
                      pathname === href ? 'border-black' : 'border-transparent'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link href={'/'} className="btn btn-ghost text-xl">🎓 SkillSphere</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="list-none flex gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`pb-1 border-b-2 transition-colors ${
                  pathname === href ? 'border-black' : 'border-transparent'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        {!user ? (
          <ul className="list-none flex gap-4">
            {authLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`pb-1 border-b-2 transition-colors ${
                    pathname === href ? 'border-black' : 'border-transparent'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image
                  src={user.image}
                  alt="user avatar"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
              </div>
            </div>
            <button
              onClick={() => authClient.signOut()}
              className="btn btn-sm btn-neutral"
            >
              Logout
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default Navbar;