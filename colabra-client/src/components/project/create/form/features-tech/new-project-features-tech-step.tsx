import React, { useState } from 'react';




export default function NewProjectFeaturesTechStep() {
    const [inputValue, setInputValue] = useState<string>('');
    const [tags, setTags] = useState<string[]>([]);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
  
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && inputValue.trim()) {
        setTags((prevTags) => [...prevTags, inputValue.trim()]);
        setInputValue('');
        e.preventDefault(); // Prevent form submission on Enter
      }
      if (e.key === 'Backspace' && !inputValue) {
        setTags((prevTags) => prevTags.slice(0, -1)); // Remove last tag on Backspace
      }
    };
  
    const removeTag = (tagToRemove: string) => {
      setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
    };
  
    return (
      <div className="flex flex-col p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Input Features</h2>
        <div className="flex flex-wrap mb-4">
          {tags.map((tag) => (
            <span key={tag} className="flex items-center bg-blue-500 text-white rounded-full px-3 py-1 mr-2 mb-2">
              {tag}
              <button
                onClick={() => removeTag(tag)}
                className="ml-2 text-xs font-semibold text-white hover:text-blue-300"
              >
                &times;
              </button>
            </span>
          ))}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type a feature and press Enter..."
            className="flex-1 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
          />
        </div>
        <div className="text-gray-600">
          {tags.length === 0 ? "No features added." : `Features: ${tags.join(', ')}`}
        </div>
      </div>
    );
}
