import stringFormater from '../helpers/formatString'

export default function Card() {
	const kasus = {
		populasi: 271349889,
		positif: 1963266,
		sembuh: 1779127,
		meninggal: 54043,
	}

	return (
		<div className="grid grid-cols-12 gap-6 mt-5">
			<div className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white dark:bg-gray-800">
				<div className="p-5">
					<div className="flex justify-between">
						<div className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
							<span className="flex items-center">
								{((kasus.positif / kasus.populasi) * 100).toFixed(2) + '%'}
							</span>
						</div>
					</div>
					<div className="ml-2 w-full flex-1">
						<div>
							<div className="mt-3 text-3xl font-bold leading-8 dark:text-white">
								{stringFormater(kasus.positif)}
							</div>

							<div className="mt-1 text-base text-gray-600 dark:text-white">
								POSITIF
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white dark:bg-gray-800">
				<div className="p-5">
					<div className="flex justify-between">
						<div className="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
							<span className="flex items-center">
								{((kasus.sembuh / kasus.positif) * 100).toFixed(2) + '%'}
							</span>
						</div>
					</div>
					<div className="ml-2 w-full flex-1">
						<div>
							<div className="mt-3 text-3xl font-bold leading-8 dark:text-white">
								{stringFormater(kasus.sembuh)}
							</div>

							<div className="mt-1 text-base text-gray-600 dark:text-white">
								SEMBUH
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white dark:bg-gray-800">
				<div className="p-5">
					<div className="flex justify-between">
						<div className="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
							<span className="flex items-center">
								{((kasus.meninggal / kasus.positif) * 100).toFixed(2) + '%'}
							</span>
						</div>
					</div>
					<div className="ml-2 w-full flex-1">
						<div>
							<div className="mt-3 text-3xl font-bold leading-8 dark:text-white">
								{stringFormater(kasus.meninggal)}
							</div>

							<div className="mt-1 text-base text-gray-600 dark:text-white">
								MENINGGAL
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white dark:bg-gray-800">
				<div className="p-5">
					<div className="flex justify-between">
						<div className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
							<span className="flex items-center">100%</span>
						</div>
					</div>
					<div className="ml-2 w-full flex-1">
						<div>
							<div className="mt-3 text-3xl font-bold leading-8 dark:text-white">
								{stringFormater(kasus.populasi)}
							</div>

							<div className="mt-1 text-base text-gray-600 dark:text-white">
								Populasi Indonesia
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
