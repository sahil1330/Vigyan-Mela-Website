<?php
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vigyan Mela</title>
    <link rel="stylesheet" href="CSS/style.css">
    <link rel="stylesheet" href="CSS/navbar.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>

<body>
    <!-- <header>
    <p class="logo">Navbar</p>
        <input type="checkbox" name="" class="btn">
    <div class="nav">
        <ol>
        <h3><a href="#"></a>HOME</h3>
        <h3><a href="#"><b>ABOUT US</b></a></h3>
        <h3><a href="#"><b>CONTACT US</b></a></h3>
        <button>LOGIN</button>
    </ol>
    </div>
</header> -->
    <header>
        <p class="logo" style="font-family: sans-serif;"><b>VIGYAN MELA 3.0</b></p>
        <!-- <input type="checkbox" name="" class="btn" id="menu-toggle"> -->

        <img src="IMGS2/sidebar.svg" alt="Menu Icon" class="menu-icon" id="menu-toggle">

        <div class="nav">
            <ol>
                <li class="nav-home"> <a href="/"><b>HOME</b></a></li>
                <li><a href="feedback.php"><b>Feedback</b></a></li>
            </ol>
        </div>
    </header>

    <div id="main">

        <div id="page">
            <div id="loop">
                <h1><b>VIGYAN </b> MELA IS THE <b><i>BIGGEST</i></b> <span>EVENT</span> IN THE <span><i>CHETANA
                            COLLEGE.</i></span></h1>
                <h1><b>VIGYAN </b> MELA IS THE <b><i>BIGGEST</i></b> <span>EVENT</span> IN THE <span><i>CHETANA
                            COLLEGE.</i></span></h1>
                <h1><b>VIGYAN </b> MELA IS THE <b><i>BIGGEST</i></b> <span>EVENT</span> IN THE <span><i>CHETANA
                            COLLEGE.</i></span></h1>

            </div>
            <h3>WHY BUY<br>WHEN YOU CAN DIY</h3>
            <h4>...SCROLL TO READ</h4>
            <canvas></canvas>
        </div>
        <div class="loader-wrapper">
            <span class="loader"><span class="loader-inner"></span></span>
        </div>
        <script>
            $(window).on("load", function () {
                $(".loader-wrapper").fadeOut("slow");
            })
        </script>
        <div id="page1">
            <div id="right-text">
                <h1>AMAZING
                    <br>
                    IOT
                    <br>
                    PROJECTS
                </h1>
            </div>
            <div id="left-text">
                <h1>THAT WILL
                    <br>
                    MAKE YOU
                    <br>
                    SHOCK
                </h1>
                <h3></h3>
            </div>
        </div>
        <div id="page2">
            <div id="text1">

                <h1>BIGGEST
                    <br>
                    ELECTRONICS
                    <br>
                    PROJECT
                    <br>
                    EXHIBITION
                </h1>
            </div>
            <div id="text2">
                <p>SPARK THE CIRCUITS OF CURIOSITY <br>AND WITNESS THE VOLTAGE OF INNOVATION<br> – WELCOME TO VIGYAN
                    MELA, <br> WHERE ELECTROICS COME ALIVE!</p>
            </div>
        </div>
        <div id="page3">
            <div id="text3">

                <h1>

                    VOLTAGE MEETS
                    <br>
                    VISION AT
                    <br>
                    VIGYAN MELA
                </h1>

            </div>
        </div>
        <div id="section2">
            <div id="page4">
                <div id="about">
                    <div id="text3">

                        <h1>

                            ABOUT US
                        </h1>
                        <br><br>
                        <p>Welcome to Vigyaan Mela <br>where technology and science converge to shape our future!<br>
                            We're a passionate team dedicated to fostering <br>
                            innovation and exploration in the realms of
                            technology and science</p>
                    </div>
                    <br>
                    <div id="text4">
                        <p>
                            At Vigyaan Mela, we believe in the power of knowledge and creativity to drive progress. <br>
                            Our mission is to showcase cutting-edge advancements, <br>
                            inspire curiosity, and ignite a passion for discovery <br>
                            among visitors of all ages.
                        </p>

                    </div>

                    <br>



                </div>
            </div>
        </div>
        <div id="page5">
            <br>
            <div id="sponsors">

                <h1 align="center">

                    Our Sponsors
                </h1>
                <br><br>
                <div class="sponsorimg">
                    <div class="spon">
                        <img src="IMGS2/HI-Tech.png" height="200" width="300" alt="Meera Tourism">
                        <h3 align="center">Hi Technology</h3>
                    </div>
                    <div class="spon">
                        <img src="IMGS2/Robomaxx.jpg" height="200" width="300" alt="Robomax">
                        <h3 align="center">Robomax</h3>
                    </div>
                </div>
                <br>



            </div>
        </div>
        <!-- about -->

        <!-- <div class="person">
            <div class="container">
              <div class="container-inner">
                <img
                  class="circle"
                  
                />
              </div>
            </div>
            <div class="divider"></div>
            <div class="name">Vishnu</div>
            <div class="title">Event Head</div> 
          </div> -->
     
        <!-- contact -->
        <footer>
            <div class="footer">
                <div class="footer-content">
                    <div class="footer-section">
                        <h2>Vigyan Mela 2.0</h2>

                    </div>

                </div>
            </div>
        </footer>
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                var menuToggle = document.getElementById('menu-toggle');
                var nav = document.getElementById('nav');
            
                if (menuToggle && nav) {
                    menuToggle.addEventListener('click', function () {
                        nav.classList.toggle('show');
                    });
            
                    document.addEventListener('click', function (event) {
                        if (!nav.contains(event.target) && event.target !== menuToggle) {
                            nav.classList.remove('show');
                        }
                    });
                }
            });
            
                </script>
        <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"
            integrity="sha512-cOH8ndwGgPo+K7pTvMrqYbmI8u8k6Sho3js0gOqVWTmQMlLIi6TbqGWRTpf1ga8ci9H3iPsvDLr4X7xwhC/+DQ=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"
            integrity="sha512-AMl4wfwAmDM1lsQvVBBRHYENn1FR8cfOTpt8QVbb/P55mYOdahHD4LmHM1W55pNe3j/3od8ELzPf/8eNkkjISQ=="
            crossorigin="anonymous" referrerpolicy="no-referrer"></script>

        <script src="JS/navsnapscroll.js"></script>
        <script src="JS/script.js"></script>
</body>

</html>