import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const VideoWrapper = styled.div`
  width: 100%;
`;

const VideoIframe = styled.iframe`
  width: 100%;
  aspect-ratio: 16/9;
`;

const VideoTitle = styled.h2`
  margin-top: 20px;
`;

const VideoDescription = styled.p`
  margin-top: 20px;
`;

const VideoColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 520px;
  height: 100vh;
  overflow-y: scroll;
`;

const VideoPage = styled.div`
  display: flex;
  align-items: center;
`;

const VideoEl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const VideoThumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const VideoInfo = styled.div`
  text-align: center;
  padding: 10px;
`;

const VideoT = styled.h3`
  margin-top: 10px;
  color: #333;
`;

const VideoDesc = styled.p`
  color: #666;
  font-size: 14px;
`;

// Assume VideoColumns is already defined and styled appropriately

export {
  Container,
  VideoWrapper,
  VideoIframe,
  VideoTitle,
  VideoDescription,
  VideoColumns,
  VideoPage,
  VideoEl,
  VideoThumbnail,
  VideoInfo,
  VideoT,
  VideoDesc,
};
