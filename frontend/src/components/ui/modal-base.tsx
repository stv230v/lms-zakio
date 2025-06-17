"use client";

import React, { useEffect, useRef } from "react";

export default function Modal({
  isOpenModal,
  setIsOpenModal,
}: {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // ---------------------------------------------
  // モーダル外をクリックした時の処理
  // ---------------------------------------------
  const modalRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !(modalRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsOpenModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, setIsOpenModal]);

  // ---------------------------------------------
  // モーダル表示中: 背面のスクロールを禁止
  // ---------------------------------------------
  useEffect(() => {
    if (isOpenModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpenModal]);

  return (
    <>
      {isOpenModal && (
        <div className="fixed z-10 top-0 left-0 w-full h-full bg-gray-400/60 bg-opacity-50">
          <div
            className="relative z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[95vh] md:max-h-[90vh] w-[97vw] md:w-[80vw] p-4 md:p-10 md:pb-20 bg-slate-100 border-2 border-neutral-950 shadow-lg rounded-xl overflow-auto"
            ref={modalRef}
          >
            {/* ここにモーダルの中身 */}
            <h2 className="text-2xl font-bold mb-6 text-center">
              プログラミング実習
            </h2>

            {/* 第1回セクション */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">第1回</h3>
              <p className="text-lg font-medium mb-4">プログラミングの基本</p>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">VS コードセットアップ</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">言語について</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">コードの特性について</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
