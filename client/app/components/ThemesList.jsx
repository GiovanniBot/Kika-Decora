'use client';
import React, { useEffect, useState } from 'react';

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
    <div>
      <ul>
        {filteredThemes.map((theme) => (
          <li key={theme._id}>{theme.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ThemesList;
