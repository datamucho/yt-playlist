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

const StyledDropdown = styled.select`
  padding: 10px 15px;
  margin-top: 15px;
  margin-right: 10px;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid #ddd;
  background-color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 15px;

  &:hover {
    background-color: #0056b3;
  }
`;

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
  StyledDropdown,
  StyledButton,
};
