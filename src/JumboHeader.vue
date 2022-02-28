<template name="JumboHeader">
  <div>
    <div>
      <div class="jumbotron p-5">
        <div class="row">
          <div class="col-9">
            <div class="container">
              <h1>ARCP Requirements</h1>
              <h5>Northwest School of Anaesthesia</h5>
              <p>&nbsp;</p>
              <h6>
                Last update: 28th February 2022 &nbsp;
                <a
                  href="#detailsModal"
                  role="button"
                  class="btn btn-outline-secondary btn-sm m-1"
                  data-bs-toggle="modal"
                >
                  <i class="icon-arrow-right"></i>
                  See update history
                </a>
              </h6>
            </div>
          </div>
          <div style="width: 60px; margin-top: auto !important">
            <ul class="social-network social-circle">
              <li>
                <a href="mailto:jp.lomas@gmail.com" class="icoFacebook" title="Contact">
                  <font-awesome-icon icon="envelope" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/nw_anaesthesia" class="icoTwitter" title="Twitter">
                  <font-awesome-icon :icon="['fab', 'twitter']" />
                </a>
              </li>
              <li>
                <a href="https://github.com/jplomas/arcp" class="icoLinkedin" title="Github">
                  <font-awesome-icon :icon="['fab', 'github']" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="jazzy">&nbsp;</div>
  </div>
</template>
<style scoped>
.jumbotron {
  background-color: #e5e5e5;
  padding: 0;
  margin-bottom: 0;
  border-radius: 0;
}
.jumbotron-fluid {
  padding-right: 0;
}
.jazzy {
  background: rgb(49, 0, 255);
  background: linear-gradient(90deg, rgba(49, 0, 255, 1) 0%, rgba(3, 190, 255, 1) 41%, rgba(255, 219, 0, 1) 100%);
}
/* h1 {
  color: #fafafa;
}
h5 {
  color: #d4d4d4;
}
h6 {
  color: #848484;
} */
</style>