import { useState, useCallback } from "react";

const PasswordGenerator = () => {
	const [length, setLength] = useState(8);

	const [numbersAllowed, setNumbersAllowed] = useState(false);

	const [charactersAllowed, setCharactersAllowed] = useState(false);

	const [password, setPassword] = useState("");

	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (numbersAllowed) {
			str = str + "0123456789";
		}
		if (charactersAllowed) {
			str = str + "!@#$%^&*+-/=";
		}
		for (let index = 0; index < length; index++) {}
	}, [length, numbersAllowed, charactersAllowed]);

	return (
		<div className="flex justify-center">
			<div className="flex flex-col justify-center items-center gap-6 pt-8 pb-5 border-2 w-[800px]  rounded-3xl bg-[#20202f]">
				<div className="flex">
					<input
						type="text"
						readOnly
						className="input rounded-r-none  w-[600px]"
					/>

					<button className="btn font-semibold text-xl bg-blue-600  hover:bg-indigo-700 rounded-l-none text-white border-none outline-none">
						Copy
					</button>
				</div>
				<div className="flex gap-5 justify-center items-center">
					<label className="label cursor-pointer flex gap-2 ">
						<input
							type="range"
							min="4"
							max="80"
							value={length}
							className=" w-[250px] "
							onChange={(e) => {
								setLength(e.target.value);
							}}
						/>
						<span className="label-text text-white text-lg font-medium ml-2">
							Length: {length}
						</span>
					</label>

					<label className="label cursor-pointer flex gap-2 ">
						<input
							type="checkbox"
							checked="checked"
							className="checkbox checkbox-primary"
						/>
						<span className="label-text text-white text-lg font-medium">
							Numbers
						</span>
					</label>

					<label className="label cursor-pointer flex gap-2 ">
						<input
							type="checkbox"
							checked="checked"
							className="checkbox checkbox-primary"
						/>
						<span className="label-text text-white text-lg font-medium">
							Characters
						</span>
					</label>
				</div>
			</div>
		</div>
	);
};

export default PasswordGenerator;
