<!DOCTYPE html>
<html lang="en">

  <?php
    $title = 'Figma Components';
  ?>
  
  <?php include 'templates/_partials/header.php'; ?>

      <div>

         <header class="work-header">
          <div class="work-header-title">
            <h1>Figma Custom-Made Components</h1>
            <h3 class="lighter">Community Resources</h3>
          </div>
          <div class="work-header-intro">
            <h2 class="small-title">Pushing the boundaries of Figma's prototyping capabilities.</h2>
          </div>
        </header>

        <div class="work-layout">

          <div class="work-row col-1">
            <div class="col">
                <img src="images/case-studies/figma/figma-hero.avif" class="full" alt="" />
            </div>
          </div>

          <div class="work-row col-2">
            <div class="col">
              <blockquote class="blockquote">
                <p class="work-quote">
                  I made the Figma <a href="https://www.figma.com/community/file/1327351869279090015" class="inline figma">interactive text input component</a> to enable both desktop and mobile keyboard input when prototpying.
                </p>
              </blockquote>
            </div>
            <div class="col">
         
            </div>
          </div>

          <div class="work-row col-2">
            <div class="col">
               <video disablepictureinpicture playsinline autoplay muted loop class="background-video">
                  <source src="images/case-studies/figma/figma-iphone-demo.webm" type="video/webm">
                  <source src="images/case-studies/figma/figma-iphone-demo.mp4" type="video/mp4">
                </video>
            </div>
            <div class="col">
               <img src="images/case-studies/figma/figma-logic.avif" class="full" alt="" />
            </div>
          </div>

          <div class="work-row col-2">
            <div class="col">
         
            </div>
            <div class="col">
              <blockquote class="blockquote">
                <p class="work-quote">
                  The component uses complex conditional logic to enable keystroke input, per character deletion, onBlur and onFocus event simulation as well as tying the input to a local variable that can be displayed in subsequent screens of a prototype user flow.
                </p>
              </blockquote>
            </div>
          </div>

           <div class="work-row col-1">
            <div class="col">
              <div class="video-container">
                <video disablepictureinpicture playsinline autoplay muted loop>
                    <source src="images/case-studies/figma/figma-demo.webm" type="video/webm">
                    <source src="images/case-studies/figma/figma-demo.mp4" type="video/mp4">
                </video>
              </div>
            </div>
          </div>


        </div>

      </div>

     <?php include 'templates/_partials/footer.php'; ?>

    </div>

  </body>
</html>