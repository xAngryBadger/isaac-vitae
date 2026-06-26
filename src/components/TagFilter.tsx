import React from 'react';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagChange: (tags: string[]) => void;
}

export const TagFilter: React.FC<TagFilterProps> = ({ tags, selectedTags, onTagChange }) => {
  const toggleTag = (tag: string) => {
    const newSelected = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    onTagChange(newSelected);
  };

  return (
    <div className="tag-filter">
      {tags.map(tag => (
        <button
          key={tag}
          type="button"
          className={`tag ${selectedTags.includes(tag) ? 'active' : ''}`}
          onClick={() => toggleTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};
