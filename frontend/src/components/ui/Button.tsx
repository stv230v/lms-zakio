import Link from 'next/link';

export function LessonButton() {
	return (
		<Link href="/menu">
			<div className="bg-[#c82828] text-white p-4 rounded-lg shadow-md min-h-[100px] flex flex-col justify-between active:bg-[#a92121] active:scale-98 transition-all duration-100 ease-out">
				<h3 className="text-base font-semibold">プログラミング実習</h3>
				<p className="text-xs text-right mt-1">KCG 坂本</p>
			</div>
		</Link>
	);
}

export function MenuButton() {
	return (
		<div className="bg-blue-700 text-white p-4 rounded-lg shadow-md min-h-[100px] flex flex-col justify-between">
			<h3 className="text-base font-semibold">第一回</h3>
			<p className="text-xs text-right mt-1">プログラミング実習</p>
		</div>
	);
}
