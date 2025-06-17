"use client";

import Link from "next/link";
import Modal from "./modal-base";
import React from "react";
import { useRouter } from "next/router";
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

export function PageBuck() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className=" inline-block align-middle text-black leading-none"
    ></button>
  );
}
