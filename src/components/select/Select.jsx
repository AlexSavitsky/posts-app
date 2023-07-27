import React, { useState, useEffect } from "react";
import Select from "react-select";

import "./style.scss";

const Filter = ({ users, fetchPosts }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isClearable, setIsClearable] = useState(false);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setIsClearable(true);
    fetchPosts(selectedOption);
  };

  useEffect(() => {
    if (users && users !== null) {
      setOptions(
        users.map((user) => {
          return {
            value: user.id,
            label: user.name,
          };
        })
      );
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [users]);

  return (
    <div className="filter">
      <Select
        className="select"
        isLoading={isLoading}
        isClearable={isClearable}
        value={selectedOption}
        onChange={handleSelectChange}
        options={options}
      />
    </div>
  );
};

export default Filter;
