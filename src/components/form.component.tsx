import { useState } from "react";
import { FormDataType } from "../utils/interfaces/data.interface";

export function Form({ items }: any) {
  const [validEmail, setvalidEmail] = useState(true);
  const [validPhoneNum, setValidPhoneNum] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const responseBody: FormDataType = {};
  const validate = (prop: FormDataType) => {
    let phoneNum = prop["phone"].toString().replaceAll(" ", "");
    let email = prop["email"].toString().replaceAll(" ", "");
    let password = prop["password"].toString();
    if (password.length === 0) {
      setValidPassword(false);
    } else if (
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W)[\dA-Za-z\W]{8,}$/.test(password)
    ) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
    if (phoneNum.length > 10 && !/^[0-9]{10,14}$/.test(phoneNum)) {
      if (
        phoneNum.charAt(phoneNum.length - 10) !== "2" &&
        phoneNum.charAt(phoneNum.length - 10) !== "6"
      ) {
        setValidPhoneNum(false);
      }
    } else if (phoneNum.length === 10 && !/^(6|2)\d{9}$/.test(phoneNum)) {
      setValidPhoneNum(false);
    } else if (phoneNum.length < 10) {
      setValidPhoneNum(false);
    } else {
      setValidPhoneNum(true);
    }
    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.toString())
    ) {
      setvalidEmail(false);
    } else {
      setvalidEmail(true);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    formData.forEach(
      (value, property: string) => (responseBody[property] = value)
    );
    validate(responseBody);
    console.log(JSON.stringify(responseBody));
  };
  return (
    <>
      <h1 className="text-2xl pb-20 text-center">{items.formText}</h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            {items.formLabels[0]}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            name="phone"
            type="number"
            placeholder="Phone"
          />
          {!validPhoneNum ? (
            <p className="text-red-500 text-xs italic">
              Please enter a valid phone number.
            </p>
          ) : null}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            {items.formLabels[1]}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="text"
            placeholder="Email"
          />
          {!validEmail ? (
            <p className="text-red-500 text-xs italic">
              Please enter a valid email.
            </p>
          ) : null}
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            {items.formLabels[2]}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="**********"
          />
          {!validPassword ? (
            <p className="text-red-500 text-xs italic">
              Parsword should be at least 8 characters and contain: a number, a
              capital letter, a symbol and a low case letter.
            </p>
          ) : null}
        </div>
        <div className="flex items-center justify-between">
          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          />
        </div>
      </form>
    </>
  );
}
