import { icons } from 'lucide-react';

const Icon = ({name, color, size}: { name: string, color: string, size: string }) => {
    const LucideIcon = icons[name];

    return <LucideIcon
        color={color}
        size={size}
    />;
};

export default Icon;