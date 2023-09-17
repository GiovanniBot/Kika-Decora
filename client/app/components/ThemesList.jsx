'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function ThemesList({ themes }) {
  const [selectedTag, setSelectedTag] = useState('');
  const [filteredThemes, setFilteredThemes] = useState(themes);

  useEffect(() => {
    // Handle the custom event to update the selected tag
    const handleTagChange = (event) => {
      setSelectedTag(event.detail.tag);
    };

    // Listen for the custom event
    window.addEventListener('tagChange', handleTagChange);

    // Filter themes based on the selected tag
    const filtered = themes.filter((theme) =>
      selectedTag ? theme.tag.includes(selectedTag) : true
    );
    setFilteredThemes(filtered);

    // Clean up the event listener
    return () => {
      window.removeEventListener('tagChange', handleTagChange);
    };
  }, [themes, selectedTag]);

  return (
    <div className='w-[87%] xl:w-[80%] 2xl:w-[70%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 lg:mt-6'>
      {filteredThemes.map((theme) => (
        <Link key={theme._id} href={`/themes/${theme._id}`}>
          <div className='media-element ms-3 me-3 mb-8'>
            <Image
              src={theme.mainImg}
              alt={theme.name}
              width={150}
              height={150}
            />

            <p className='text-xs md:text-lg ms-2 my-1'>
              {theme.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ThemesList;
