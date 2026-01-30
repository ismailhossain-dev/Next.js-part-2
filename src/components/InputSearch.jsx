"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
  //search jordo food root page kaj koresi and amra ekta korthesei
  //useRouter er mardome amra navigate kore ek jay teke arek jaigay jay
  //step-1
  const router = useRouter();
  //step-2
  const params = useSearchParams();
  //amra url ja leksi ta amra ekane value hisabe papo
  console.log(params.toString());
  //e mardome amra from value ta nitesi
  const handleSummit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value;
    console.log(value);

    //step-3 search work and chatgpt help niye dekaise kaj ta zihad vai
    const newParams = new URLSearchParams(params.toString());

    //step-4 new value set
    newParams.set("search", value);
    //step-5 use ke niye jabo
    router.push(`?${newParams.toString()}`);
    //complete searchparams work
  };
  return (
    <div>
      <form onSubmit={handleSummit}>
        <input
          className="border-2 py-2 px-1 w-2xl  text-white"
          name="search"
          type="text"
          placeholder="Enter Your Food Name"
        />
        <button className="bg-orange-500 p-[10px] rounded" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
