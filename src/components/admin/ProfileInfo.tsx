import { User, Mail, Phone, Shield } from 'lucide-react';
import InfoCard from './InfoCard';

interface ProfileInfoProps {
    title: string;
    labels: {
        fullName: string;
        email: string;
        phoneNumber: string;
        userType: string;
    };
    values: {
        fullName: string;
        email: string;
        phoneNumber: string;
        userType: string;
    };
}

export default function ProfileInfo({ title, labels, values }: ProfileInfoProps) {
    return (
        <div className="bg-white rounded-3xl border border-gray-100 p-6">
            <h2 className="text-sm font-bold text-[#161A1E] mb-4 flex items-center gap-2">
                <User size={16} className="text-[#5BA4C8]" />
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <InfoCard icon={<User size={16} />}   label={labels.fullName}    value={values.fullName}    />
                <InfoCard icon={<Mail size={16} />}   label={labels.email}       value={values.email}       />
                <InfoCard icon={<Phone size={16} />}  label={labels.phoneNumber} value={values.phoneNumber} />
                <InfoCard icon={<Shield size={16} />} label={labels.userType}    value={values.userType} accent />
            </div>
        </div>
    );
}