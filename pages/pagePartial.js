import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {BootstrapCss} from "../util/styles";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

export const SearchBox = ({value, onChangeEvent}) => {
  return(
    <div style={{marginRight: '40px'}}>
      <TextField id="outlined-basic" label="search key" value={value} onChange = {(evt) => {onChangeEvent(evt.target.value)}} variant="outlined" />
    </div>
  )
}

export const ProductList = ({products}) =>  {
  return (
    <BootstrapCss style={{width: '90%'}}>
      {console.log(products.length/4)}
      <div class="con" style={{gridTemplateColumns: (products!=null && (Math.floor((products.length)/4) > 0)) ? 'repeat(auto-fill,minmax(250px, 1fr))': '', justifyContent: (products && Math.floor((products.length)/4 )== 0) ? 'center' : ''}}>
        {products.length >0 ? 
        products.map( item => (
        <div class=" mydiv">
                  <div class="bbb_deals">
                      <div class="bbb_deals_slider_container">
                          <div class=" bbb_deals_item">
                              <div class="bbb_deals_image"><img src={item.img ? item.img : '/food.jpg'} alt=""/></div>
                              <div class="bbb_deals_content">
                                  <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                      <div class="bbb_deals_item_category"><a href="#">{item.type_of_food ? item.type_of_food : 'Unknown'}</a></div>
                                  </div>
                                  <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                      <div class="bbb_deals_item_name">{item.name ? item.name : ''}</div>
                                      <div class="bbb_deals_item_price ml-auto">{item.address ? item.address : 'address not available'}</div>
                                  </div>
                                  <div class="available">
                                      <div class="available_line d-flex flex-row justify-content-start">
                                          <div class="available_title">PostCode: <span>{item.postcode ? item.postcode : "No post code present"}</span></div>
                                          <div class="sold_stars ml-auto"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                      </div>
                                      <div class="available_bar"><span style={{width:'17%'}}></span></div>
                                  </div>
                              </div> 
                          </div>
                      </div>
                </div>
          </div>))
          :
          <>no data available</>
        }
        </div>
    </BootstrapCss>
  )

}

export const PopoverFilter = ({menuList, onChangeValue}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

 return (
  <>
    <Button aria-controls="customized-menu"
      aria-haspopup="true"
      variant="contained"
      color="primary"
      onClick={(evt) => setAnchorEl(evt.currentTarget)} 
      style={{maxHeight: '40px'}}>
        <AddCircleIcon  />
    </Button>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <MenuItem onClick={()=>{onChangeValue(''); handleClose()}}>No selection</MenuItem>
      {menuList.map(menu => <MenuItem onClick={() => {onChangeValue(menu);handleClose()}}>{menu}</MenuItem>)}
    </Menu>
  </>
 )
}

