import React from "react";

const FeedItem = ({ distance, location, likes, mapImageUrl }) => {
  return (
    <div style={styles.container}>
      <img src={mapImageUrl} alt="Map preview" style={styles.mapImage} />
      <div style={styles.info}>
        <div style={styles.details}>
          <span>
            {distance}, {location}
          </span>
        </div>
        <div style={styles.likes}>
          <span style={styles.heart}>❤️</span> {likes}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "400px", // 기본 최대 너비
    margin: "10px auto",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd", // 검은색 테두리 추가
  },
  mapImage: {
    width: "100%",
    height: "auto",
  },
  info: {
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px",
  },
  details: {
    color: "#333",
  },
  likes: {
    display: "flex",
    alignItems: "center",
  },
  heart: {
    color: "red",
    marginRight: "5px",
  },
  // 반응형 스타일 (media query)
  "@media (min-width: 768px)": {
    container: {
      maxWidth: "600px", // 태블릿 이상 화면에서 너비 조정
    },
    info: {
      fontSize: "16px", // 태블릿 이상 화면에서 폰트 크기 증가
    },
  },
};

export default FeedItem;
