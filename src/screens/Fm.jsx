import React, { useState, useEffect } from "react";
import "./AddCard.css";
const Fm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user_id, setUserId] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 4000);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim() || !user_id.trim()) {
      setError(true);
      return false;
    }
    try {
      setBusy(false);
      const baseURL = "http://vitcarellc.local/api/v1/user/register";
      let result = await fetch(baseURL, {
        method: "post",
        body: JSON.stringify({ email, password, user_id }),
        // headers: {
        //   "Content-Type": "application/json",
        //   "Access-Control-Allow-Crendentials": true,
        //   "Access-Control-Allow-Headers": true,
        //   "Access-Control-Allow-Origin": "*",
        // },
      });

      result = await result.json();

      if (!result.success) {
        setError(result.error);
        setBusy(false);
        return;
      }
      if (result.success) {
        setSuccess(result.message);
        setBusy(false);
        setEmail("");
        setPassword("");
        setUserId("");
        return;
      }
      console.log(body);
    } catch (error) {
      return setError(error.response);
    }
  };

  return (
    <div id="CardForm">
      <form className="">
        <h3>Apply for the position</h3>

        <div className="flex w-full">
          <input
            className="w-[50%] hover:border-green"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-[50%] "
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex w-full">
          <input
            className="w-[50%]"
            placeholder="user ID"
            name="user_id"
            type="text"
            value={user_id}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>

        <div className="flex w-full">
          {}
          {error && (
            <p className="text-center mb-2 pt-2 text-red-500">{error}</p>
          )}

          {success && (
            <div className="text-center bg-[#c8e6c9] text-[#81c784] text-sm text-align-center px-auto py-4 md:w-[80%] lg:w-[500px] my-[5px] mx-[20px]">
              {success}
            </div>
          )}
        </div>
        <button
          onClick={handleSubmit}
          className="w-auto mt-10 rounded-md bg-green-700 hover:bg-green-500 hover:px-7 transition-all duration-500 text-white py-3 px-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Fm;
