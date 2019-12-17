import React from "react";

export default function NameFilter({searchValue, onTextchange = () => {}}) {

 

  


  return (
    <form className="form-inline md-form form-sm mt-0 col-6">
      <i className="fas fa-search col-6" aria-hidden="true"></i>
      <input
        className="form-control form-control-sm  ml-3 w-75"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={ (event) => onTextchange(event.target.value) }
        value={searchValue}
      />

      
    </form>
  );
}
