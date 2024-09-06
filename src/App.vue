<template>
  <div>
    <main role="main">
      <JumboHeader />
      <div class="container pt-3">
        <div>
          <div>
            Selected curriculum:
            <strong>{{ name }}</strong>
          </div>
          <div class="btn-group dropend">
            <button
              type="button"
              class="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Choose Curriculum
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#" @click="choose(2021)">2021</a></li>
              <li><a class="dropdown-item" href="#" @click="choose(2010)">2010</a></li>
            </ul>
          </div>
        </div>
        <div class="alert alert-danger mt-3 mb-5">
          <strong>ACCS</strong>
          <br />
          For the first two years doing EM, AM, ICM and anaesthesia, before starting anaesthesia proper in ACCS3/CT2,
          the requirements for ARCP are specified by the ACCS TPD. Check the box below for a summary.
          <form class="form" autocomplete="off">
            <div class="control-group">
              <div class="controls">
                <label class="checkbox">
                  <input id="accsBox" v-model="accs" type="checkbox" />
                  Show ACCS Guidance
                </label>
              </div>
            </div>
          </form>
        </div>
        <div v-if="name === 2021 && accs === false" class="container mt-4">
          <ChooseYear />
        </div>
        <div v-if="name === 2010 && accs === false" class="container mt-4">
          <ChooseYearOld />
        </div>
        <div v-if="accs === false" class="alert alert-success mt-3 mb-5">
          <strong>LTFT</strong>
          <br />
          Specific guidance for those training less than full time is available.
          <form class="form" autocomplete="off">
            <div class="control-group">
              <div class="controls">
                <label class="checkbox">
                  <input id="ltftBox" v-model="ltft" type="checkbox" @click="setLTFTState()" />
                  Show LTFT Guidance
                </label>
              </div>
            </div>
          </form>
          <div v-if="ltft && !accs" class="LTFT">
            <p>
              A CCT calculator document is required at ARCP for those training less than full time. Additional LTFT
              guidance will be shown in green boxes in the sections below.
            </p>
            <strong>Item</strong>
            <blockquote>
              CCT calculator
              <br />
              <font-awesome-icon icon="triangle-exclamation" />
              <small>&nbsp;if you do not have this document, please contact your TPD/LTFT TPD</small>
            </blockquote>
            <strong>Frequency</strong>
            <blockquote>One CCT calculator per ARCP.</blockquote>
            <strong>Format</strong>
            <blockquote>
              Uploaded to the LLP document store.
              <em>
                <blockquote>
                  It is recommended that all documentation uploaded to the LLP is done by adding a 'Personal Activity'.
                  Using the 'Document Store' does not link to units of training and may mean the files are unavailable
                  at ARCP.
                </blockquote>
              </em>
            </blockquote>
            <strong>Title</strong>
            <blockquote>
              Named with the month and year of your ARCP in the format:
              <br />
              <code>Evidence - LTFT CCT calculator - July 2024</code>
            </blockquote>
          </div>
        </div>
        <div v-if="somethingChosen() && !accs" class="mt-4">
          Completion of training in anaesthesia involves satisfying the requirements of the North West School of
          Anaesthesia, the Royal College of Anaesthetists and the General Medical Council.
          <!-- The introduction of both a new Curriculum and an electronic Portfolio has led to changes in the way trainees collect and present evidence for review at ARCP. -->
          <br />
          <br />
          The ARCP is a 12-monthly review of progress through the training scheme and is independent of the progression
          through phases of training. Everybody enrolled on the training programme in the region will be invited to
          attend an ARCP every year, including those training on a less than full time basis.
          <br />
          <br />
          The aim of this site is to state explicitly the requirements for a satisfactory outcome at ARCP. This benefits
          trainees, who have a clear blueprint of their requirements; educational supervisors, who are able to offer
          consistent guidance; and the ARCP panel, who are presented evidence in a consistent format. As a reference,
          the ARCP Panel A use this proforma to guide outcome at:
          <ul v-if="name === 2010 && somethingChosen()">
            <li class="p-1">
              Core level:
              <a
                href="Panel%20A%20proforma%20CT%20training%20-%20June%2016.doc"
                class="btn btn-outline-secondary btn-sm"
              >
                <font-awesome-icon icon="download" />
                .doc
              </a>
              &nbsp;
              <a
                href="Panel%20A%20proforma%20CT%20training%20-%20June%2016.pdf"
                class="btn btn-outline-secondary btn-sm"
              >
                <font-awesome-icon icon="download" />
                .pdf
              </a>
            </li>

            <li class="p-1">
              Intermediate level:
              <a href="Panel%20A%20proforma.%20ST3-4%20Final.doc" class="btn btn-outline-secondary btn-sm">
                <font-awesome-icon icon="download" />
                .doc
              </a>
              &nbsp;
              <a href="Panel%20A%20proforma.%20ST3-4%20Final.pdf" class="btn btn-outline-secondary btn-sm">
                <font-awesome-icon icon="download" />
                .pdf
              </a>
            </li>
            <li class="p-1">
              Higher level:
              <a href="Panel%20A%20proforma.%20ST5-7%20Final.doc" class="btn btn-outline-secondary btn-sm">
                <font-awesome-icon icon="download" />
                .doc
              </a>
              &nbsp;
              <a href="Panel%20A%20proforma.%20ST5-7%20Final.pdf" class="btn btn-outline-secondary btn-sm">
                <font-awesome-icon icon="download" />
                .pdf
              </a>
            </li>
          </ul>

          <ul v-if="name === 2021 && somethingChosen()">
            <li v-if="toShow('CT1 CT2 CT3')" class="p-1">
              Stage 1:
              <a href="Stage%201%20ARCP%20Proforma.doc" class="btn btn-outline-secondary btn-sm">
                <font-awesome-icon icon="download" />
                .doc
              </a>
              &nbsp;
              <a href="Stage%201%20ARCP%20Proforma.pdf" class="btn btn-outline-secondary btn-sm">
                <font-awesome-icon icon="download" />
                .pdf
              </a>
            </li>
            <li v-if="toShow('ST4 ST5')" class="p-1">
              Stage 2:
              <a href="Stage%202%20ARCP%20Proforma.doc" class="btn btn-outline-secondary btn-sm">
                <font-awesome-icon icon="download" />
                .doc
              </a>
              &nbsp;
              <a href="Stage%202%20ARCP%20Proforma.pdf" class="btn btn-outline-secondary btn-sm">
                <font-awesome-icon icon="download" />
                .pdf
              </a>
            </li>
            <li v-if="toShow('ST6 ST7')" class="p-1">
              Stage 3:
              <a href="Stage%203%20ARCP%20Proforma.doc" class="btn btn-outline-secondary btn-sm">
                <font-awesome-icon icon="download" />
                .doc
              </a>
              &nbsp;
              <a href="Stage%203%20ARCP%20Proforma.pdf" class="btn btn-outline-secondary btn-sm">
                <font-awesome-icon icon="download" />
                .pdf
              </a>
            </li>
          </ul>

          <div class="alert bg-warning p-3 mb-3 mt-3">
            <strong>
              <font-awesome-icon icon="triangle-exclamation" />
              IMPORTANT
            </strong>
            <br />
            ARCP panels will reviewing evidence within the Lifelong Learning Platform
            <strong>ten working days (two weeks)</strong>
            prior to the advised date of your ARCP. Any evidence added after this cut-off date will not be considered as
            part of your ARCP outcome. It is strongly recommended that trainees keep their LLP up-to-date and stay on
            top of these requirements.
          </div>
        </div>
      </div>

      <div v-if="name === 2010 && somethingChosen() && !accs">
        <Curr2010 :ltft="ltft" />
      </div>

      <div v-if="name === 2021 && somethingChosen() && !accs">
        <Curr2021 :ltft="ltft" />
      </div>

      <div v-if="accs">
        <div class="container mt-4 alert alert-danger">
          <h2>ACCS</h2>
          <h4>Summary of Requirements</h4>
          <p>
            The ACCS curriculum is a 3-year programme that includes 12 months of anaesthesia training. The ARCP
            requirements for the first two years of ACCS are set by the ACCS TPD. The requirements for the anaesthesia
            year are the same as for CT2.
          </p>
          <p>
            The ACCS TPD has provided a summary of the requirements for ARCP in the first two years of ACCS. This is
            available to download here:
            <a href="ACCS%20ARCP%20Requirement%20Guide.pdf" class="btn btn-outline-secondary btn-sm">
              <font-awesome-icon icon="download" />
              .pdf
            </a>
          </p>
          <h4>End of Placement</h4>
          <p>
            The End of placement form, completed by the Educational Supervisor for an ACCS2 trainee, is required at the
            end of ICM and Anaesthesia placements: this may be two different supervisors.
            <a href="ACCS%20End%20of%20placement%20report.docx" class="btn btn-outline-secondary btn-sm">
              <font-awesome-icon icon="download" />
              .docx
            </a>
          </p>
          <h4>End of Year</h4>
          <p>
            The ESSR End of Year form, which the Anaesthesia Overarching Educational Supervisor needs to complete at the
            end of each training year for ACCS 1 and 2 is here:
            <a
              href="ACCS%20Educational%20Supervisors%20End%20of%20year%20report.docx"
              class="btn btn-outline-secondary btn-sm"
            >
              <font-awesome-icon icon="download" />
              .docx
            </a>
          </p>
        </div>
      </div>
    </main>
    <FooterInfo />
    <DetailsModal />
    <!-- <font-awesome-icon icon="user-secret" /> -->
  </div>
</template>

<script>
import FooterInfo from './Footer-Info.vue';
import ChooseYear from './Choose-Year.vue';
import ChooseYearOld from './Choose-Year-Old.vue';
import JumboHeader from './JumboHeader.vue';
import Curr2010 from './Curriculum-2010.vue';
import Curr2021 from './Curriculum-2021.vue';
import DetailsModal from './DetailsModal.vue';
import 'bootstrap/dist/js/bootstrap.min.js';

export default {
  components: { FooterInfo, ChooseYear, ChooseYearOld, JumboHeader, Curr2010, Curr2021, DetailsModal },
  data() {
    return {
      name: 2021,
      ltft: false,
      accs: false,
    };
  },
  methods: {
    setLTFTState() {
      if (this.ltft) {
        this.$store.state.ltft = false;
      } else {
        this.$store.state.ltft = true;
      }
    },
    choose(name) {
      if (this.name !== name) {
        this.$store.state.items = -1;
        this.name = name;
      }
    },
    somethingChosen() {
      if (this.$store.state.items !== -1) {
        return true;
      }
      return false;
    },
    toShow(years) {
      let show = false;
      const yearsArray = years.split(' ');
      yearsArray.forEach((year) => {
        if (
          (this.$store.state.items === 1 || this.$store.state.items === 100 || this.$store.state.items === 0) &&
          year === 'CT1'
        ) {
          show = true;
        }
        if (
          (this.$store.state.items === 2 || this.$store.state.items === 100 || this.$store.state.items === 0) &&
          year === 'CT2'
        ) {
          show = true;
        }
        if (
          (this.$store.state.items === 3 || this.$store.state.items === 100 || this.$store.state.items === 0) &&
          year === 'CT3'
        ) {
          show = true;
        }
        if (
          (this.$store.state.items === 4 || this.$store.state.items === 200 || this.$store.state.items === 0) &&
          year === 'ST4'
        ) {
          show = true;
        }
        if (
          (this.$store.state.items === 5 || this.$store.state.items === 200 || this.$store.state.items === 0) &&
          year === 'ST5'
        ) {
          show = true;
        }
        if (
          (this.$store.state.items === 6 || this.$store.state.items === 300 || this.$store.state.items === 0) &&
          year === 'ST6'
        ) {
          show = true;
        }
        if (
          (this.$store.state.items === 7 || this.$store.state.items === 300 || this.$store.state.items === 0) &&
          year === 'ST7'
        ) {
          show = true;
        }
      });
      return show;
    },
  },
};
</script>
