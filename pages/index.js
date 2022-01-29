import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import clientPromise from "../lib/mongodb";
import {BootstrapCss} from "../util/styles";
import TextField from '@material-ui/core/TextField';

export default function Home({hotels}) {
  return (
    <div className="container">
      <Head>
        <title>properties</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="properties" />
      <main style={{width: '100%'}}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <BootstrapCss style={{width: '100%'}}>
          <div class="con">
        { hotels.map( hotel => (
        <div class=" mydiv">
                  <div class="bbb_deals">
                      <div class="bbb_deals_slider_container">
                          <div class=" bbb_deals_item">
                              <div class="bbb_deals_image"><img src={hotel.img ? hotel.img : '/noImgAvailable.png'} alt=""/></div>
                              <div class="bbb_deals_content">
                                  <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                      <div class="bbb_deals_item_category"><a href="#">Hotel</a></div>
                                  </div>
                                  <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                      <div class="bbb_deals_item_name">{hotel.name ? hotel.name : ''}</div>
                                      <div class="bbb_deals_item_price ml-auto">{hotel.price ? hotel.price : 'price under negotiate'}</div>
                                  </div>
                                  <div class="available">
                                      <div class="available_line d-flex flex-row justify-content-start">
                                          <div class="available_title">Contact Number: <span>{hotel.phone ? hotel.phone : "No phone number present"}</span></div>
                                          <div class="sold_stars ml-auto"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                      </div>
                                      <div class="available_bar"><span style={{width:'17%'}}></span></div>
                                  </div>
                              </div> 
                          </div>
                      </div>
                </div>
          </div>))}
          </div>
        </BootstrapCss>
      </main>

      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("hotels");

  let hotels = await db.collection("hotels").find({}).toArray();
  hotels = JSON.parse(JSON.stringify(hotels));

  return {
    props: { hotels },
  };
}
