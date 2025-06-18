"use client";

import Link from "next/link";
import Modal from "./modal-base";
import React from "react";
import { useRouter } from "next/navigation";
import { Lesson } from "./Card";

export function LessonButton() {
  return (
    <Link href="/menu">
      <Lesson />
    </Link>
  );
}

export function MenuButton() {
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  return (
    <div
      onClick={() => setIsOpenModal(true)}
      className="bg-blue-700 text-white p-4 rounded-lg shadow-md min-h-[100px] flex flex-col justify-between cursor-pointer"
    >
      <h3 className="text-base font-semibold">第一回</h3>
      <p className="text-xs text-right mt-1">プログラミング実習</p>

      {/* --- モーダル --- */}
      <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </div>
  );
}

export function BuckPage() {
  const router = useRouter();
  const handleBuck = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBuck}
      className="inline-block align-middle text-red-700 leading-none w-0 h-0 border-solid border-transparent border-[1em] border-r-[1.3em] border-r-current border-l-0 shadow-md active:text-red-900 active:scale-98 transition-all duration-100 ease-out"
    ></button>
  );
}
