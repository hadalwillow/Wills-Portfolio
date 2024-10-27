import React from 'react';
import { Timeline } from 'react-twitter-widgets'

function Feed() {

    return (
        <div id="feed">
<Timeline
    dataSource={{ sourceType: "profile", screenName: "fieldsofmistria" }}
    options={{ chrome: "noheader, nofooter", width: "400", height: "600" }}
  />
        </div>
    );
}

export default Feed;