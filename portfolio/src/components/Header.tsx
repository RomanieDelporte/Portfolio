interface NavItem {
    title: string;
    url: string;
}

const navItems: NavItem[] = [
    {title: 'Home', url: '/'},
    {title: 'About', url: '/about'},
    {title: 'Projects', url: '/projects'},
    {title: 'Contact', url: '/contact'},
];


export function Header() {
    const router = useRouter();
    return (
        <>
            <div className="flex items-center justify-around">
                <div>
                    <img
                        src="/romanie.png"
                        alt="Romanie logo"
                        className="h-16 w-16 rounded-full"
                    />
                </div>
                <nav className="bg-gray-50 p-4 rounded-xl flex justify-center ml-12">
                    <ul className="flex space-x-6">
                        {navItems.map(item => (
                            <li key={item.title}>
                                <a
                                    href={item.url}
                                    className={router.pathname === item.url ? 'text-rose-400' : 'text-gray-600'}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}
