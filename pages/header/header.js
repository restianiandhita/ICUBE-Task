import Link from 'next/link';

export default function Header() {
    return <div>
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                    <div className="container-fluid">
                    <a className="navbar-brand"><a aria-current="page" as="/" href='/' style={{textDecoration:'none', color:'whitesmoke'}}>Your Meal</a></a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav d-flex mb-3 mb-lg-0">
                                <li className="nav-item p-2 bd-highlight">
                                    <Link className="nav-link" aria-current="page" as="/home" href='/'>Home</Link>
                                </li>
                                <li className="nav-item p-2 bd-highlight">
                                    <Link className="nav-link" as="/category" href='/category'>Category</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
    </div>
}