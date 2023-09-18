'use client'

import React, { useState, useEffect } from 'react';

interface Theme {
  tag: string;
}

interface SelectTagDropdownProps {
  themes: Theme[];
}

function SelectTagDropdown({ themes }: SelectTagDropdownProps) {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const allTags = themes.map((theme) => theme.tag).flat();
    const uniqueTags = Array.from(new Set(allTags));
    setTags(uniqueTags);
  }, [themes]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);

    const queryParams = new URLSearchParams(window.location.search);

    if (value) {
      queryParams.set('tag', value);
    } else {
      queryParams.delete('tag');
    }

    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    window.history.replaceState({}, '', newUrl);

    // Trigger the custom event to notify ThemesList of the tag change
    const tagChangeEvent = new CustomEvent('tagChange', { detail: { tag: value } });
    window.dispatchEvent(tagChangeEvent);
  };

  return (
    <div className='me-4'>
      <select
        value={selectedValue}
        onChange={handleSelectChange}
        className='appearance-none bg-[#B3A3DE] rounded-md text-white border-solid border-[1px] border-white px-3 py-[1px] lg:py-[0px] xl:py-[1px] text-center pe-4'
      >
        <option value="">▾ㅤSelecione</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectTagDropdown;
