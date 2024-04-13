import styled from "styled-components";

export const Banner = styled.div`
  position: relative;
  height: 600px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 600px;
    background: linear-gradient(to bottom, transparent, #141414);
    z-index: 99;
  }
`;

export const Banner_Info = styled.div`
  position: absolute;
  top: 200px;
  left: 60px;
  width: 500px;
  z-index: 100;

  .banner_info_title {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .banner_info_list {
    display: flex;
    margin-bottom: 15px;
  }

  .banner_info_item {
    font-size: 14px;
    color: #E5E5E5;

    &::after {
      content: '|';
      margin: 0 10px;
    }

    &:last-child {
      margin-right: 0;

      &::after {
        content: '';
      }
    }
  }

  .banner_info_desc {
    font-size: 16px;
  }
`;
// /* mobile */
// .banner_background_mobile {
//   position: relative;
//   height: 500px;
//   background-repeat: no-repeat;
//   background-position: center center;
//   background-size: cover;
// }
// .banner_background_mobile::before {
//   content: '';
//   position: absolute;
//   left: 0;
//   width: 100%;
//   height: 500px;
//   background: linear-gradient(to bottom, transparent, #141414);
//   z-index: 99;
// }

// .banner_info_mobile {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 300px;
//   z-index: 100;
// }
// .banner_info_mobile h1 {
//   font-size: 35px;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 15px;
// }
// .banner_info_list_mobile {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 15px;
// }
// .banner_info_list_mobile li {
//   font-size: 14px;
//   color: #E5E5E5;
// }
// .banner_info_list_mobile li:after {
//   content: '|';
//   margin: 0 10px;
// }
// .banner_info_list_mobile li:last-child {
//   margin-right: 0;
// }
// .banner_info_list_mobile li:last-child::after {
//   content: '';
// }
// .banner_info_mobile .desc {
//   font-size: 16px;
// }