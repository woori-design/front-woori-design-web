'use client';

import { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function Modal({ isOpen, onClose, onConfirm }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node) && isOpen) {
        onClose();
      }
    };

    window.addEventListener('mousedown', handleOutsideClick);
    return () => window.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50" />
      <div ref={modalRef} className="bg-white w-[543px] h-[280px] rounded-[18px] z-10">
        <div className="h-full flex flex-col items-center justify-center px-[82px]">
          <h2 className="text-[22px] font-semibold mb-[50px]">계정 탈퇴</h2>
          <p className="text-base mb-[40px]">정말 탈퇴하시겠습니까?</p>
          <div className="flex gap-[20px] w-full justify-center">
            <button
              className="w-[130px] h-[56px] rounded-[8px] bg-[#0D6CC1] text-white hover:bg-[#0D63B1]"
              onClick={onConfirm}
            >
              탈퇴하기
            </button>
            <button
              className="w-[130px] h-[56px] rounded-[8px] bg-[#ABABAB] text-white hover:bg-[#979797]"
              onClick={onClose}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
