import './App.css';
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    const menuToggleInput = document.querySelector("#menuToggle input");

    const handleToggleMenu = () => {
      if (menuToggleInput.checked) {
        document.body.classList.add("menu-open");
      } else {
        document.body.classList.remove("menu-open");
      }
    };

    menuToggleInput.addEventListener("change", handleToggleMenu);

    return () => {
      menuToggleInput.removeEventListener("change", handleToggleMenu);
    };
  }, []);

  useEffect(() => {
    const scrollStep = 300; // Adjust scroll step as needed

    const handleScrollLeft = () => {
      document.querySelector('.products-list').scrollBy({
        left: -scrollStep,
        behavior: 'smooth'
      });
    };

    const handleScrollRight = () => {
      document.querySelector('.products-list').scrollBy({
        left: scrollStep,
        behavior: 'smooth'
      });
    };

    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    arrowLeft.addEventListener('click', handleScrollLeft);
    arrowRight.addEventListener('click', handleScrollRight);

    return () => {
      arrowLeft.removeEventListener('click', handleScrollLeft);
      arrowRight.removeEventListener('click', handleScrollRight);
    };
  }, []);
  


  return (
    <div className="App">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <img src={require("./images/sign.png")} className="sign-menu" alt="Sign" />
            <div className="menu-txt">
              <a href="#"><li>HOME</li></a>
              <a href="#Products"><li>PRODUCTS</li></a>
              <a href="#"><li>MEET CHEF MATT</li></a>
              <a href="#"><li>CONNECT WITH US</li></a>
              <p className="support">TEXT SUPPORT 24/7 070-7782-9137</p>
              <hr className="support-line" width="100%" size="2" color="white" />
            </div>
          </ul>
        </div>
      </nav>

      <div className="main">
        <img src={require("./images/Chef.jpeg")} className="main-img" alt="Chef" />
        <button className="meet-button">
          <h1 className="b-h1" style={{ fontWeight: 400 }}>Meet Chef Matt</h1>
        </button>
        <div className="sign_contain">
          <img src={require("./images/sign.png")} className="sign" alt="Sign" />
          <div className="orange"><h1></h1></div>
        </div>
      </div>

      <div className="product-container" href="Products">
        <div className="products" >
          <img src={require("./images/leaf.png")} className="leaf" alt="Leaf" />
          <h1 className="product-title">CHEF MATT PRODUCTS</h1>
          <hr className="product-line" />
          <p className="describe">Shop Gourmet Chef Quality products from the Chef Matt brand. Chef it yourself and Thank us later.</p>
        </div>
        <div className="arrow arrow-left">&lt;</div>
        <div className="arrow arrow-right">&gt;</div>
        
        <div className="products-list">
          <div className="marquee">
            <div className="product-item">
              <img className="list-p" src={require("./images/p1.jpeg")} alt="Product 1" />
              <div className="product-info">
                <h3 className="product-name">CINNAMON HONEY</h3>
                <p className="product-price" style={{ textDecoration: 'line-through' }}>$19.99</p><p>$15.00</p>
              </div>
            </div>
            <div className="product-item">
              <img className="list-p" src={require("./images/Co.jpeg")} alt="Coconut Oil" />
              <div className="product-info">
                <h3 className="product-name">COCONUT OIL</h3>
                <p className="product-price" style={{ textDecoration: 'line-through' }}>$24.99</p><p>$6.00</p>
              </div>
            </div>
            <div className="product-item">
              <img className="list-p" src={require("./images/mh.jpeg")} alt="Mango Honey" />
              <div className="product-info">
                <h3 className="product-name">MANGO HONEY</h3>
                <p className="product-price" style={{ textDecoration: 'line-through' }}>$24.99</p><p>$9.00</p>
              </div>
            </div>
            <div className="product-item">
              <img className="list-p" src={require("./images/HH.jpeg")} alt="Honey Habanero" />
              <div className="product-info">
                <h3 className="product-name">HONEY HABANERO</h3>
                <p className="product-price" style={{ textDecoration: 'line-through' }}>$24.99</p><p>$9.00</p>
              </div>
            </div>
            <div className="product-item">
              <img className="list-p" src={require("./images/Co.jpeg")} alt="Product 2" />
              <div className="product-info">
                <h3 className="product-name">Product 2</h3>
                <p className="product-price" style={{ textDecoration: 'line-through' }}>$24.99</p><p>$12.00</p>
              </div>
            </div>
            <div className="product-item">
              <img className="list-p" src={require("./images/Co.jpeg")} alt="Product 2" />
              <div className="product-info">
                <h3 className="product-name">Product 2</h3>
                <p className="product-price" style={{ textDecoration: 'line-through' }}>$24.99</p><p>$13.00</p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="offer-banner">
            <h1 className="offer-title">ONLINE ONLY</h1>
            <p className="offer-desc">GET 20% OFF YOUR ORDER OF $50 OR MORE Use code “Chef20”</p>
            <button className="shop-now">Shop Now</button>
            <img className="offer-img" src={require("./images/deal.png")}alt="Deal" />
          </div>
        </section>
      </div>
      
      <div className="Sign-Container">
        <h1 className="sign-title">SIGN UP SPECIAL PROMOTIONS</h1>
        <p className="sign-desc"> Get exclusive deals you won’t find anywhere else straight to your inbox!</p>
        <input placeholder="Enter email address" />
        <button className="sub" type='submit'>Subscribe</button>
        <img className="steak" src={require("./images/steak.jpeg")} alt="Steak" />
      </div>
      <div class="bottom">
         <h3>
            <svg style={{marginRight:'15px', marginTop:'5px'}} width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_1_151" fill="white">
            <path d="M4 8H0.727273C0.420336 8 0.266867 8 0.160289 7.92022C0.129752 7.89736 0.102643 7.87025 0.0797835 7.83971C0 7.73313 0 7.57966 0 7.27273C0 4.20336 0 2.66867 0.797835 1.60289C1.02643 1.29752 1.29752 1.02643 1.60289 0.797835C2.66867 0 4.20336 0 7.27273 0H28.7273C31.7966 0 33.3313 0 34.3971 0.797835C34.7025 1.02643 34.9736 1.29752 35.2022 1.60289C36 2.66867 36 4.20336 36 7.27273C36 7.57966 36 7.73313 35.9202 7.83971C35.8974 7.87025 35.8702 7.89736 35.8397 7.92022C35.7331 8 35.5797 8 35.2727 8H32V24C32 27.7712 32 29.6569 30.8284 30.8284C29.6569 32 27.7712 32 24 32H12C8.22876 32 6.34315 32 5.17157 30.8284C4 29.6569 4 27.7712 4 24V8Z"/>
            </mask>
            <path d="M4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10V6ZM32 10C33.1046 10 34 9.10457 34 8C34 6.89543 33.1046 6 32 6V10ZM14 22C12.8954 22 12 22.8954 12 24C12 25.1046 12.8954 26 14 26V22ZM22 26C23.1046 26 24 25.1046 24 24C24 22.8954 23.1046 22 22 22V26ZM32 6H4V10H32V6ZM14 26H22V22H14V26ZM4 8H8V4H4V8ZM32 8V4H28V8H32ZM35.9202 7.83971L39.1224 10.2368V10.2368L35.9202 7.83971ZM35.8397 7.92022L38.2368 11.1224L35.8397 7.92022ZM0.160289 7.92022L-2.23682 11.1224L-2.23682 11.1224L0.160289 7.92022ZM0.0797835 7.83971L-3.12238 10.2368L0.0797835 7.83971ZM34.3971 0.797835L36.7942 -2.40433L34.3971 0.797835ZM35.2022 1.60289L38.4043 -0.794221V-0.794221L35.2022 1.60289ZM1.60289 0.797835L-0.794221 -2.40433H-0.794221L1.60289 0.797835ZM0.797835 1.60289L-2.40433 -0.794221V-0.794221L0.797835 1.60289ZM28 8V24H36V8H28ZM24 28H12V36H24V28ZM8 24V8H0V24H8ZM7.27273 4H28.7273V-4H7.27273V4ZM4 4H0.727273V12H4V4ZM35.2727 4H32V12H35.2727V4ZM32 7.27273C32 7.31321 32 7.33956 31.9999 7.36239C31.9998 7.38458 31.9996 7.39227 31.9996 7.39162C31.9997 7.39107 32 7.37259 32.0017 7.34223C32.0033 7.31203 32.0068 7.25939 32.0143 7.19107C32.043 6.93189 32.1554 6.19425 32.7181 5.4426L39.1224 10.2368C39.7648 9.37859 39.9171 8.51093 39.9657 8.07164C40.0057 7.71029 40 7.33496 40 7.27273H32ZM35.2727 12C35.335 12 35.7103 12.0057 36.0716 11.9657C36.5109 11.9171 37.3786 11.7648 38.2368 11.1224L33.4426 4.71805C34.1943 4.15537 34.9319 4.04303 35.1911 4.01433C35.2594 4.00676 35.312 4.0033 35.3422 4.00167C35.3726 4.00002 35.3911 3.99965 35.3916 3.99964C35.3923 3.99963 35.3846 3.99978 35.3624 3.99989C35.3396 3.99999 35.3132 4 35.2727 4V12ZM32.7181 5.4426C32.9238 5.16777 33.1678 4.92379 33.4426 4.71805L38.2368 11.1224C38.5727 10.8709 38.8709 10.5727 39.1224 10.2368L32.7181 5.4426ZM0.727273 4C0.686788 4 0.660439 3.99999 0.637609 3.99989C0.615412 3.99978 0.607726 3.99963 0.608369 3.99964C0.608921 3.99965 0.627405 4.00002 0.657762 4.00167C0.687964 4.0033 0.740597 4.00676 0.808918 4.01433C1.0681 4.04303 1.80574 4.15536 2.5574 4.71805L-2.23682 11.1224C-1.37858 11.7649 -0.51092 11.9171 -0.071625 11.9657C0.289714 12.0057 0.665045 12 0.727273 12V4ZM-4 7.27273C-4 7.33495 -4.00574 7.71029 -3.96572 8.07162C-3.91708 8.51092 -3.76485 9.37858 -3.12238 10.2368L3.28195 5.4426C3.84464 6.19426 3.95697 6.9319 3.98567 7.19108C3.99324 7.2594 3.9967 7.31204 3.99833 7.34224C3.99998 7.37259 4.00035 7.39108 4.00036 7.39163C4.00037 7.39227 4.00022 7.38459 4.00011 7.36239C4.00001 7.33956 4 7.31321 4 7.27273H-4ZM2.5574 4.71805C2.83222 4.92378 3.07621 5.16777 3.28195 5.4426L-3.12238 10.2368C-2.87093 10.5727 -2.57272 10.8709 -2.23682 11.1224L2.5574 4.71805ZM28.7273 4C30.3532 4 31.244 4.00574 31.8733 4.07543C32.4246 4.13648 32.2721 4.20366 32 4L36.7942 -2.40433C35.4564 -3.40583 34.0036 -3.73756 32.7538 -3.87597C31.582 -4.00574 30.1707 -4 28.7273 -4V4ZM40 7.27273C40 5.82928 40.0057 4.41804 39.876 3.24619C39.7376 1.99639 39.4058 0.543619 38.4043 -0.794221L32 4C31.7963 3.72794 31.8635 3.57541 31.9246 4.12674C31.9943 4.75602 32 5.6468 32 7.27273H40ZM32 4H32L38.4043 -0.794221C37.9471 -1.40495 37.405 -1.94714 36.7942 -2.40433L32 4ZM7.27273 -4C5.82928 -4 4.41804 -4.00574 3.24619 -3.87597C1.99639 -3.73756 0.54362 -3.40583 -0.794221 -2.40433L4 4C3.72794 4.20366 3.57541 4.13648 4.12674 4.07543C4.75602 4.00574 5.6468 4 7.27273 4V-4ZM4 7.27273C4 5.6468 4.00574 4.75602 4.07543 4.12674C4.13648 3.57541 4.20366 3.72794 4 4L-2.40433 -0.794221C-3.40583 0.54362 -3.73756 1.99639 -3.87597 3.24619C-4.00574 4.41804 -4 5.82928 -4 7.27273H4ZM-0.794221 -2.40433C-1.40495 -1.94714 -1.94714 -1.40495 -2.40433 -0.794221L4 4L-0.794221 -2.40433ZM12 28C10.0013 28 8.90467 27.9915 8.1439 27.8892C7.4982 27.8024 7.71871 27.7187 8 28L2.34315 33.6569C3.79601 35.1097 5.54511 35.6118 7.07792 35.8179C8.49566 36.0085 10.2275 36 12 36V28ZM0 24C0 25.7725 -0.008495 27.5043 0.182115 28.9221C0.388196 30.4549 0.890283 32.204 2.34315 33.6569L8 28C8.28129 28.2813 8.19759 28.5018 8.11078 27.8561C8.0085 27.0953 8 25.9987 8 24H0ZM28 24C28 25.9987 27.9915 27.0953 27.8892 27.8561C27.8024 28.5018 27.7187 28.2813 28 28L33.6569 33.6569C35.1097 32.204 35.6118 30.4549 35.8179 28.9221C36.0085 27.5043 36 25.7725 36 24H28ZM24 36C25.7725 36 27.5043 36.0085 28.9221 35.8179C30.4549 35.6118 32.204 35.1097 33.6569 33.6569L28 28C28.2813 27.7187 28.5018 27.8024 27.8561 27.8892C27.0953 27.9915 25.9987 28 24 28V36Z" fill="#D29A5A" mask="url(#path-1-inside-1_1_151)"/>
            </svg>
            FREE SHIPPING WORLDWIDE
        </h3>
        
        <h3>  
            <svg  style={{marginRight:'15px', marginTop:'5px'}} width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 26V20C2 15.2261 3.63303 10.6477 6.53985 7.27208C9.44666 3.89642 13.3891 2 17.5 2C21.6109 2 25.5533 3.89642 28.4602 7.27208C31.367 10.6477 33 15.2261 33 20V26M29.125 32C26.9849 32 25.25 30.2091 25.25 28V22C25.25 19.7909 26.9849 18 29.125 18C31.2651 18 33 19.7909 33 22V28C33 30.2091 31.2651 32 29.125 32ZM5.875 32C3.7349 32 2 30.2091 2 28V22C2 19.7909 3.7349 18 5.875 18C8.0151 18 9.75 19.7909 9.75 22V28C9.75 30.2091 8.0151 32 5.875 32Z" stroke="#D29A5A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                
            24/7 CUSTOMER SERVICE        
        </h3>
       
        <h3>
            <svg style={{marginRight:'15px', marginTop:'5px'}}  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 38C24.1644 38 28.1999 36.5561 31.4191 33.9142C34.6382 31.2723 36.8417 27.596 37.6541 23.5116C38.4665 19.4273 37.8376 15.1875 35.8746 11.5149C33.9115 7.8422 30.7357 4.96382 26.8883 3.37017C23.0409 1.77653 18.76 1.56622 14.7749 2.77508C10.7898 3.98394 7.34718 6.53717 5.03357 9.99974C2.71996 13.4623 1.67852 17.62 2.0867 21.7643C2.49488 25.9086 4.32743 29.7832 7.27209 32.7279M28 16L20.8041 24.6351C19.4929 26.2085 18.8374 26.9952 17.9562 27.0351C17.0751 27.0751 16.351 26.351 14.9028 24.9028L12 22" stroke="#D29A5A" stroke-width="4" stroke-linecap="round"/>
                </svg>
                  
            QUALITY GUARANTEE!
        </h3>
        
    </div>
    <div class="bottom2">
        <span>
            Guaranteed Delivery
        </span>
        <span>
            Text Us 24/7 at 070-7782-9137
        </span>
        <span >
            Send Within 30 Days
        </span>

    </div>
    <hr class="bottom-line"/>

<footer>
    <img class="footer-sign" src={require("./images/sign.png")}alt=""/>
</footer>

      
      
    </div>
  );
}

export default App;
