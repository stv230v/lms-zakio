export function Lesson() {
  return (
    <div className="bg-[#c82828] text-white p-4 rounded-lg shadow-md min-h-[100px] flex flex-col justify-between active:bg-[#a92121] active:scale-98 transition-all duration-100 ease-out">
      <h3 className="text-base font-semibold">プログラミング実習</h3>
      <p className="text-xs text-right mt-1">KCG 坂本</p>
    </div>
  );
}

export function LessonCard() {
  return (
    <div>
      {/* ここにモーダルの中身 */}
      <h2 className="text-2xl font-bold mb-6 text-center">
        プログラミング実習
      </h2>
      ;{/* 第1回セクション */}
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
      ;
    </div>
  );
}
