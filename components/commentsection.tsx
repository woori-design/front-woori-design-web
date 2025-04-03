"use client"

import { useState } from "react"

interface Comment {
  id: number
  text: string
}

interface CommentSectionProps {
  initialComments?: Comment[]
}

export default function CommentSection({ initialComments = [] }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(
    initialComments.length > 0
      ? initialComments
      : [
          { id: 1, text: "버튼 이미지요 감사합니다." },
          { id: 2, text: "버튼 이미지요 감사합니다." },
          { id: 3, text: "버튼 이미지요 감사합니다." },
        ],
  )
  const [newComment, setNewComment] = useState("")

  const handleSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), text: newComment }])
      setNewComment("")
    }
  }

  return (
    <div className="comments-section">
      <h2 className="comments-title">댓글 {comments.length}</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <p>{comment.text}</p>
        </div>
      ))}
      <div className="comment-form">
        <textarea
          placeholder="댓글을 작성해주세요..."
          rows={3}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button className="comment-submit" onClick={handleSubmit}>
          등록
        </button>
      </div>
    </div>
  )
}

