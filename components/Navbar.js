import Link from 'next/link';

//Top Navbar
export default function Navbar() {
    // const { user, username } = { };
    const user = true
    const username = true;


    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>

                {/* user is signed in and has a username */}
                {username && (
                    <>
                        <li className="push-left">
                            <Link href="/admin">
                                <button className="btn-blue">Write Posts</button>
                                </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`}>
                                <img src={user?.photoURL} />
                            </Link>
                        </li>
                    </>
                )}

                {/* user is NOT signed in OR has NOT created a username */}
                {!username && (
                    <li>
                        <Link href="/enter">
                            <button className="btn-blue">Log In</button>
                        </Link>
                    </li>
                )}

            </ul>
        </nav>
    );
}