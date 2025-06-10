import ModalBase from "@/components/ui/modal-base";

// Modalはクリックしたときに後ろが灰色になるような感じ
export default function LessonCard({
  setSearching,
}: {
  setSearching: (searching: boolean) => void;
}) {
  return (
    <ModalBase setState={setSearching}>
      <div className="relative p-8 bg-white rounded-3xl shadow-lg w-96">
        {/* 閉じるボタン */}
        <button
          onClick={() => setSearching(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* ポップアップのタイトル */}
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
    </ModalBase>
  );
}
