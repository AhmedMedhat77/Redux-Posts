import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

function TimeAgo(props) {
  let timeAgo = "";
  if (props.timeStamp) {
    const date = parseISO(props.timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} Ago`;
  }
  return (
    <span className="time" title={props.timeStamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
}

export default React.memo(TimeAgo);
