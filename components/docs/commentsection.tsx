'use client';

import { useState } from 'react';

interface Comment {
  id: number;
  text: string;
}

interface CommentSectionProps {
  initialComments?: Comment[];
}

export default function CommentSection({ initialComments = [] }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(
    initialComments.length > 0
      ? initialComments
      : [
          { id: 1, text: '버튼 이미지요 감사합니다.' },
          { id: 2, text: '버튼 이미지요 감사합니다.' },
          { id: 3, text: '버튼 이미지요 감사합니다.' },
        ],
  );
  const [newComment, setNewComment] = useState('');

  const handleSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), text: newComment }]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">댓글 {comments.length}</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="py-4 border-b border-gray-200">
          <p className="m-0 leading-relaxed">{comment.text}</p>
        </div>
      ))}
      <div className="mt-6">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg resize-y mb-3 font-sans"
          placeholder="댓글을 작성해주세요..."
          rows={3}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-sky-600 text-white rounded-md font-medium hover:bg-sky-700 float-right"
          onClick={handleSubmit}
        >
          등록
        </button>
      </div>
    </div>
  );
}
