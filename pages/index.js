import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import clientPromise from "../lib/mongodb";
import BootstrapCss from "../../util/styles";

export default function Home({hotels}) {
  return (
    <div className="container">
      <Head>
        <title>properties</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="properties" />
        <BootstrapCss >
        <div class="container mydiv">
          <div class="row">
            { hotels.map( hotel => (
              <div class="col-md-4">
                  <div class="bbb_deals">
                      <div class="ribbon ribbon-top-right"><span><small class="cross">x </small>4</span></div>
                      <div class="bbb_deals_title">Today's Combo Offer</div>
                      <div class="bbb_deals_slider_container">
                          <div class=" bbb_deals_item">
                              <div class="bbb_deals_image"><img src="https://i.imgur.com/9UYzfny.png" alt=""/></div>
                              <div class="bbb_deals_content">
                                  <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                      <div class="bbb_deals_item_category"><a href="#">Laptops</a></div>
                                      <div class="bbb_deals_item_price_a ml-auto"><strike>₹30,000</strike></div>
                                  </div>
                                  <div class="bbb_deals_info_line d-flex flex-row justify-content-start">
                                      <div class="bbb_deals_item_name">HP Notebook</div>
                                      <div class="bbb_deals_item_price ml-auto">₹25,550</div>
                                  </div>
                                  <div class="available">
                                      <div class="available_line d-flex flex-row justify-content-start">
                                          <div class="available_title">Available: <span>6</span></div>
                                          <div class="sold_stars ml-auto"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                      </div>
                                      <div class="available_bar"><span style="width:17%"></span></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>))}
            </div>
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
