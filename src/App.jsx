import React from 'react';
import './App.css';
import CommentsThread from './CommentsThread'

const comments = [
  {
    id: 1,
    text: 'This is a comment',
    replies: [
      {
        id: 2,
        text: 'This is a reply',
        replies: [
          {
            id: 4,
            text: 'This is a nested reply',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    text: 'This is another comment',
    replies: [],
  },
];

function App() {
  return (
    <div className="App">
      <CommentsThread comments={comments} />
    </div>
  );
}

export default App;
