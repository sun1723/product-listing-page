import styled from 'styled-components';

export const BootstrapCss = styled.div`
.con{
  display: grid;
  grid-gap: 20px;
  // grid-template-columns: repeat(auto-fill,minmax(250px, 1fr));
  grid-auto-flow: row;
}
.mydiv {
    margin-top: 50px;
    margin-bottom: 50px
}

.cross {
    font-size: 10px
}

.padding-0 {
    padding-right: 5px;
    padding-left: 5px
}

.img-style {
    margin-left: -11px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    max-width: 104% !important
}

.m-t-20 {
    margin-top: 20px
}

.bbb_background {
    background-color: #E0E0E0 !important
}

.ribbon {
    width: 150px;
    height: 150px;
    overflow: hidden;
    position: absolute
}

.ribbon span {
    position: absolute;
    display: block;
    width: 34px;
    border-radius: 50%;
    padding: 8px 0;
    background-color: #3498db;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
    color: #fff;
    font: 100 18px/1 'Lato', sans-serif;
    text-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    text-transform: uppercase;
    text-align: center
}

.ribbon-top-right {
    top: -10px;
    right: -10px
}

.ribbon-top-right::before,
.ribbon-top-right::after {
    border-top-color: transparent;
    border-right-color: transparent
}

.ribbon-top-right::before {
    top: 0;
    left: 17px
}

.ribbon-top-right::after {
    bottom: 17px;
    right: 0
}

.sold_stars i {
    color: orange
}

.ribbon-top-right span {
    right: 17px;
    top: 17px
}

div {
    display: block;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.bbb_deals_featured {
    width: 100%
}

.bbb_deals {
    width: 100%;
    margin-right: 7%;
    padding-top: 80px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 34px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-top: 0px;
    height: 100%
}

.bbb_deals_title {
    position: absolute;
    top: 10px;
    left: 22px;
    font-size: 18px;
    font-weight: 500;
    color: #000000
}

.bbb_deals_slider_container {
    width: 100%
}

.bbb_deals_item {
    width: 100% !important
}

.bbb_deals_image {
    width: 100%;
    
}

.bbb_deals_image img {
    width: 100%;
    object-fit: contain;
    height: 160px;
}

.bbb_deals_content {
    margin-top: 33px
}

.bbb_deals_item_category a {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5)
}

.bbb_deals_item_price_a {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6)
}

.bbb_deals_item_price_a strike {
    color: red
}

.bbb_deals_item_name {
    font-size: 24px;
    font-weight: 400;
    color: #000000;
    box-sizing: border-box;
    height: 60px
}

.bbb_deals_item_price {
    font-size: 24px;
    font-weight: 500;
    color: #6d6e73
}

.available {
    margin-top: 19px
}

.available_title {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 400
}

.available_title span {
    font-weight: 700
}

@media only screen and (max-width: 991px) {
    .bbb_deals {
        width: 100%;
        margin-right: 0px
    }
}

@media only screen and (max-width: 575px) {
    .bbb_deals {
        padding-left: 15px;
        padding-right: 15px
    }

    .bbb_deals_title {
        left: 15px;
        font-size: 16px
    }

    .bbb_deals_slider_nav_container {
        right: 5px
    }

    .bbb_deals_item_name,
    .bbb_deals_item_price {
        font-size: 20px
    }
}
`