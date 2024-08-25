import Sidebar from "../components/Sidebar";
import "./Home.css";
const Home = () => {
  const sampleText1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const sampleText2 =
    "Accumsan cursus nec ullamcorper vitae lectus aenean augue. Egestas laoreet vestibulum dui nisi mollis. Dictum finibus nisl in; auctor dis finibus. Tellus consectetur elit vitae blandit potenti duis non turpis nisi. Dis ante himenaeos at curae potenti penatibus? Ullamcorper rhoncus habitasse tristique facilisi montes. Interdum sed proin laoreet vehicula dis sit adipiscing. Dictum egestas hac per congue eleifend adipiscing.";
  const sampleText3 =
    "Velit platea ut eget class aliquam tortor. Aliquam facilisi auctor orci vestibulum feugiat. Sem molestie conubia egestas mi morbi diam in posuere per. Sit odio nulla natoque etiam vitae natoque nibh. Penatibus duis cubilia mattis rhoncus dolor elementum vivamus molestie. Non quis donec montes nullam facilisis ut penatibus natoque habitant. Sit amet ad urna sociosqu volutpat sodales nunc posuere a. Aenean elementum ac viverra, efficitur class odio nostra nulla.";
  const sampleText4 =
    "Nisi sit gravida suscipit ornare id suspendisse himenaeos tincidunt. Placerat faucibus accumsan non tortor massa sollicitudin libero. Nascetur faucibus parturient fermentum laoreet mus pharetra eu consectetur elit. Curae faucibus montes venenatis nam posuere. Metus sit taciti malesuada fringilla euismod fusce sed. Taciti praesent tempor nulla facilisis commodo hendrerit. Ligula orci vehicula sollicitudin lacinia eleifend bibendum eleifend.";

  return (
    <>
      <Sidebar />
      <div id="landing-page-container">
        <p id="landing-page-title">
          Welcome to Cash<span className="purple">Flow</span>!
        </p>
        <p id="landing-page-text">{sampleText1}</p>
        <p id="landing-page-text">{sampleText2}</p>
        <p id="landing-page-text">{sampleText3}</p>
        <p id="landing-page-text">{sampleText4}</p>
      </div>
    </>
  );
};

export default Home;
