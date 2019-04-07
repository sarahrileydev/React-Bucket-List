import React from 'react';
import Bucket from "./Bucket";

const BucketList = props => {
  return (
    <div className="bucket-list">
    {props.bucket.map(item => (
      <Bucket key={item.id} item={item}/>
    ))}
    </div>
  );
}


export default BucketList;