<template name="choose-year">
  <div class="container">
    <div class="row text-center">
      <h4>Choose year of training</h4>
    </div>
    <div class="row justify-content-center">
      <div class="col-auto mb-2">
        <table>
          <tr>
            <td colspan="3">
              <div class="d-grid m-1">
                <button
                  class="btn"
                  :class="{ 'btn-primary': isActive('Stage1'), 'btn-outline-primary': !isActive('Stage1') }"
                  @click="setYear(100)"
                >
                  Stage 1
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <button
                id="CT1"
                class="m-1 btn"
                :class="{ 'btn-secondary': isActive('CT1'), 'btn-outline-secondary': !isActive('CT1') }"
                @click="setYear(1)"
              >
                CT1
              </button>
            </td>
            <td>
              <button
                id="CT2"
                class="m-1 btn"
                :class="{ 'btn-secondary': isActive('CT2'), 'btn-outline-secondary': !isActive('CT2') }"
                @click="setYear(2)"
              >
                CT2
              </button>
            </td>
            <td>
              <button
                id="CT3"
                class="m-1 btn"
                :class="{ 'btn-secondary': isActive('CT3'), 'btn-outline-secondary': !isActive('CT3') }"
                @click="setYear(3)"
              >
                CT3
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div class="col-auto mb-2">
        <table>
          <tr>
            <td colspan="2">
              <div class="d-grid m-1">
                <button
                  class="btn"
                  :class="{ 'btn-primary': isActive('Stage2'), 'btn-outline-primary': !isActive('Stage2') }"
                  @click="setYear(200)"
                >
                  Stage 2
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <button
                id="ST4"
                class="m-1 btn"
                :class="{ 'btn-secondary': isActive('ST4'), 'btn-outline-secondary': !isActive('ST4') }"
                @click="setYear(4)"
              >
                ST4
              </button>
            </td>
            <td>
              <button
                id="ST5"
                class="m-1 btn"
                :class="{ 'btn-secondary': isActive('ST5'), 'btn-outline-secondary': !isActive('ST5') }"
                @click="setYear(5)"
              >
                ST5
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div class="col-auto mb-2">
        <table>
          <tr>
            <td colspan="2">
              <div class="d-grid m-1">
                <button
                  class="btn"
                  :class="{ 'btn-primary': isActive('Stage3'), 'btn-outline-primary': !isActive('Stage3') }"
                  @click="setYear(300)"
                >
                  Stage 3
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <button
                id="ST6"
                class="m-1 btn"
                :class="{ 'btn-secondary': isActive('ST6'), 'btn-outline-secondary': !isActive('ST6') }"
                @click="setYear(6)"
              >
                ST6
              </button>
            </td>
            <td>
              <button
                id="ST7"
                class="m-1 btn"
                :class="{ 'btn-secondary': isActive('ST7'), 'btn-outline-secondary': !isActive('ST7') }"
                @click="setYear(7)"
              >
                ST7
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="row justify-content-center">
      <button
        id="ALL"
        class="btn m-1"
        :class="{ 'btn-warning': isActive('ALL'), 'btn-outline-warning': !isActive('ALL') }"
        @click="setYear(0)"
      >
        Show All
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'ChooseYear',
      items: -1,
    };
  },
  methods: {
    setYear(option) {
      if (this.$store.state.items === 0 && option === 0) {
        this.$store.state.items = -1;
      } else {
        this.$store.state.items = option;
      }
    },
    isActive(year) {
      if (this.$store.state.items === 0) {
        return true;
      }
      if (year === 'CT1') {
        if (this.$store.state.items === 1) {
          return true;
        }
        if (this.$store.state.items === 100) {
          return true;
        }
        return false;
      }
      if (year === 'CT2') {
        if (this.$store.state.items === 2) {
          return true;
        }
        if (this.$store.state.items === 100) {
          return true;
        }
        return false;
      }
      if (year === 'CT3') {
        if (this.$store.state.items === 3) {
          return true;
        }
        if (this.$store.state.items === 100) {
          return true;
        }
        return false;
      }
      if (year === 'ST4') {
        if (this.$store.state.items === 4) {
          return true;
        }
        if (this.$store.state.items === 200) {
          return true;
        }
        return false;
      }
      if (year === 'ST5') {
        if (this.$store.state.items === 5) {
          return true;
        }
        if (this.$store.state.items === 200) {
          return true;
        }
        return false;
      }
      if (year === 'ST6') {
        if (this.$store.state.items === 6) {
          return true;
        }
        if (this.$store.state.items === 300) {
          return true;
        }
        return false;
      }
      if (year === 'ST7') {
        if (this.$store.state.items === 7) {
          return true;
        }
        if (this.$store.state.items === 300) {
          return true;
        }
        return false;
      }
      if (year === 'Stage1') {
        if (this.$store.state.items === 100) {
          return true;
        }
        return false;
      }
      if (year === 'Stage2') {
        if (this.$store.state.items === 200) {
          return true;
        }
        return false;
      }
      if (year === 'Stage3') {
        if (this.$store.state.items === 300) {
          return true;
        }
        return false;
      }
      return false;
    },
  },
};
</script>