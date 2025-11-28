import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Users',
        href: "/users",
    },
];

export default function Index({users}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />

          {users.map(user=>(
            <div key={user.id}>
                <h2>Hi {user.name}</h2> 
                <h2>{user.email}</h2> 
                 <h2>{user.password}</h2>   </div>
          ))}
                
        </AppLayout>
    );
}
