import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category = async() => {
    const res = await fetch('https://pixgen-pearl.vercel.app/category.json');
    const data = await res.json();
    return (
        <div className='space-x-3 my-3'>
            {
                data.map((btns)=>(<Link key={btns.id} href={`?catagory=${btns.name.toLowerCase()}`}><Button  variant='outline'>{btns.name}</Button></Link>))
            }
        </div>
    );
};

export default Category;