import React, { useState } from "react";

type Props = {
  overview: string | undefined;
};

const ReadMore = ({ overview }: Props) => {
  const [isReadMore, setIsReadMore] = useState<boolean>(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p>
      {isReadMore ? overview?.slice(0, 180) : overview}
      <button className="ml-2 font-semibold" onClick={() => toggleReadMore()}>
        {isReadMore ? "...read more" : "show less"}
      </button>
    </p>
  );
};

export default ReadMore;
