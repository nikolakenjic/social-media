import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 3;
  height: calc(100vh - 50px);
  overflow-y: scroll;
  position: sticky;
  top: 50px;

  /* ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(179, 179, 179);
  } */

  .sidebarWrapper {
    padding: 20px;
  }

  .sidebarList {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .sidebarListItem {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .sidebarIcon {
    margin-right: 15px;
  }

  .sidebarButton {
    width: 150px;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-weight: 500;
  }

  .sidebarHr {
    margin: 20px 0;
  }

  .sidebarFriendList {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .sidebarFriend {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .sidebarFriendImg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
`;

export default Wrapper;
