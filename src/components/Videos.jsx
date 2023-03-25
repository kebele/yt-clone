import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, Loader, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  console.log(videos);
  if (!videos?.length) return <Loader />;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {/* {item.snippet.channelId && <ChannelCard channelDetail={item} />} */}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
