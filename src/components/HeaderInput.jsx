import React from 'react';

export default function HeaderInput() {
  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        name="search"
      />
    </div>
  );
}
