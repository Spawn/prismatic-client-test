import "./App.css";
import prismatic from "@prismatic-io/marketplace";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    prismatic.init();
    const token =
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3OCIsImV4dGVybmFsX2lkIjoiNzgiLCJvcmdhbml6YXRpb24iOiJUM0puWVc1cGVtRjBhVzl1T2prM016VXlPR0l4TFRFNE5HWXRORFptWlMxaE5qRXpMVFZoWWpZNU5HSTFaamRpWVE9PSIsIm5hbWUiOiJCViIsImN1c3RvbWVyIjoidGVzdGlkMTIzNDU2Nzg5MCIsImlhdCI6MTY3NTk0OTM3MiwiZXhwIjoxNjc1OTU1MzcyLCJyb2xlIjoiYWRtaW4ifQ.txzh893fMZtSUqgBOZEFzcZnYT-CIZECln_758clwWzv-uQN_QxPlkmFI0fazhSY3p7KCwEC2fnTZWJxl7aUPENIn7Bf1jYjF3khcw2eYpvd-7sz3FeEfYOwHc-BL0GY_60Spn-BeXYCwFTl3Wyz9KQQ1muYIBbXHOnAPAoQQ0UX6s_x9mHEcMiMclSQWfor5GSk53KMO3eGu9lTixZSeJb5wRX4RTTv2s8_Fi2z-WEArt_NskGfTFsCaqEi-E04oyt29mFRybOGfZ4HlH3Hlo45BKftuKO3-dyr5VDMOTONypR3mCGI78YJkzN_LQTXG8S6Axzfq7lLJWxPbjmulQ";
    try {
      prismatic.authenticate({ token });
    } catch (error) {
      console.error(`Authentication failed with error ${error}`);
    }
    prismatic.showMarketplace({
      selector: `#integration-marketplace-placeholder`,
      usePopover: false,
    });
  });

  return (
    <div id="integration-marketplace-placeholder" style={{ height: "100%" }}>
      Loading...
    </div>
  );
}

export default App;
