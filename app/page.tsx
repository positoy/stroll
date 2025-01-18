import Image from "next/image";

import FeedItem from "./components/FeedItem";

const feedData = [
  {
    distance: "3.4km",
    location: "종로구",
    likes: 4000,
    mapImageUrl: "/map-preview-1.png",
  },
  {
    distance: "3.4km",
    location: "종로구",
    likes: 4000,
    mapImageUrl: "/map-preview-2.png",
  },
  {
    distance: "3.4km",
    location: "종로구",
    likes: 4000,
    mapImageUrl: "/map-preview-3.png",
  },
];

const FeedList = () => {
  return (
    <div style={styles.feedContainer}>
      {feedData.map((item, index) => (
        <FeedItem
          key={index}
          distance={item.distance}
          location={item.location}
          likes={item.likes}
          mapImageUrl={item.mapImageUrl}
        />
      ))}
    </div>
  );
};

const styles = {
  feedContainer: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px", // 피드 간 간격
  },
  // 반응형 스타일
  "@media (min-width: 768px)": {
    feedContainer: {
      padding: "40px", // 태블릿 이상 화면에서 더 넓은 여백
    },
  },
};

export default FeedList;
