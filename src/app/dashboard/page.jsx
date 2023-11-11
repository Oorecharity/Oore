"use client";

import Navbar from "../components/dashboardComponent/Navbar";
import Sidebar from "../components/dashboardComponent/Sidebar";
import ProgressBar from "../components/dashboardComponent/progressbar";
import PrimaryButton from "../components/dashboardComponent/PrimaryButton";
import SecondaryButton from "../components/dashboardComponent/SecondaryButton";
import VellaCheckout from "vella-pay";

const Dashboard = () => {
  const handleDonate = () => {
    // const key = "vk_live_t6WTM01pLZZ84tEwzAY85ShYAPV9Wdm6z7pDChQDDGpx4JUsyWa0aOkwUhZo"; // your vella API test/live key
    // const config = {
    //   email: "bakale.mahmud@gmail.com", // string - customer email
    //   name: "Mahmud Bakale", // string - customer name
    //   amount: 500.0, //float - amount to pay
    //   currency: "NGN", // supported currency  NGN USD,GBP,USDT,USDC
    //   merchant_id: "riquezamcp", // string - merchant id
    //   reference: "Ooy-9887", // string - generated reference
    //   // custom_meta: {}, // custom meta data,
    //   // source: "widget-local", // domain or location name widget is being cal
    // };
    // const vellaSDK = new VellaCheckout(key, config);
    // vellaSDK.init();
    // vellaSDK.onSuccess(response => {
    //   console.log("data", response) // success response with data
    //   //trigger close widget
    //   vellaSDK.closeWidget();
    // })
    // vellaSDK.onError(error => {
    //   console.log("error", error) // error response
    // });
    // vellaSDK.onClose(() => {
    //   console.log("widget closed") // close response
    // });
    // // alert(window.location.href);

    window.location = "https://me.vella.finance/link/oore-charity-donation";
  };
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: "40px", display: "flex" }}>
        <Sidebar />
        <section style={{ flex: 1, paddingLeft: "300px" }}>
          <h2
            style={{
              fontFamily: "Montserrat",
              fontSize: "30px",
              fontWeight: "700",
              lineHeight: "28px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#007D4D",
            }}
          >
            Current Projects and Total Donations
          </h2>
          <h4
            style={{
              marginTop: "23px",
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "28px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "",
            }}
          >
            Provide Sanitary Pads for 100 girls for 12 months
          </h4>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ProgressBar percentage={45} /> {/*Progress bar component */}
            <PrimaryButton onClick={handleDonate}>
              Donate {/*Primary button component */}
            </PrimaryButton>
            <SecondaryButton>
              View Project {/*Secondary button component */}
            </SecondaryButton>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
