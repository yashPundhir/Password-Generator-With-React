import { useState, useCallback, useEffect } from "react";

const PasswordGenerator = () => {
	const [length, setLength] = useState(8);

	const [numbersAllowed, setNumbersAllowed] = useState(false);

	const [charactersAllowed, setCharactersAllowed] = useState(false);

	const [password, setPassword] = useState("");

	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (numbersAllowed) {
			str = str + "01234567890123456789";
		}
		if (charactersAllowed) {
			str = str + "!@#$%^&*+-/=";
		}
		for (let index = 0; index < length; index++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass = pass + str.charAt(char);
		}

		setPassword(pass);
	}, [length, numbersAllowed, charactersAllowed]);

	const copyPasswordToClipboard = useCallback(() => {
		window.navigator.clipboard.writeText(password);
	}, [password]);

	useEffect(() => {
		passwordGenerator();
	}, [length, numbersAllowed, charactersAllowed, passwordGenerator]);

	return (
		<div className="flex justify-center">
			<div className="flex flex-col justify-center items-center gap-6 pt-8 pb-5 border-2 w-[800px]  rounded-3xl bg-[#20202f]">
				<div className="flex">
					<input
						type="text"
						readOnly
						className="input rounded-r-none  w-[600px] text-3xl   font-medium"
						value={password}
					/>

					<button
						onClick={copyPasswordToClipboard}
						className="btn font-semibold text-xl bg-blue-600  hover:bg-indigo-700 rounded-l-none text-white border-none outline-none"
					>
						Copy
					</button>
				</div>
				<div className="flex gap-5 justify-center items-center">
					<label className="label cursor-pointer flex gap-2 ">
						<input
							type="range"
							min="4"
							max="25"
							value={length}
							className=" w-[250px]"
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
							defaultChecked={numbersAllowed}
							type="checkbox"
							className="checkbox checkbox-primary"
							onChange={() => setNumbersAllowed((prev) => !prev)}
						/>
						<span className="label-text text-white text-lg font-medium">
							Numbers
						</span>
					</label>

					<label className="label cursor-pointer flex gap-2 ">
						<input
							defaultChecked={charactersAllowed}
							type="checkbox"
							className="checkbox checkbox-primary"
							onChange={() => setCharactersAllowed((prev) => !prev)}
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
